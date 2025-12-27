-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for secure role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents infinite recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON public.user_roles
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Create company_settings table
CREATE TABLE public.company_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name TEXT NOT NULL DEFAULT 'Growin Pharma',
    owner_name TEXT DEFAULT 'Dr. Ravi Kumar',
    tagline TEXT DEFAULT 'Caring Your Livestock',
    phone TEXT DEFAULT '+91 9876543210',
    email TEXT DEFAULT 'info@growinpharma.com',
    address TEXT DEFAULT 'Industrial Area, Ambala, Haryana, India',
    about_text TEXT DEFAULT 'Growin Pharma is a leading veterinary pharmaceutical company dedicated to improving animal health through innovative medicines and feed supplements.',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.company_settings ENABLE ROW LEVEL SECURITY;

-- Company settings policies
CREATE POLICY "Anyone can view company settings" ON public.company_settings
FOR SELECT USING (true);

CREATE POLICY "Admins can update company settings" ON public.company_settings
FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

-- Insert default company settings
INSERT INTO public.company_settings (company_name) VALUES ('Growin Pharma');

-- Create product_categories type
CREATE TYPE public.product_category AS ENUM (
    'feed_supplements',
    'dewormers', 
    'antibiotics',
    'liver_tonics',
    'mineral_mixtures',
    'injections',
    'calcium',
    'vitamins',
    'other'
);

-- Create products table
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category product_category NOT NULL DEFAULT 'other',
    species TEXT[] DEFAULT ARRAY['cattle', 'poultry']::TEXT[],
    composition TEXT,
    indications TEXT,
    dosage TEXT,
    withdrawal_period TEXT,
    presentation TEXT,
    directions TEXT,
    description TEXT,
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    is_new BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on products
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Products policies
CREATE POLICY "Anyone can view active products" ON public.products
FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage products" ON public.products
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Create enquiries table
CREATE TABLE public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company_name TEXT,
    enquiry_type TEXT NOT NULL DEFAULT 'general',
    product_interest TEXT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on enquiries
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Enquiries policies
CREATE POLICY "Anyone can submit enquiries" ON public.enquiries
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all enquiries" ON public.enquiries
FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update enquiries" ON public.enquiries
FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete enquiries" ON public.enquiries
FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_settings_updated_at
BEFORE UPDATE ON public.company_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);

-- Storage policies for product images
CREATE POLICY "Anyone can view product images" ON storage.objects
FOR SELECT USING (bucket_id = 'product-images');

CREATE POLICY "Admins can upload product images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'product-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update product images" ON storage.objects
FOR UPDATE USING (bucket_id = 'product-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete product images" ON storage.objects
FOR DELETE USING (bucket_id = 'product-images' AND public.has_role(auth.uid(), 'admin'));

-- Insert sample products
INSERT INTO public.products (name, category, species, composition, indications, dosage, withdrawal_period, presentation, directions, description, is_featured, is_new) VALUES
('Growin Cal-D3', 'calcium', ARRAY['cattle', 'buffalo', 'goat', 'sheep']::TEXT[], 'Calcium Gluconate 23%, Phosphorus 12%, Vitamin D3 500 IU/ml, Vitamin B12 10mcg/ml', 'Milk fever, hypocalcemia, bone weakness, poor growth, rickets', 'Cattle & Buffalo: 50-100ml, Goats & Sheep: 10-20ml', 'Nil', '500ml, 1L bottles', 'Administer orally or mix with feed. Shake well before use.', 'Premium calcium supplement with Vitamin D3 for optimal absorption and bone health in livestock.', true, true),
('Growin Liver Forte', 'liver_tonics', ARRAY['cattle', 'buffalo', 'poultry', 'goat']::TEXT[], 'Silymarin 70mg, Vitamin B-Complex, Choline Chloride 50mg, Inositol 25mg, Biotin 50mcg', 'Liver dysfunction, poor feed conversion, toxin overload, fatty liver syndrome', 'Large Animals: 30-50ml daily, Poultry: 1ml/L drinking water', 'Nil', '500ml, 1L, 5L containers', 'Mix with feed or drinking water as directed by veterinarian.', 'Advanced hepatoprotective formula for liver regeneration and detoxification.', true, false),
('Growin Deworm Plus', 'dewormers', ARRAY['cattle', 'buffalo', 'goat', 'sheep', 'pig']::TEXT[], 'Fenbendazole 10% w/v, Praziquantel 2.5% w/v', 'Roundworms, tapeworms, liver flukes, gastrointestinal parasites', 'Cattle: 7.5ml/100kg BW, Sheep & Goat: 1ml/10kg BW', '14 days for meat, 3 days for milk', '100ml, 500ml, 1L bottles', 'Administer orally. Fast animals for 12 hours before treatment for best results.', 'Broad-spectrum dewormer effective against all major internal parasites.', false, true),
('Growin Amino Power', 'feed_supplements', ARRAY['poultry', 'cattle', 'pig']::TEXT[], 'Essential Amino Acids, L-Lysine 2%, DL-Methionine 1.5%, L-Threonine 1%, Vitamins A, D3, E', 'Growth promotion, improved FCR, muscle development, egg production', 'Poultry: 1g/L water, Cattle: 50g/animal/day', 'Nil', '1kg, 5kg, 25kg packs', 'Mix with feed or drinking water. Ensure uniform mixing.', 'Complete amino acid supplement for enhanced growth and productivity.', true, false),
('Growin Enrofix', 'antibiotics', ARRAY['cattle', 'buffalo', 'goat', 'poultry']::TEXT[], 'Enrofloxacin 10% w/v', 'Respiratory infections, E.coli, Salmonella, Pasteurella, Mycoplasma', 'Cattle: 2.5ml/50kg BW, Poultry: 0.5ml/L water for 3-5 days', '7 days for meat, 2 days for eggs', '100ml, 500ml, 1L bottles', 'Administer orally or via drinking water. Complete full course of treatment.', 'Broad-spectrum fluoroquinolone antibiotic for bacterial infections.', false, false),
('Growin Mineral Mix', 'mineral_mixtures', ARRAY['cattle', 'buffalo', 'goat', 'sheep']::TEXT[], 'Calcium 21%, Phosphorus 12%, Manganese 0.5%, Zinc 0.3%, Copper 0.15%, Iron 0.5%, Iodine 100ppm, Selenium 30ppm', 'Mineral deficiency, improved reproduction, bone strength, milk production', 'Cattle: 50-75g/day, Goats: 10-15g/day', 'Nil', '1kg, 5kg, 25kg bags', 'Mix with daily feed ration. Ensure continuous supply of clean drinking water.', 'Complete mineral supplement for all essential trace elements.', true, true);
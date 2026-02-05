-- 1. Add INSERT policy for company_settings (required for UPSERT operations)
DROP POLICY IF EXISTS "Admins can insert company settings" ON public.company_settings;
CREATE POLICY "Admins can insert company settings" ON public.company_settings
FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. Assign ADMIN role to ALL existing users
-- This ensures that whoever you are logged in as gets the admin privileges.
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'
FROM auth.users
ON CONFLICT (user_id, role) DO NOTHING;

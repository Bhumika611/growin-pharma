import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Beaker, Target, Pill, Dog, Clock, Package, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching product:', error);
          setIsLoading(false);
          return;
        }

        if (data) {
          const formattedProduct = {
            name: data.name,
            category: data.category.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            image: data.image_url || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop',
            description: data.description || '',
            composition: data.composition ? data.composition.split('\n').filter((i: string) => i.trim()) : [],
            indications: data.indications ? data.indications.split('\n').filter((i: string) => i.trim()) : [],
            dosage: data.dosage || '',
            species: data.species || [],
            withdrawalPeriod: data.withdrawal_period || 'Nil',
            presentation: data.presentation || '',
          };
          setProduct(formattedProduct);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const sectionIcons = {
    composition: Beaker,
    indications: Target,
    dosage: Pill,
    species: Dog,
    withdrawalPeriod: Clock,
    presentation: Package,
  };

  if (isLoading) {
    return (
      <main className="pt-24 pb-16 min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/products">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/products">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Info Sections */}
            <div className="space-y-6">
              {/* Composition */}
              <DetailSection
                icon={sectionIcons.composition}
                title="Composition"
                items={product.composition}
              />

              {/* Indications */}
              <DetailSection
                icon={sectionIcons.indications}
                title="Indications"
                items={product.indications}
              />

              {/* Dosage */}
              <DetailCard
                icon={sectionIcons.dosage}
                title="Dosage"
                content={product.dosage}
              />

              {/* Species */}
              <div className="bg-card p-5 rounded-xl border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Dog className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Target Species
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.species.map((species) => (
                    <span
                      key={species}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {species}
                    </span>
                  ))}
                </div>
              </div>

              {/* Withdrawal & Presentation */}
              <div className="grid sm:grid-cols-2 gap-4">
                <DetailCard
                  icon={sectionIcons.withdrawalPeriod}
                  title="Withdrawal Period"
                  content={product.withdrawalPeriod}
                />
                <DetailCard
                  icon={sectionIcons.presentation}
                  title="Presentation"
                  content={product.presentation}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Inquire Now
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  View More Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function DetailSection({
  icon: Icon,
  title,
  items
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-card p-5 rounded-xl border border-border/50">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  title,
  content
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}) {
  return (
    <div className="bg-card p-5 rounded-xl border border-border/50">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}

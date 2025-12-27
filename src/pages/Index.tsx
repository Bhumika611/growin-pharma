import { Hero } from '@/components/Hero';
import { ProductsSection } from '@/components/ProductsSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;

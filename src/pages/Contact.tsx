import { motion } from 'framer-motion';
import { ContactSection } from '@/components/ContactSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

export default function Contact() {
  const { settings } = useSettings();

  return (
    <main className="pt-24 pb-0 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Get in Touch
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-6">
              We're Here to Help
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Have questions about our products or need veterinary consultation?
              Our team of experts is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section Placeholder */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              Come visit us at our headquarters for a personal consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card"
          >
            <div className="w-full h-full bg-gradient-to-br from-muted to-accent/30 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg max-w-md whitespace-pre-line">
                  {settings?.address || "123 Pharma Street, Industrial Area\nCity, State - 000000\nIndia"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

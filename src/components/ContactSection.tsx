import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Pharma Street, Industrial Area, City - 000000',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@growinpharma.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Contact Us
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products? We're here to help you find 
            the right solutions for your livestock needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/30 p-8 rounded-2xl border border-border/50">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional CTA */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Our veterinary experts are available for urgent consultations.
              </p>
              <Button variant="default" className="w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Send us a Message
              </h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input 
                      placeholder="John Doe" 
                      required 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      required 
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help you?" 
                    required 
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your requirements..." 
                    required 
                    rows={5}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

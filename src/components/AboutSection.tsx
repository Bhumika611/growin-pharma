import { motion } from 'framer-motion';
import { Shield, Award, Microscope, Users, Heart, Leaf } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All products meet strict pharmaceutical standards and undergo rigorous quality testing.',
  },
  {
    icon: Microscope,
    title: 'Research Driven',
    description: 'Continuous innovation backed by scientific research and development.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team of veterinary professionals available for consultation.',
  },
  {
    icon: Heart,
    title: 'Animal Welfare',
    description: 'Committed to improving animal health and farmer prosperity.',
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3 mb-6">
              Pioneering Animal Health Since Day One
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Growin Pharma is a leading veterinary pharmaceutical company dedicated to 
              developing innovative solutions for livestock health. Our commitment to 
              quality and animal welfare drives everything we do.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With a comprehensive range of feed supplements, dewormers, antibiotics, 
              and health products, we support farmers in nurturing healthy, productive 
              animals while ensuring sustainable agricultural practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Products</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl text-primary">10K+</div>
                <div className="text-sm text-muted-foreground mt-1">Farmers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Quality</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-card p-6 rounded-2xl shadow-card border border-border/50 hover:shadow-hover hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  index?: number;
}

export function ProductCard({ id, name, category, image, description, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-hover hover:-translate-y-2 border border-border/50 hover:border-primary/30">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
        
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-muted to-accent/30">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full border border-primary/20">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {description}
            </p>
          )}
          
          <Link to={`/products/${id}`}>
            <Button 
              variant="ghost" 
              className="p-0 h-auto font-semibold text-primary group-hover:gap-3 transition-all"
            >
              View Details
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
}

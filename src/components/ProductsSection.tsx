import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';

const categories = [
  'All',
  'Feed Supplements',
  'Dewormers',
  'Antibiotics',
  'Liver Tonics',
  'Mineral Mixtures',
];

// Sample products data
const sampleProducts = [
  {
    id: '1',
    name: 'CalciMax Plus',
    category: 'Feed Supplements',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
    description: 'Premium calcium and phosphorus supplement for optimal bone health.',
  },
  {
    id: '2',
    name: 'VitaGrow 500',
    category: 'Feed Supplements',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    description: 'Complete vitamin complex for enhanced growth and immunity.',
  },
  {
    id: '3',
    name: 'DeWorm Pro',
    category: 'Dewormers',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
    description: 'Broad-spectrum anthelmintic for all livestock species.',
  },
  {
    id: '4',
    name: 'AntiBact 250',
    category: 'Antibiotics',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
    description: 'Effective antibiotic for bacterial infections in poultry and cattle.',
  },
  {
    id: '5',
    name: 'LiverCare Plus',
    category: 'Liver Tonics',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=300&fit=crop',
    description: 'Hepatoprotective formula for liver health and detoxification.',
  },
  {
    id: '6',
    name: 'MineralMix Pro',
    category: 'Mineral Mixtures',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop',
    description: 'Complete mineral supplement with trace elements for optimal health.',
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Our Products
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Premium Veterinary Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of pharmaceutical products designed 
            for the health and well-being of your livestock.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-heading font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-4 transition-all duration-300"
          >
            View All Products
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

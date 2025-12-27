import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = [
  'All',
  'Feed Supplements',
  'Dewormers',
  'Antibiotics',
  'Liver Tonics',
  'Mineral Mixtures',
];

const allProducts = [
  {
    id: '1',
    name: 'CalciMax Plus',
    category: 'Feed Supplements',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
    description: 'Premium calcium and phosphorus supplement for optimal bone health in cattle and poultry.',
  },
  {
    id: '2',
    name: 'VitaGrow 500',
    category: 'Feed Supplements',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    description: 'Complete vitamin complex for enhanced growth and immunity in livestock.',
  },
  {
    id: '3',
    name: 'DeWorm Pro',
    category: 'Dewormers',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
    description: 'Broad-spectrum anthelmintic effective against all common intestinal parasites.',
  },
  {
    id: '4',
    name: 'ParaShield',
    category: 'Dewormers',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
    description: 'Advanced dewormer with long-lasting protection against roundworms and tapeworms.',
  },
  {
    id: '5',
    name: 'AntiBact 250',
    category: 'Antibiotics',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=300&fit=crop',
    description: 'Effective antibiotic for bacterial infections in poultry and cattle.',
  },
  {
    id: '6',
    name: 'OxyMed Plus',
    category: 'Antibiotics',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop',
    description: 'Oxytetracycline-based antibiotic for respiratory and enteric infections.',
  },
  {
    id: '7',
    name: 'LiverCare Plus',
    category: 'Liver Tonics',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    description: 'Hepatoprotective formula for liver health and detoxification.',
  },
  {
    id: '8',
    name: 'HepatoShield',
    category: 'Liver Tonics',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
    description: 'Herbal liver tonic for improved appetite and digestion.',
  },
  {
    id: '9',
    name: 'MineralMix Pro',
    category: 'Mineral Mixtures',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
    description: 'Complete mineral supplement with essential trace elements.',
  },
  {
    id: '10',
    name: 'TraceMix Gold',
    category: 'Mineral Mixtures',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=300&fit=crop',
    description: 'Premium mineral mixture for dairy cattle and buffaloes.',
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of veterinary pharmaceutical products 
            designed for optimal livestock health.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-full border-border/50 focus:border-primary"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
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
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No products found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}

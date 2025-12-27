import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bottleImage from '@/assets/calcium-bottle.png';

export function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Hero Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* GROWIN Text with Bottle replacing I */}
            <div className="relative mb-6">
              <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-foreground">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  GROW
                </motion.span>
                
                {/* Bottle replacing I */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block relative mx-[-0.5rem] sm:mx-[-1rem]"
                >
                  <motion.img
                    src={bottleImage}
                    alt="Calcium supplement bottle"
                    className="h-[4rem] sm:h-[5.5rem] md:h-[7rem] lg:h-[9rem] w-auto object-contain inline-block"
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      rotateY: 20,
                      scale: 1.05,
                      filter: "brightness(1.1) drop-shadow(0 0 30px rgba(13, 148, 136, 0.4))"
                    }}
                    style={{
                      filter: "drop-shadow(0 10px 30px rgba(13, 148, 136, 0.2))"
                    }}
                  />
                  {/* Shine effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
                    animate={{
                      opacity: [0, 0.5, 0],
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-block"
                >
                  N
                </motion.span>
              </h1>
              
              {/* PHARMA below */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-heading font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] text-primary mt-2"
              >
                PHARMA
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-heading font-light mt-8 mb-12"
            >
              Caring Your <span className="text-primary font-medium">Livestock</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/products">
                <Button variant="hero" size="lg" className="min-w-[200px]">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="min-w-[200px]">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium tracking-wide">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

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
            {/* GROWIN Text with Bottle as "I" - Premium Logo Treatment */}
            <div className="relative mb-4 md:mb-6">
              {/* Main Logo Container */}
              <h1 className="font-heading font-black text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] leading-none tracking-tight text-foreground flex items-end justify-center">
                {/* GROW - appears first */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  GROW
                </motion.span>
                
                {/* Bottle as "I" - organically integrated */}
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="inline-flex items-end justify-center relative"
                  style={{
                    width: 'clamp(28px, 4vw, 55px)',
                    marginLeft: 'clamp(-4px, -0.3vw, -2px)',
                    marginRight: 'clamp(-4px, -0.3vw, -2px)',
                  }}
                >
                  {/* Soft glow behind bottle */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-60"
                    style={{
                      background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                      transform: 'scale(2.5) translateY(10%)',
                    }}
                  />
                  
                  {/* Shadow beneath bottle for depth */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[6px] rounded-full opacity-30"
                    style={{
                      background: 'radial-gradient(ellipse at center, hsl(var(--foreground) / 0.4) 0%, transparent 70%)',
                      filter: 'blur(2px)',
                    }}
                  />
                  
                  {/* The Bottle - sized to match typography baseline & cap height */}
                  <motion.div
                    className="relative z-10"
                    style={{
                      height: 'clamp(56px, 8vw, 150px)',
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                  >
                    <motion.img
                      src={bottleImage}
                      alt="Premium calcium supplement"
                      className="h-full w-auto object-contain"
                      style={{
                        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1))',
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        filter: 'drop-shadow(0 8px 20px rgba(13, 148, 136, 0.25)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1))',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Subtle highlight reflection on bottle */}
                    <motion.div
                      className="absolute top-[10%] left-[20%] w-[20%] h-[30%] rounded-full pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
                        filter: 'blur(2px)',
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.span>
                
                {/* N - appears with GROW */}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  N
                </motion.span>
              </h1>
              
              {/* PHARMA - refined typography */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="font-heading font-extralight text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] tracking-[0.35em] text-primary mt-1 md:mt-2"
              >
                PHARMA
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-heading font-light mt-6 md:mt-8 mb-10 md:mb-12"
            >
              Caring Your <span className="text-primary font-medium">Livestock</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
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
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium tracking-wide">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

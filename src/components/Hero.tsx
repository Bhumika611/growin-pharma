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
        <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/3 to-transparent rounded-full opacity-60" />
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
            <div className="relative mb-2 md:mb-4">
              {/* Main Logo Container */}
              <h1 className="font-heading font-extrabold text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem] leading-none tracking-tight text-foreground flex items-end justify-center">
                {/* GROW - appears first */}
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block"
                >
                  GROW
                </motion.span>
                
                {/* Bottle as "I" - organically integrated */}
                <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="inline-flex items-end justify-center relative"
                  style={{
                    width: 'clamp(22px, 3.2vw, 48px)',
                    marginLeft: 'clamp(-6px, -0.5vw, -3px)',
                    marginRight: 'clamp(-6px, -0.5vw, -3px)',
                  }}
                >
                  {/* Soft glow behind bottle */}
                  <div 
                    className="absolute inset-0 rounded-full blur-2xl opacity-50"
                    style={{
                      background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.35) 0%, transparent 70%)',
                      transform: 'scale(3) translateY(5%)',
                    }}
                  />
                  
                  {/* Shadow beneath bottle for depth */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[8px] rounded-full opacity-25"
                    style={{
                      background: 'radial-gradient(ellipse at center, hsl(var(--foreground) / 0.5) 0%, transparent 70%)',
                      filter: 'blur(3px)',
                    }}
                  />
                  
                  {/* The Bottle - sized to match typography baseline & cap height */}
                  <motion.div
                    className="relative z-10"
                    style={{
                      height: 'clamp(48px, 7vw, 140px)',
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.img
                      src={bottleImage}
                      alt="Premium calcium supplement"
                      className="h-full w-auto object-contain"
                      style={{
                        filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.18)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                      }}
                      whileHover={{ 
                        scale: 1.04,
                        filter: 'drop-shadow(0 10px 24px rgba(13, 148, 136, 0.3)) drop-shadow(0 3px 8px rgba(0, 0, 0, 0.12))',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Subtle shine effect on bottle */}
                    <motion.div
                      className="absolute top-[8%] left-[15%] w-[25%] h-[35%] rounded-full pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
                        filter: 'blur(3px)',
                      }}
                      animate={{
                        opacity: [0.25, 0.5, 0.25],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.span>
                
                {/* N - appears with GROW */}
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block"
                >
                  N
                </motion.span>
              </h1>
              
              {/* PHARMA - refined typography with letter spacing */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="font-heading font-medium text-[1.2rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] tracking-[0.4em] text-primary mt-0 md:mt-1"
              >
                PHARMA
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-body font-light mt-6 md:mt-10 mb-8 md:mb-12"
            >
              Caring Your <span className="text-primary font-medium">Livestock</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/products">
                <Button size="lg" className="min-w-[180px] font-heading font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="min-w-[180px] font-heading font-semibold border-2 hover:bg-primary/5">
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
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-xs font-body font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
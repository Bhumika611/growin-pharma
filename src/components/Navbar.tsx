import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'nav-blur shadow-soft border-b border-border/30'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left aligned */}
          <div className="flex-1 flex items-center">
            <Link to="/" className="flex items-center gap-1 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <span className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
                  GROW<span className="text-primary">I</span>N
                </span>
                <span className="text-xl md:text-2xl font-heading font-medium text-primary ml-1.5 tracking-wide">
                  PHARMA
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Center Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center justify-center gap-2 lg:gap-4">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 font-body font-medium text-sm transition-colors duration-300 ${location.pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center h-8 w-px bg-border/40 mx-2" />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
              )}
            </Button>
          </div>

          {/* CTA Buttons - Right aligned */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-6">
            <Link to="/admin/login">
              <span className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Admin
              </span>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="font-heading font-semibold px-6">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden nav-blur border-b border-border/30"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wider">
                  Theme
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="rounded-full flex items-center gap-2 border border-border/50"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon size={16} />
                      <span className="text-xs">Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun size={16} />
                      <span className="text-xs">Light Mode</span>
                    </>
                  )}
                </Button>
              </div>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-2.5 font-heading font-medium text-base ${location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Link to="/admin/login">
                  <Button variant="ghost" className="w-full justify-start font-body">
                    Admin Login
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full font-heading font-semibold">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Settings,
  MessageSquare,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Plus,
  Trash2,
  Pencil,
  PlusCircle,
  AlertTriangle,
  Loader2,
  CheckCircle2,
  Star
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { ProductsManager } from '@/components/admin/ProductsManager';
import { CompanySettings } from '@/components/admin/CompanySettings';
import { EnquiriesManager } from '@/components/admin/EnquiriesManager';
import { DashboardOverview } from '@/components/admin/DashboardOverview';

const sidebarLinks = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/dashboard/products', icon: Package },
  { name: 'Enquiries', href: '/admin/dashboard/enquiries', icon: MessageSquare },
  { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
];

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Prevent auto-logout on refresh by checking the path in cleanup
    return () => {
      const currentPath = window.location.pathname;
      if (!currentPath.startsWith('/admin')) {
        signOut();
      }
    };
  }, [signOut]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const currentPage = sidebarLinks.find(link =>
    location.pathname === link.href ||
    (link.href !== '/admin/dashboard' && location.pathname.startsWith(link.href))
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0 lg:static
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-border bg-muted/30">
            <Link to="/" className="flex items-center gap-1 group">
              <span className="text-xl font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                GROW<span className="text-primary">I</span>N
              </span>
              <span className="text-xl font-heading font-medium text-primary tracking-wide">
                PHARMA
              </span>
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Admin System</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 mt-4">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.href ||
                (link.href !== '/admin/dashboard' && location.pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300
                    ${isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 translate-x-1'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }
                  `}
                >
                  <link.icon size={18} className={isActive ? 'animate-pulse' : ''} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4 p-2 rounded-xl bg-background/50 border border-border/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-inner">
                <span className="text-white font-heading font-bold text-sm">
                  {user?.email?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-body font-bold text-foreground truncate">
                  {user?.email?.split('@')[0]}
                </p>
                <p className="text-[10px] text-primary/80 font-bold uppercase tracking-tighter">Gold Admin</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 font-body text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-colors"
              onClick={handleSignOut}
            >
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <Link to="/admin/dashboard" className="hover:text-primary transition-colors">
                Admin
              </Link>
              {currentPage && currentPage.href !== '/admin/dashboard' && (
                <>
                  <ChevronRight size={14} className="opacity-50" />
                  <span className="text-foreground font-semibold">{currentPage.name}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex rounded-full gap-2 border-primary/20 hover:border-primary/50 text-xs font-bold" asChild>
              <Link to="/">
                View Live Site
              </Link>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes>
                <Route index element={<DashboardOverview />} />
                <Route path="products/*" element={<ProductsManager />} />
                <Route path="enquiries" element={<EnquiriesManager />} />
                <Route path="settings" element={<CompanySettings />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

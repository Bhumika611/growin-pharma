import { useEffect, useState } from 'react';
import { Package, MessageSquare, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export function DashboardOverview() {
  const [stats, setStats] = useState({ products: 0, enquiries: 0, unreadEnquiries: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [productsRes, enquiriesRes, unreadRes] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact', head: true }),
        supabase.from('enquiries').select('id', { count: 'exact', head: true }),
        supabase.from('enquiries').select('id', { count: 'exact', head: true }).eq('is_read', false),
      ]);
      setStats({
        products: productsRes.count || 0,
        enquiries: enquiriesRes.count || 0,
        unreadEnquiries: unreadRes.count || 0,
      });
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-foreground mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">{stats.products}</p>
              <p className="text-sm text-muted-foreground font-body">Total Products</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">{stats.enquiries}</p>
              <p className="text-sm text-muted-foreground font-body">Total Enquiries</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
              <TrendingUp className="text-destructive" size={24} />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">{stats.unreadEnquiries}</p>
              <p className="text-sm text-muted-foreground font-body">Unread Enquiries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
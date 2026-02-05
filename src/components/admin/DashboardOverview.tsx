import { useEffect, useState } from 'react';
import { Package, MessageSquare, TrendingUp, Trash2, Pencil, Star, Plus, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export function DashboardOverview() {
  const [stats, setStats] = useState({ products: 0, enquiries: 0, unreadEnquiries: 0 });
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchStats();
    fetchRecentProducts();
  }, []);

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

  const fetchRecentProducts = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);
    setRecentProducts(data || []);
    setIsLoading(false);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error deleting product', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Product Deleted', description: `${name} has been removed successfully.` });
      fetchRecentProducts();
      fetchStats();
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Overview</h1>
          <p className="text-sm text-muted-foreground font-body">Manage your pharmacy data from one central hub.</p>
        </div>
        <Button asChild className="rounded-xl shadow-lg shadow-primary/20">
          <Link to="/admin/dashboard/products">
            <Plus size={18} className="mr-2" /> Add New Product
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Package className="text-primary" size={28} />
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-foreground leading-none">{stats.products}</p>
              <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mt-1">Total Products</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <MessageSquare className="text-blue-500" size={28} />
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-foreground leading-none">{stats.enquiries}</p>
              <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mt-1">Total Enquiries</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-destructive/20 bg-destructive/[0.02]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
              <TrendingUp className="text-destructive" size={28} />
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-foreground leading-none">{stats.unreadEnquiries}</p>
              <p className="text-xs text-muted-foreground font-body font-bold uppercase tracking-wider mt-1">Pending Requests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Products Section */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
          <h2 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
            <Package size={20} className="text-primary" />
            Recent Products
          </h2>
          <Link to="/admin/dashboard/products" className="text-xs font-bold text-primary hover:underline">View All</Link>
        </div>

        <div className="p-2">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <Loader2 className="animate-spin text-primary" size={32} />
              <p className="text-sm font-body text-muted-foreground">Loading products...</p>
            </div>
          ) : recentProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={32} className="text-muted-foreground/50" />
              </div>
              <p className="text-muted-foreground font-body">No products added yet.</p>
              <Button variant="outline" size="sm" className="mt-4 rounded-xl" asChild>
                <Link to="/admin/dashboard/products">Get Started</Link>
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {recentProducts.map((product) => (
                <div key={product.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-muted/30 transition-colors rounded-xl mx-2 my-1 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors">
                      {product.image_url ? (
                        <img src={product.image_url} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <Package size={20} className="text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-bold text-foreground text-sm">{product.name}</h3>
                        {product.is_featured && <Badge variant="secondary" className="h-5 px-1 bg-yellow-400/10 text-yellow-600 border-none"><Star size={10} /></Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground font-body capitalize">{product.category?.replace('_', ' ')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-9 px-3 rounded-xl border-border/50 hover:border-primary/50 group-hover:bg-white" asChild>
                      <Link to={`/admin/dashboard/products`}>
                        <Pencil size={14} className="sm:mr-2" />
                        <span className="hidden sm:inline">Edit</span>
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="h-9 px-3 rounded-xl bg-destructive/5 text-destructive hover:bg-destructive hover:text-white border-none transition-all shadow-none"
                      onClick={() => handleDelete(product.id, product.name)}
                    >
                      <Trash2 size={14} className="sm:mr-2" />
                      <span className="hidden sm:inline text-xs font-bold">Delete</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

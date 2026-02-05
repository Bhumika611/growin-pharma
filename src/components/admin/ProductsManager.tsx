import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Plus, Pencil, Trash2, Star } from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type ProductCategory = Database['public']['Enums']['product_category'];

const categories: { value: ProductCategory; label: string }[] = [
  { value: 'feed_supplements', label: 'Feed Supplements' },
  { value: 'dewormers', label: 'Dewormers' },
  { value: 'antibiotics', label: 'Antibiotics' },
  { value: 'liver_tonics', label: 'Liver Tonics' },
  { value: 'mineral_mixtures', label: 'Mineral Mixtures' },
  { value: 'injections', label: 'Injections' },
  { value: 'calcium', label: 'Calcium' },
  { value: 'vitamins', label: 'Vitamins' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  category: ProductCategory;
  composition: string;
  indications: string;
  dosage: string;
  withdrawal_period: string;
  presentation: string;
  directions: string;
  description: string;
  image_url: string;
  is_featured: boolean;
  is_new: boolean;
}

const defaultFormData: FormData = {
  name: '',
  category: 'other',
  composition: '',
  indications: '',
  dosage: '',
  withdrawal_period: '',
  presentation: '',
  directions: '',
  description: '',
  image_url: '',
  is_featured: false,
  is_new: false
};

export function ProductsManager() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    setProducts(data || []);
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    if (!formData.name) {
      toast({ title: 'Error', description: 'Name is required', variant: 'destructive' });
      return;
    }

    if (editingProduct) {
      const { error } = await supabase.from('products').update(formData).eq('id', editingProduct.id);
      if (error) {
        console.error('Error updating product:', error);
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Product updated' });
    } else {
      const { error } = await supabase.from('products').insert([formData]);
      if (error) {
        console.error('Error creating product:', error);
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }
      toast({ title: 'Product created' });
    }
    setIsDialogOpen(false);
    setEditingProduct(null);
    setFormData(defaultFormData);
    fetchProducts();
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || '',
      category: product.category || 'other',
      composition: product.composition || '',
      indications: product.indications || '',
      dosage: product.dosage || '',
      withdrawal_period: product.withdrawal_period || '',
      presentation: product.presentation || '',
      directions: product.directions || '',
      description: product.description || '',
      image_url: product.image_url || '',
      is_featured: product.is_featured || false,
      is_new: product.is_new || false
    });
    setIsDialogOpen(true);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }
      setUploading(true);
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);

      setFormData({ ...formData, image_url: data.publicUrl });
      toast({ title: 'Image uploaded successfully' });
    } catch (error: any) {
      toast({
        title: 'Error uploading image',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await supabase.from('products').delete().eq('id', id);
    toast({ title: 'Product deleted' });
    fetchProducts();
  };

  const openNewProductDialog = () => {
    setEditingProduct(null);
    setFormData(defaultFormData);
    setIsDialogOpen(true);
  };

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-foreground">Products</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewProductDialog}>
              <Plus size={16} className="mr-2" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProduct ? 'Edit Product' : 'Add Product'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name *</Label>
                  <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(v: ProductCategory) => setFormData({ ...formData, category: v })}
                  >
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {categories.map(c => (
                        <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Product Image</Label>
                <div className="flex gap-4 items-center mt-2">
                  {formData.image_url && (
                    <img
                      src={formData.image_url}
                      alt="Preview"
                      className="w-20 h-20 object-cover rounded-md border border-border"
                    />
                  )}
                  <div className="flex-1">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                    {uploading && <p className="text-xs text-muted-foreground mt-1">Uploading...</p>}
                  </div>
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
              </div>
              <div>
                <Label>Composition</Label>
                <Textarea value={formData.composition} onChange={e => setFormData({ ...formData, composition: e.target.value })} />
              </div>
              <div>
                <Label>Indications</Label>
                <Textarea value={formData.indications} onChange={e => setFormData({ ...formData, indications: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Dosage</Label>
                  <Input value={formData.dosage} onChange={e => setFormData({ ...formData, dosage: e.target.value })} />
                </div>
                <div>
                  <Label>Withdrawal Period</Label>
                  <Input value={formData.withdrawal_period} onChange={e => setFormData({ ...formData, withdrawal_period: e.target.value })} />
                </div>
              </div>
              <div>
                <Label>Presentation</Label>
                <Input value={formData.presentation} onChange={e => setFormData({ ...formData, presentation: e.target.value })} />
              </div>
              <div>
                <Label>Directions</Label>
                <Textarea value={formData.directions} onChange={e => setFormData({ ...formData, directions: e.target.value })} />
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={formData.is_featured} onChange={e => setFormData({ ...formData, is_featured: e.target.checked })} />
                  Featured
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={formData.is_new} onChange={e => setFormData({ ...formData, is_new: e.target.checked })} />
                  New
                </label>
              </div>
              <Button onClick={handleSubmit} disabled={uploading}>
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  editingProduct ? 'Update' : 'Create'
                )} Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-card border border-border rounded-xl p-4 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-semibold">{product.name}</h3>
                {product.is_featured && <Badge variant="secondary"><Star size={12} className="mr-1" />Featured</Badge>}
                {product.is_new && <Badge>New</Badge>}
              </div>
              <p className="text-sm text-muted-foreground capitalize">{product.category?.replace('_', ' ')}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(product)}><Pencil size={14} /></Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}><Trash2 size={14} /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
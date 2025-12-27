import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Mail, Phone, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function EnquiriesManager() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    const { data } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false });
    setEnquiries(data || []);
    setIsLoading(false);
  };

  const markAsRead = async (id: string) => {
    await supabase.from('enquiries').update({ is_read: true }).eq('id', id);
    toast({ title: 'Marked as read' });
    fetchEnquiries();
  };

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-foreground mb-6">Enquiries</h1>
      <div className="space-y-4">
        {enquiries.length === 0 ? (
          <p className="text-muted-foreground">No enquiries yet.</p>
        ) : (
          enquiries.map((enq) => (
            <div key={enq.id} className={`bg-card border rounded-xl p-5 ${!enq.is_read ? 'border-primary/50' : 'border-border'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{enq.name}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><Mail size={14} />{enq.email}</span>
                    {enq.phone && <span className="flex items-center gap-1"><Phone size={14} />{enq.phone}</span>}
                  </div>
                </div>
                <Badge variant={enq.is_read ? 'secondary' : 'default'}>{enq.is_read ? 'Read' : 'New'}</Badge>
              </div>
              <p className="text-foreground/80 text-sm mb-3">{enq.message}</p>
              {!enq.is_read && (
                <Button size="sm" variant="outline" onClick={() => markAsRead(enq.id)}>
                  <Check size={14} className="mr-1" /> Mark as Read
                </Button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
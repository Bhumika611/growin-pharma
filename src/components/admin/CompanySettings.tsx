import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';

export function CompanySettings() {
  const [settings, setSettings] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data } = await supabase.from('company_settings').select('*').limit(1).maybeSingle();
    setSettings(data);
    setIsLoading(false);
  };

  const handleSave = async () => {
    if (!settings) return;
    setIsSaving(true);
    const { error } = await supabase.from('company_settings').update(settings).eq('id', settings.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to save settings', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Settings saved successfully' });
    }
    setIsSaving(false);
  };

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-foreground mb-6">Company Settings</h1>
      <div className="bg-card border border-border rounded-xl p-6 max-w-2xl space-y-4">
        <div>
          <Label>Company Name</Label>
          <Input value={settings?.company_name || ''} onChange={e => setSettings({...settings, company_name: e.target.value})} />
        </div>
        <div>
          <Label>Owner Name</Label>
          <Input value={settings?.owner_name || ''} onChange={e => setSettings({...settings, owner_name: e.target.value})} />
        </div>
        <div>
          <Label>Phone</Label>
          <Input value={settings?.phone || ''} onChange={e => setSettings({...settings, phone: e.target.value})} />
        </div>
        <div>
          <Label>Email</Label>
          <Input value={settings?.email || ''} onChange={e => setSettings({...settings, email: e.target.value})} />
        </div>
        <div>
          <Label>Address</Label>
          <Textarea value={settings?.address || ''} onChange={e => setSettings({...settings, address: e.target.value})} />
        </div>
        <div>
          <Label>About Text</Label>
          <Textarea rows={4} value={settings?.about_text || ''} onChange={e => setSettings({...settings, about_text: e.target.value})} />
        </div>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
          Save Settings
        </Button>
      </div>
    </div>
  );
}
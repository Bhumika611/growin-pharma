import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

export function CompanySettings() {
  const [localSettings, setLocalSettings] = useState<any>(null);
  const { settings, isLoading, refreshSettings } = useSettings();
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (settings) {
      setLocalSettings(settings);
    }
  }, [settings]);

  const handleSave = async () => {
    if (!localSettings) return;
    setIsSaving(true);

    try {
      // Clean up updateData: exclude timestamps and handle potential empty ID
      const { created_at, updated_at, ...updateData } = localSettings;

      const { error } = await supabase
        .from('company_settings')
        .upsert({
          ...updateData,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Settings saved successfully'
      });
      await refreshSettings();
    } catch (error: any) {
      console.error('Supabase Error:', error);
      toast({
        title: 'Error',
        description: `Failed to save settings: ${error.message || 'Unknown error'}`,
        variant: 'destructive'
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-foreground mb-6">Company Settings</h1>
      <div className="bg-card border border-border rounded-xl p-6 max-w-2xl space-y-4">
        <div>
          <Label>Company Name</Label>
          <Input value={localSettings?.company_name || ''} onChange={e => setLocalSettings({ ...localSettings, company_name: e.target.value })} />
        </div>
        <div>
          <Label>Owner Name</Label>
          <Input value={localSettings?.owner_name || ''} onChange={e => setLocalSettings({ ...localSettings, owner_name: e.target.value })} />
        </div>
        <div>
          <Label>Phone</Label>
          <Input value={localSettings?.phone || ''} onChange={e => setLocalSettings({ ...localSettings, phone: e.target.value })} />
        </div>
        <div>
          <Label>Email</Label>
          <Input value={localSettings?.email || ''} onChange={e => setLocalSettings({ ...localSettings, email: e.target.value })} />
        </div>
        <div>
          <Label>Address</Label>
          <Textarea value={localSettings?.address || ''} onChange={e => setLocalSettings({ ...localSettings, address: e.target.value })} />
        </div>
        <div>
          <Label>About Text</Label>
          <Textarea rows={4} value={localSettings?.about_text || ''} onChange={e => setLocalSettings({ ...localSettings, about_text: e.target.value })} />
        </div>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
          Save Settings
        </Button>
      </div>
    </div>
  );
}
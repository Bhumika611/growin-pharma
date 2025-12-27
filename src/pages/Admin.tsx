import { motion } from 'framer-motion';
import { Lock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Placeholder - In production this would connect to authentication
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Authentication Required",
      description: "Please connect to Lovable Cloud to enable admin authentication.",
      variant: "destructive",
    });

    setIsLoading(false);
  };

  return (
    <main className="pt-24 pb-16 min-h-screen bg-muted/30 flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-heading font-bold text-2xl text-foreground mb-2">
                Admin Login
              </h1>
              <p className="text-muted-foreground text-sm">
                Access the admin dashboard to manage products and company information.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="admin@growinpharma.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Sign In
                  </span>
                )}
              </Button>
            </form>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-accent/50 rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                Admin features require backend authentication. 
                <span className="text-primary font-medium"> Connect to Lovable Cloud</span> to enable full functionality.
              </p>
            </div>

            {/* Back Link */}
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-primary hover:underline">
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

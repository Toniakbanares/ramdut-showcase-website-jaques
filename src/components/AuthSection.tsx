import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, LogIn } from 'lucide-react';
import { AuthModal } from './AuthModal';

export const AuthSection = () => {
  const { user, loading, signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Button 
          onClick={() => setAuthModalOpen(true)} 
          variant="default"
          className="bg-gradient-primary hover:opacity-90"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Entrar
        </Button>
        <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={user.user_metadata?.avatar_url} />
        <AvatarFallback>
          <User className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium">
        {user.user_metadata?.display_name || user.user_metadata?.username || user.email}
      </span>
      <Button onClick={signOut} variant="ghost" size="sm">
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};
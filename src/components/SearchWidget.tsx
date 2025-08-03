import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SearchWidgetProps {
  onSearch?: (query: string) => void;
}

export const SearchWidget = ({ onSearch }: SearchWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        Buscar
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Buscar no Fórum
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua busca..."
                className="flex-1"
                autoFocus
              />
              <Button onClick={handleSearch} disabled={!query.trim()}>
                <Search className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Digite palavras-chave para buscar posts e comentários</p>
              <p>• Pressione Enter para buscar ou Esc para fechar</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface SearchWidgetProps {
  onSearch?: (query: string) => void;
  searchResults?: any[];
  isSearching?: boolean;
}

export const SearchWidget = ({ onSearch, searchResults = [], isSearching = false }: SearchWidgetProps) => {
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
            <DialogDescription>
              Digite palavras-chave para buscar posts e comentários no fórum.
            </DialogDescription>
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

            {isSearching && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <span className="ml-2 text-sm">Buscando...</span>
              </div>
            )}

            {searchResults.length > 0 && (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                <p className="text-sm font-medium">Resultados encontrados:</p>
                {searchResults.map((result: any) => (
                  <div key={result.id} className="p-2 border rounded-lg hover:bg-muted cursor-pointer">
                    <p className="font-medium text-sm">{result.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {result.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {!isSearching && searchResults.length === 0 && query && (
              <p className="text-sm text-muted-foreground">Nenhum resultado encontrado.</p>
            )}

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
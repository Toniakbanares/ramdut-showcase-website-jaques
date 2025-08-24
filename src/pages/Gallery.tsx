import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Gallery images from uploads
const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
const galleryImages = [
  {
    id: 1,
    title: "Divine Throne",
    description: "A celestial figure seated on a crystal throne surrounded by rainbow light",
    image: asset("lovable-uploads/63c48f32-d6b4-4cfe-ab17-ddec7f379a01.png"),
    category: "Arte Digital",
    likes: 999,
  },
  {
    id: 2,
    title: "Viking Warrior",
    description: "A fierce Norse warrior trudging through snowy mountain terrain",
    image: asset("lovable-uploads/16b243be-24e3-4d73-a069-784ff87f5a46.png"),
    category: "Historical",
    likes: 999,
  },
  {
    id: 3,
    title: "Leaping Lion",
    description: "A powerful lion captured mid-leap through ancient ruins",
    image: asset("lovable-uploads/0c6ad175-1bd0-4685-82da-36920f28d7ab.png"),
    category: "Wildlife",
    likes: 999,
  },
  {
    id: 4,
    title: "Cosmic Coral",
    description: "An otherworldly coral reef floating in space with vibrant colors",
    image: asset("lovable-uploads/c65e16cf-038c-4202-b442-83ef3eee2d89.png"),
    category: "Sci-Fi",
    likes: 999,
  },
  {
    id: 5,
    title: "Magical Forest",
    description: "Enchanted deer glowing in a mystical forest setting",
    image: asset("lovable-uploads/77953295-dee2-4757-9014-9989191b9836.png"),
    category: "Arte Digital",
    likes: 999,
  },
  {
    id: 6,
    title: "Creature & Sphere",
    description: "A grotesque creature clutching a mysterious orb",
    image: asset("lovable-uploads/2593f50b-592f-4e34-a05a-997fda3bdec1.png"),
    category: "Horror",
    likes: 999,
  },
  {
    id: 7,
    title: "Dark Throne",
    description: "A silhouetted figure on an ornate throne in darkness",
    image: asset("lovable-uploads/d6633bcb-8d17-4371-9b73-543fe9474b4d.png"),
    category: "Dark Art",
    likes: 999,
  },
  {
    id: 8,
    title: "Pastoral Scene",
    description: "A woman in traditional dress with cattle in a peaceful countryside",
    image: asset("lovable-uploads/65fdcf64-f74f-4871-9219-7d1675a9cd79.png"),
    category: "Rural Life",
    likes: 999,
  },
  {
    id: 9,
    title: "Storm Lion",
    description: "A roaring lion formed from storm clouds with lightning",
    image: asset("lovable-uploads/93807290-a413-404b-a3c5-a408236dfc56.png"),
    category: "Nature",
    likes: 999,
  },
  {
    id: 10,
    title: "Cosmic Warrior",
    description: "An armored warrior among the stars with constellation patterns",
    image: asset("lovable-uploads/55cf8bf4-86cd-43d3-9bf5-93b69f0b01e8.png"),
    category: "Sci-Fi",
    likes: 999,
  },
];

const categories = ["All", "Arte Digital", "Historical", "Wildlife", "Sci-Fi", "Horror", "Dark Art", "Rural Life", "Nature"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [favoriteImages, setFavoriteImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    document.title = "Galeria de Design | RAMDUT";
    const desc = "Galeria de arte digital: suas 10 criações com filtros e visualização.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);
  const toggleLike = (imageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  const toggleFavorite = (imageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-xl font-bold text-gradient">Galeria de Design</h1>
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Favoritos
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-20" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Criações Artísticas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Uma coleção de designs únicos e imaginativos que exploram diferentes mundos e estilos visuais
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="modern-card overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img loading="lazy"
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold truncate">{image.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                        {image.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => toggleLike(image.id, e)}
                          className={cn(
                            "h-8 px-2",
                            likedImages.has(image.id) && "text-red-500"
                          )}
                        >
                          <Heart 
                            className={cn(
                              "h-4 w-4",
                              likedImages.has(image.id) && "fill-current"
                            )} 
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => toggleFavorite(image.id, e)}
                          className={cn(
                            "h-8 px-2",
                            favoriteImages.has(image.id) && "text-yellow-500"
                          )}
                        >
                          ⭐
                        </Button>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Heart className="h-3 w-3" />
                        <span>{image.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img loading="lazy"
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            <Button
              className="absolute top-4 right-4"
              variant="outline"
              size="sm"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
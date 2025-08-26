import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Gallery images from uploads
const asset = (p: string) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanPath = p.replace(/^(public\/)?/, '');
  const timestamp = Date.now();
  return `${cleanBase}/${cleanPath}?v=${timestamp}`;
};
const galleryImages = [
  {
    id: 1,
    title: "Divine Throne",
    description: "A celestial figure seated on a crystal throne surrounded by rainbow light",
    image: asset("public/lovable-uploads/63c48f32-d6b4-4cfe-ab17-ddec7f379a01.png"),
    category: "Arte Digital",
    likes: 999,
  },
  {
    id: 2,
    title: "Viking Warrior",
    description: "A fierce Norse warrior trudging through snowy mountain terrain",
    image: asset("public/lovable-uploads/16b243be-24e3-4d73-a069-784ff87f5a46.png"),
    category: "Historical",
    likes: 999,
  },
  {
    id: 3,
    title: "Leaping Lion",
    description: "A powerful lion captured mid-leap through ancient ruins",
    image: asset("public/lovable-uploads/0c6ad175-1bd0-4685-82da-36920f28d7ab.png"),
    category: "Wildlife",
    likes: 999,
  },
  {
    id: 4,
    title: "Cosmic Coral",
    description: "An otherworldly coral reef floating in space with vibrant colors",
    image: asset("public/lovable-uploads/c65e16cf-038c-4202-b442-83ef3eee2d89.png"),
    category: "Sci-Fi",
    likes: 999,
  },
  {
    id: 5,
    title: "Magical Forest",
    description: "Enchanted deer glowing in a mystical forest setting",
    image: asset("public/lovable-uploads/77953295-dee2-4757-9014-9989191b9836.png"),
    category: "Arte Digital",
    likes: 999,
  },
  {
    id: 6,
    title: "Creature & Sphere",
    description: "A grotesque creature clutching a mysterious orb",
    image: asset("public/lovable-uploads/2593f50b-592f-4e34-a05a-997fda3bdec1.png"),
    category: "Horror",
    likes: 999,
  },
  {
    id: 7,
    title: "Dark Throne",
    description: "A silhouetted figure on an ornate throne in darkness",
    image: asset("public/lovable-uploads/d6633bcb-8d17-4371-9b73-543fe9474b4d.png"),
    category: "Dark Art",
    likes: 999,
  },
  {
    id: 8,
    title: "Pastoral Scene",
    description: "A woman in traditional dress with cattle in a peaceful countryside",
    image: asset("public/lovable-uploads/65fdcf64-f74f-4871-9219-7d1675a9cd79.png"),
    category: "Rural Life",
    likes: 999,
  },
  {
    id: 9,
    title: "Storm Lion",
    description: "A roaring lion formed from storm clouds with lightning",
    image: asset("public/lovable-uploads/93807290-a413-404b-a3c5-a408236dfc56.png"),
    category: "Nature",
    likes: 999,
  },
  {
    id: 10,
    title: "Cosmic Warrior",
    description: "An armored warrior among the stars with constellation patterns",
    image: asset("public/lovable-uploads/55cf8bf4-86cd-43d3-9bf5-93b69f0b01e8.png"),
    category: "Sci-Fi",
    likes: 999,
  },
  {
    id: 11,
    title: "Lightning Rider",
    description: "A motorcycle rider with electric energy and a flowing cape racing through a city",
    image: asset("public/lovable-uploads/e9086a9e-a4fc-40e6-aa5d-28edede42db6.png"),
    category: "Sci-Fi",
    likes: 999,
  },
  {
    id: 12,
    title: "Urban Speed",
    description: "A motorcyclist racing through neon-lit city streets with motion blur",
    image: asset("public/lovable-uploads/1b83e244-6306-4364-ad05-9f81bac34bc0.png"),
    category: "Urban",
    likes: 999,
  },
  {
    id: 13,
    title: "Hooded Thief",
    description: "A mysterious figure in dark robes carrying a glowing artifact through a medieval marketplace",
    image: asset("public/lovable-uploads/2f20b790-126b-41d2-aca5-d7a4f76f3c11.png"),
    category: "Historical",
    likes: 999,
  },
  {
    id: 14,
    title: "Dragon Encounter",
    description: "A brave knight facing a mighty dragon under the moonlight",
    image: asset("public/lovable-uploads/8f7c912c-bb27-49e3-a767-976a52d8dd11.png"),
    category: "Fantasy",
    likes: 999,
  },
  {
    id: 15,
    title: "Magic School",
    description: "A young student practicing magic in a classroom with floating books and mystical energy",
    image: asset("public/lovable-uploads/c397c664-c963-4f7c-acb3-acaf075c395a.png"),
    category: "Fantasy",
    likes: 999,
  },
  {
    id: 16,
    title: "Cosmic Star",
    description: "A brilliant star radiating energy through the cosmos with stellar formations",
    image: asset("public/lovable-uploads/c9173186-dcb0-4789-bfbe-e0db0d44bf31.png"),
    category: "Space",
    likes: 999,
  },
  {
    id: 17,
    title: "Happy Robot",
    description: "A cheerful orange robot waving in a colorful cartoon city",
    image: asset("public/lovable-uploads/e3c8e082-c80e-4b24-af46-fdff3e3c99dc.png"),
    category: "Cartoon",
    likes: 999,
  },
  {
    id: 18,
    title: "Silver Android",
    description: "A futuristic silver robot with green lights in a vibrant cityscape",
    image: asset("public/lovable-uploads/cf789337-4095-46a3-b520-801e155678db.png"),
    category: "Sci-Fi",
    likes: 999,
  },
  {
    id: 19,
    title: "Friendly Bot",
    description: "A cute blue robot running happily through a cartoon town",
    image: asset("public/lovable-uploads/68135e0b-6f09-45e7-8fb9-e13b38a9f6b8.png"),
    category: "Cartoon",
    likes: 999,
  },
  {
    id: 20,
    title: "Cyber Cat",
    description: "A sleek cybernetic cat-like figure leaping through a futuristic Japanese city",
    image: asset("public/lovable-uploads/eae386a4-0669-4b36-8bc3-da8472ae8bc2.png"),
    category: "Cyberpunk",
    likes: 999,
  },
  {
    id: 21,
    title: "Neon Phantom",
    description: "A mysterious hooded rider racing through cyberpunk streets with flowing cape",
    image: asset("public/lovable-uploads/92f91101-e01a-4782-94b6-1f79c3cc744a.png"),
    category: "Cyberpunk",
    likes: 999,
  },
  {
    id: 22,
    title: "City Rider",
    description: "A stylized poster art of a motorcyclist with flowing cape in an urban setting",
    image: asset("public/lovable-uploads/79941010-8742-41aa-92db-215ecb08e717.png"),
    category: "Urban",
    likes: 999,
  },
  {
    id: 23,
    title: "Speed Demon",
    description: "A dramatic red-toned artistic portrayal of a motorcyclist racing through the city",
    image: asset("public/lovable-uploads/0b8cde9b-082d-47c1-bde3-4a8312a15c8e.png"),
    category: "Urban",
    likes: 999,
  },
  {
    id: 24,
    title: "Mini Explorer",
    description: "A charming clay-rendered motorcyclist figure in a miniature city landscape",
    image: asset("public/lovable-uploads/ec2fc925-7234-4474-87c4-470f9bcd295f.png"),
    category: "Cartoon",
    likes: 999,
  },
  {
    id: 25,
    title: "Cosmic Guardian",
    description: "A space warrior wielding a lightsaber among cosmic nebulae and stars",
    image: asset("public/lovable-uploads/ebbbc54f-03cb-4197-a1d4-b10ecc252be1.png"),
    category: "Sci-Fi",
    likes: 999,
  },
  {
    id: 26,
    title: "Future Samurai",
    description: "A cyberpunk warrior with glowing sword standing in a futuristic city",
    image: asset("public/lovable-uploads/eddab5ba-933a-418e-b9e0-ecab61a2f9c6.png"),
    category: "Cyberpunk",
    likes: 999,
  },
  {
    id: 27,
    title: "Fire Blade",
    description: "A young warrior with flowing red hair wielding a blazing sword in battle",
    image: asset("public/lovable-uploads/d50a1e59-1715-4159-b61d-6729b60d8e83.png"),
    category: "Fantasy",
    likes: 999,
  },
  {
    id: 28,
    title: "Storm Samurai",
    description: "A traditional Japanese samurai with flaming sword in dramatic weather",
    image: asset("public/lovable-uploads/4314fcef-27fe-4ff7-83ef-49110d675e23.png"),
    category: "Historical",
    likes: 999,
  },
  {
    id: 29,
    title: "Wave Warrior",
    description: "A samurai in traditional Japanese art style with great wave patterns",
    image: asset("public/lovable-uploads/6804123b-06fa-4c44-a119-b39e1aec1cd7.png"),
    category: "Historical",
    likes: 999,
  },
];

const categories = ["All", "Arte Digital", "Historical", "Wildlife", "Sci-Fi", "Horror", "Dark Art", "Rural Life", "Nature", "Urban", "Fantasy", "Space", "Cartoon", "Cyberpunk"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [favoriteImages, setFavoriteImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    document.title = "Galeria de Design | RAMDUT";
    const desc = "Galeria de arte digital: suas 29 criações com filtros e visualização.";
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
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
              <span className="hidden xs:inline">Voltar</span>
            </Button>
          </Link>
          <div className="flex flex-1 items-center justify-between gap-2">
            <h1 className="text-lg sm:text-xl font-bold text-gradient truncate">Galeria de Design</h1>
            <nav className="flex items-center space-x-1 sm:space-x-2">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Heart className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden md:inline">Favoritos</span>
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Share2 className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden md:inline">Compartilhar</span>
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gradient mb-6">
              Criações Artísticas
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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

import { ExternalLink, Github, Calendar, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma de e-commerce com IA integrada para recomendações personalizadas.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "TypeScript", "Supabase", "Stripe", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        users: "10K+",
        rating: 4.9,
        completion: "2024"
      }
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard inteligente com visualizações em tempo real e insights automatizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        users: "5K+",
        rating: 4.8,
        completion: "2024"
      }
    },
    {
      title: "Automação de Prompts",
      description: "Ferramenta de engenharia de prompts com otimização automática para IA.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tech: ["Next.js", "OpenAI", "Vercel", "Prisma", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        users: "2K+",
        rating: 4.7,
        completion: "2024"
      }
    },
    {
      title: "App Mobile Financeiro",
      description: "Aplicativo de gestão financeira com sincronização bancária e IA preditiva.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      tech: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        users: "15K+",
        rating: 4.6,
        completion: "2023"
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos que demonstram minha expertise em desenvolvimento web moderno e engenharia de IA
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`modern-card group overflow-hidden ${project.featured ? 'lg:col-span-1' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
                    Destaque
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {project.stats.rating}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span>{project.stats.users} usuários</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.stats.completion}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Live
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import { Github, Linkedin, Instagram, Facebook, Twitter, Music, Mail, Code, Lightbulb, Rocket, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthSection } from "@/components/AuthSection";
import { Forum } from "@/components/Forum";
import { SearchWidget } from "@/components/SearchWidget";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { FAQ } from "@/components/FAQ";
import ramdutLogo from "@/assets/ramdut-logo-rd-clean.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaques-dutra-14b805226",
      icon: Linkedin,
      color: "hover:bg-blue-600"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/strklife",
      icon: Instagram,
      color: "hover:bg-pink-600"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1C8XCz8wxk/",
      icon: Facebook,
      color: "hover:bg-blue-800"
    },
    {
      name: "GitHub",
      url: "https://github.com/JaquesRD",
      icon: Github,
      color: "hover:bg-gray-800"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/jasu_sn",
      icon: Twitter,
      color: "hover:bg-black"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@strklife",
      icon: Music,
      color: "hover:bg-black"
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Criação de aplicações web modernas e responsivas usando as mais avançadas tecnologias."
    },
    {
      icon: Lightbulb,
      title: "Engenharia de Prompt",
      description: "Otimização e criação de prompt eficazes para IA, maximizando resultados e produtividade."
    },
    {
      icon: Rocket,
      title: "Soluções Inovadoras",
      description: "Desenvolvimento de soluções tecnológicas customizadas para transformar ideias em realidade."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={ramdutLogo} 
            alt="Ramdut Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gradient">
            Ramdut
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-6 flex-wrap">
          <nav className="flex items-center gap-2">
            <Link to="/gallery">
              <Button variant="ghost" size="sm" className="font-medium">
                <Image className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Galeria</span>
              </Button>
            </Link>
          </nav>
          <SearchWidget onSearch={(query) => console.log('Searching:', query)} />
          <AuthSection />
          <ThemeToggle />
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="floating">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={ramdutLogo} 
                alt="RAMDUT RD Logo"
                className="w-24 h-24 mx-auto rounded-full shadow-glow"
              />
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient">RAMDUT</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-4xl font-light mb-8 text-foreground/90">
              JaquesRD
            </div>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Programador & Engenheiro de Prompt
              <br />
              <span className="text-gradient font-semibold">Transformando ideias em soluções digitais</span>
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn group"
                title={social.name}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full pulse-glow mx-4"
            onClick={() => window.open('mailto:jasu.sn@hotmail.com', '_blank')}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Entrar em Contato
          </Button>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg floating" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Serviços</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="modern-card group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Sobre</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, especializado em criar 
              soluções web modernas e eficientes. Com expertise em engenharia de prompt para IA, 
              combino programação tradicional com as mais novas tecnologias de inteligência artificial 
              para entregar resultados excepcionais.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Na <strong className="text-gradient">RAMDUT</strong>, transformamos suas ideias em 
              realidade digital com soluções personalizadas, design responsivo e performance otimizada.
            </p>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Forum />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-gradient mb-4">RAMDUT</div>
          <p className="text-muted-foreground mb-6">JaquesRD - Programador & Engenheiro de Prompt</p>
          
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn opacity-70 hover:opacity-100"
                title={social.name}
              >
                <social.icon className="w-5 h-5 text-primary-foreground" />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 RAMDUT. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

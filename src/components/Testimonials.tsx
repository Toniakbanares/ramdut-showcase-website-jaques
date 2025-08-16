import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO - TechStart Brasil",
      company: "TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "JaquesRD transformou nossa visão em uma plataforma digital incrível. Sua expertise em IA e desenvolvimento web superou todas as expectativas.",
      rating: 5,
      project: "Plataforma E-learning com IA"
    },
    {
      name: "Carlos Mendes",
      role: "CTO - FinanceApp",
      company: "FinanceApp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "A qualidade do código e a atenção aos detalhes são excepcionais. Entregou um sistema complexo de analytics em tempo recorde.",
      rating: 5,
      project: "Dashboard Analytics Financeiro"
    },
    {
      name: "Ana Costa",
      role: "Diretora de Produto - EcoTech",
      company: "EcoTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Profissional altamente qualificado! Sua capacidade de integrar IA com interfaces modernas é impressionante. Recomendo sem hesitar.",
      rating: 5,
      project: "App de Sustentabilidade"
    },
    {
      name: "Roberto Lima",
      role: "Fundador - StartupHub",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Trabalhar com JaquesRD foi uma experiência fantástica. Comunicação clara, entregas pontuais e resultados que excederam o esperado.",
      rating: 5,
      project: "Plataforma de Investimentos"
    },
    {
      name: "Lucia Santos",
      role: "Head of Digital - MediaCorp",
      company: "MediaCorp",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "Sua expertise em engenharia de prompts revolucionou nossos processos de conteúdo. Aumento de 300% na eficiência da equipe.",
      rating: 5,
      project: "Sistema de Automação de Conteúdo"
    },
    {
      name: "Felipe Rodrigues",
      role: "VP Engineering - CloudTech",
      company: "CloudTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Código limpo, arquitetura sólida e performance excepcional. Um verdadeiro expert em tecnologias modernas. Parceria de longo prazo garantida!",
      rating: 5,
      project: "Infraestrutura Cloud Escalável"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Depoimentos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que clientes e parceiros falam sobre meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="modern-card group h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                    Projeto: {testimonial.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>4.9/5.0</span>
            <span className="text-muted-foreground font-normal">• 50+ projetos entregues</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
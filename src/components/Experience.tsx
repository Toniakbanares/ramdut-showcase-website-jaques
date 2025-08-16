import { Calendar, MapPin, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer & AI Engineer",
      company: "RAMDUT (Freelance)",
      location: "Remote, Brasil",
      period: "2022 - Presente",
      current: true,
      achievements: [
        "Desenvolveu mais de 50 projetos web com integração de IA",
        "Especialista em engenharia de prompts com 98% de taxa de sucesso",
        "Aumentou eficiência de clientes em até 300% com automações",
        "Criou soluções inovadoras com React, TypeScript e Supabase"
      ],
      technologies: ["React", "TypeScript", "OpenAI", "Supabase", "Python", "Next.js"]
    },
    {
      role: "Lead Frontend Developer",
      company: "TechInnovate Solutions",
      location: "São Paulo, SP",
      period: "2020 - 2022",
      current: false,
      achievements: [
        "Liderou equipe de 5 desenvolvedores frontend",
        "Implementou arquitetura escalável para aplicações com 100K+ usuários",
        "Reduziu tempo de carregamento em 60% através de otimizações",
        "Introduziu práticas de testing aumentando qualidade em 80%"
      ],
      technologies: ["React", "Vue.js", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      role: "Full Stack Developer",
      company: "StartupTech",
      location: "Rio de Janeiro, RJ",
      period: "2019 - 2020",
      current: false,
      achievements: [
        "Desenvolveu MVP que captou R$ 2M em investimento",
        "Construiu API REST escalável para 10K+ requisições/min",
        "Implementou sistema de pagamentos integrado com Stripe",
        "Criou dashboard analytics com visualizações em tempo real"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "D3.js", "Heroku"]
    },
    {
      role: "Junior Developer",
      company: "WebSolutions",
      location: "Belo Horizonte, MG",
      period: "2018 - 2019",
      current: false,
      achievements: [
        "Desenvolveu interfaces responsivas para 20+ websites",
        "Participou na migração de sistemas legados para React",
        "Implementou práticas de SEO aumentando tráfego em 150%",
        "Colaborou em projetos de e-commerce com alta conversão"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress", "PHP"]
    }
  ];

  const stats = [
    { label: "Anos de Experiência", value: "6+", icon: Calendar },
    { label: "Projetos Entregues", value: "100+", icon: Trophy },
    { label: "Clientes Satisfeitos", value: "50+", icon: TrendingUp },
    { label: "Taxa de Sucesso", value: "98%", icon: Trophy }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experiência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trajetória profissional construindo soluções inovadoras e liderando projetos de impacto
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="modern-card text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.current ? 'bg-gradient-primary' : 'bg-muted border-2 border-primary'
                  }`}>
                    {exp.current ? (
                      <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
                    ) : (
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className="modern-card flex-1 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-lg font-medium text-primary mb-2">{exp.company}</div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          {exp.current && (
                            <Badge className="bg-green-500 text-white w-fit">Atual</Badge>
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
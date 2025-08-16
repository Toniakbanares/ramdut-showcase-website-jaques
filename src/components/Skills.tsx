import { Code2, Brain, Database, Smartphone, Cloud, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Desenvolvimento Frontend",
      skills: [
        { name: "React/Next.js", level: 95, experience: "4+ anos" },
        { name: "TypeScript", level: 90, experience: "3+ anos" },
        { name: "Tailwind CSS", level: 92, experience: "3+ anos" },
        { name: "Vue.js", level: 80, experience: "2+ anos" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88, experience: "4+ anos" },
        { name: "Python", level: 85, experience: "3+ anos" },
        { name: "PostgreSQL", level: 90, experience: "4+ anos" },
        { name: "Supabase", level: 95, experience: "2+ anos" }
      ]
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      skills: [
        { name: "Prompt Engineering", level: 98, experience: "2+ anos" },
        { name: "OpenAI API", level: 93, experience: "2+ anos" },
        { name: "LangChain", level: 87, experience: "1+ ano" },
        { name: "Machine Learning", level: 82, experience: "2+ anos" }
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 85, experience: "3+ anos" },
        { name: "Docker", level: 88, experience: "3+ anos" },
        { name: "Vercel", level: 92, experience: "2+ anos" },
        { name: "CI/CD", level: 83, experience: "2+ anos" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile & Cross-platform",
      skills: [
        { name: "React Native", level: 87, experience: "3+ anos" },
        { name: "Expo", level: 90, experience: "2+ anos" },
        { name: "Flutter", level: 75, experience: "1+ ano" },
        { name: "PWA", level: 88, experience: "2+ anos" }
      ]
    },
    {
      icon: Zap,
      title: "Ferramentas & Metodologias",
      skills: [
        { name: "Git/GitHub", level: 95, experience: "5+ anos" },
        { name: "Agile/Scrum", level: 90, experience: "4+ anos" },
        { name: "Testing", level: 85, experience: "3+ anos" },
        { name: "Performance Optimization", level: 88, experience: "3+ anos" }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise técnica comprovada em tecnologias modernas e metodologias ágeis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="modern-card group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{skill.experience}</span>
                        <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications and Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Certificações & Conquistas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { title: "AWS Certified", year: "2023" },
              { title: "OpenAI Expert", year: "2024" },
              { title: "React Professional", year: "2023" },
              { title: "Scrum Master", year: "2022" }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-primary text-primary-foreground rounded-lg p-4 text-center">
                <div className="font-semibold">{cert.title}</div>
                <div className="text-sm opacity-90">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
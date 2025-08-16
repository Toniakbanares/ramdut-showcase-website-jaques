-- Create FAQs table for web development and design questions
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Create policies - FAQs should be viewable by everyone
CREATE POLICY "FAQs are viewable by everyone" 
ON public.faqs 
FOR SELECT 
USING (true);

-- Create trigger for timestamps
CREATE TRIGGER update_faqs_updated_at
BEFORE UPDATE ON public.faqs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add some initial FAQ data about web development and design
INSERT INTO public.faqs (question, answer, category, tags) VALUES
('O que é desenvolvimento web responsivo?', 'Desenvolvimento web responsivo é uma abordagem de design que garante que sites funcionem bem em todos os dispositivos, desde desktops até smartphones, adaptando-se automaticamente ao tamanho da tela.', 'design', ARRAY['responsivo', 'design', 'mobile']),
('Qual é a diferença entre frontend e backend?', 'Frontend é a parte visual do site que os usuários veem e interagem (HTML, CSS, JavaScript). Backend é a parte do servidor que processa dados, gerencia bancos de dados e lógica de negócios.', 'desenvolvimento', ARRAY['frontend', 'backend', 'conceitos']),
('O que são frameworks CSS?', 'Frameworks CSS como Tailwind, Bootstrap e Materialize são bibliotecas pré-construídas de estilos que aceleram o desenvolvimento fornecendo classes e componentes prontos para uso.', 'css', ARRAY['css', 'frameworks', 'design']),
('Como melhorar a performance de um site?', 'Para melhorar performance: otimize imagens, minimize CSS/JS, use CDN, habilite compressão gzip, reduza requisições HTTP e implemente lazy loading.', 'performance', ARRAY['performance', 'otimização', 'velocidade']),
('O que é SEO e por que é importante?', 'SEO (Search Engine Optimization) é o processo de otimizar sites para mecanismos de busca. É importante porque aumenta a visibilidade orgânica e traz mais tráfego qualificado.', 'seo', ARRAY['seo', 'marketing', 'visibilidade']),
('Quais são as melhores práticas de UX/UI?', 'Melhores práticas incluem: design intuitivo, navegação clara, tempos de carregamento rápidos, acessibilidade, consistência visual e foco na experiência do usuário.', 'design', ARRAY['ux', 'ui', 'design', 'usabilidade']);

-- Create index for better search performance
CREATE INDEX idx_faqs_search ON public.faqs USING GIN(to_tsvector('portuguese', question || ' ' || answer || ' ' || array_to_string(tags, ' ')));
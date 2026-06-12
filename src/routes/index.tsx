import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Database,
  BarChart3,
  Globe,
  CalendarCheck,
  Target,
  LineChart,
  Layers,
  CheckCircle2,
  XCircle,
  Users,
  Brain,
  Crown,
  Wallet,
  Settings,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Plus,
  Minus,
  Briefcase
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FA Growth Partner — Aceleração Empresarial Premium" },
      {
        name: "description",
        content:
          "Programa estratégico da FA para empresários estruturarem comercial, gestão, finanças, processos e indicadores para transformar crescimento em escala sustentável.",
      },
      { property: "og:title", content: "FA Growth Partner — Aceleração Empresarial Premium" },
      {
        property: "og:description",
        content:
          "Pare de apagar incêndios. Comece a construir uma empresa previsível.",
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP = "https://wa.link/ythgg5";

// Hook/Componente de Reveal ao Scroll
function RevealOnScroll({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-premium inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4.5 text-sm font-bold uppercase tracking-[0.12em] md:text-base ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/95 backdrop-blur-md shadow-glow">
      <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
      {children}
    </div>
  );
}

function LandingPage() {
  const [activeAdvisor, setActiveAdvisor] = useState(0);

  const advisors = [
    {
      name: "MATHYAS",
      area: "Networking Estratégico",
      desc: "Especialista em construir conexões corporativas de alto valor para gerar alianças, abrir portas comerciais e acelerar oportunidades estratégicas.",
      help: "Ajuda empresários a ampliar relacionamentos estratégicos, acessar oportunidades qualificadas e criar conexões que impulsionam o crescimento do negócio.",
      points: [
        "Conexões de alto valor",
        "Alianças comerciais",
        "Abertura de novos canais"
      ],
      image: "/mt.png",
      position: "77% 25%",
      mobilePosition: "50% 20%",
      icon: Users
    },
    {
      name: "PAULO HENRIQUE",
      area: "Liderança & Inteligência Emocional",
      desc: "Desenvolve maturidade executiva e estabilidade estratégica para liderar equipes de alto desempenho sob pressão extrema.",
      help: "Apoia empresários a otimizarem a tomada de decisão estratégica, aprimorarem a liderança inspiradora e dominarem o controle emocional sob alta pressão.",
      points: [
        "Liderança sob pressão",
        "Gestão emocional",
        "Alta performance executiva"
      ],
      image: "/phc.png",
      position: "70% 15%",
      mobilePosition: "50% 20%",
      icon: Brain
    },
    {
      name: "PAULO FILHO",
      area: "Saída do Operacional & Delegação",
      desc: "Especialista em criar rotinas estratégicas e metodologias de delegação para libertar o fundador do dia a dia operacional.",
      help: "Auxilia fundadores a desenharem processos de governança eficientes, capacitarem lideranças intermediárias e estruturarem o negócio para rodar de forma previsível.",
      points: [
        "Delegação prática",
        "Rotina estratégica",
        "Menos dependência do dono"
      ],
      image: "/paulof.png",
      position: "75% 20%",
      mobilePosition: "50% 18%",
      icon: Layers
    },
    {
      name: "LEMUEL",
      area: "Redução de Custos Operacionais",
      desc: "Consultor especializado em identificar desperdícios invisíveis, auditar gargalos financeiros e proteger a lucratividade de grandes operações.",
      help: "Ajuda a identificar desperdícios, reduzir custos, melhorar eficiência e proteger a lucratividade sem comprometer a qualidade operacional.",
      points: [
        "Auditoria de custos",
        "Eficiência operacional",
        "Proteção da margem"
      ],
      image: "/lemuel2.png",
      position: "62% 20%",
      mobilePosition: "50% 20%",
      icon: TrendingDown
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-[#f2f2f2] antialiased">
      {/* Luzes de Fundo Ambientais (Cinematográficas) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[150px]" />
        <div className="absolute top-1/3 left-10 h-[600px] w-[600px] rounded-full bg-white/[0.01] blur-[180px]" />
        <div className="absolute bottom-1/4 right-10 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[150px]" />
      </div>

      <div className="relative z-10">


        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-16 pb-0 lg:py-36 border-b border-white/[0.03] bg-[#050505] lg:min-h-[680px] lg:flex lg:items-center">
          
          {/* Imagem de Fundo Cover (Apenas Desktop - Posicionada à direita) */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none hidden lg:block">
            <img
              src="/bg.png"
              alt="Fundo Executivo"
              className="w-full h-full object-cover object-[80%_top] brightness-75 contrast-[1.05]"
            />
            
            {/* Gradiente da esquerda para a direita: esquerda escura para leitura, centro suave, direita mais limpa */}
            <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-[#050505] via-[#050505]/95 via-[#050505]/75 to-transparent z-10 pointer-events-none" />
            
            {/* Gradiente no rodapé para fusão com a próxima seção */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-12 w-full relative z-20">
            <div className="flex flex-col lg:block">
              {/* Bloco de Texto Principal */}
              <div className="max-w-3xl py-12 lg:py-16">
                
                <RevealOnScroll delay={100}>
                  <SectionLabel>PROGRAMA DE ACELERAÇÃO EMPRESARIAL</SectionLabel>
                </RevealOnScroll>
                
                <RevealOnScroll delay={200}>
                  <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight uppercase">
                    PARE DE APAGAR INCÊNDIOS.<br />
                    <span className="text-gradient-silver text-shine block mt-2">COMECE A CONSTRUIR UMA EMPRESA PREVISÍVEL.</span>
                  </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-[#bfbfbf] md:text-xl">
                    A FA ajuda empresários a organizar comercial, gestão, finanças, processos e indicadores para transformar crescimento em escala sustentável.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-col items-start gap-2">
                      <CTAButton>QUERO ESTRUTURAR MINHA EMPRESA</CTAButton>
                      <p className="text-[11px] text-[#8c8c8c] tracking-wide mt-1">
                        * Aplicação estratégica para empresas que já possuem operação em funcionamento.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>

              </div>

              {/* Imagem de Fundo (Apenas Mobile - Posicionada ABAIXO do texto, ocupando 100vw sem card) */}
              <RevealOnScroll delay={450} className="w-full lg:hidden">
                <div 
                  className="relative select-none mt-8 overflow-hidden"
                  style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    marginRight: 'calc(50% - 50vw)',
                  }}
                >
                  {/* Gradiente suave na junção superior da imagem com o texto escuro */}
                  <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
                  
                  <img
                    src="/bg.png"
                    alt="Fundo Executivo Mobile"
                    className="w-full min-h-[420px] h-[420px] object-cover object-[68%_top] brightness-[0.88] contrast-[1.03]"
                  />
                  
                  {/* Gradiente na base da imagem para fusão com a próxima seção */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE CONTEXTO */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03] bg-[#080808]/40">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-5xl text-center mb-16">
              <RevealOnScroll delay={100}>
                <SectionLabel>O CONTEXTO</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-white tracking-tight">
                  O PROBLEMA NÃO É VENDER MAIS.
                  <br className="hidden md:block" />
                  <span className="text-gradient-silver">É CRESCER SEM PERDER O CONTROLE.</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="mx-auto mt-6 max-w-2xl text-base text-[#bfbfbf] md:text-xl leading-relaxed">
                  Muitas empresas conseguem gerar demanda, mas continuam enfrentando problemas de organização, acompanhamento, gestão financeira, produtividade e execução.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Desorganização Operacional",
                  desc: "A empresa cresce, mas a operação fica confusa, dependendo integralmente do dono para funcionar no dia a dia.",
                  metric: "Sobrecarga"
                },
                {
                  title: "Falta de Métricas Claras",
                  desc: "Decisões estratégicas tomadas no instinto, sem visibilidade de margem, custo de aquisição e retorno real.",
                  metric: "Sem Direção"
                },
                {
                  title: "Time Sem Alinhamento",
                  desc: "Profissionais sem metas claras, sem indicadores de performance e sem processos padronizados a seguir.",
                  metric: "Desalinhamento"
                },
                {
                  title: "Comercial Instável",
                  desc: "Vendas ocorrendo de forma imprevisível. Sem rotinas comerciais claras e playbook de conversão replicável.",
                  metric: "Imprevisibilidade"
                }
              ].map((c, idx) => (
                <RevealOnScroll key={c.title} delay={idx * 100}>
                  <div className="card-premium rounded-2xl p-8 h-full flex flex-col justify-between group">
                    <div>
                      {/* Efeito aço escovado interno sutil */}
                      <div className="absolute inset-0 bg-steel-texture opacity-5 pointer-events-none" />
                      
                      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white">
                        <TrendingDown className="h-5 w-5" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white tracking-wide">{c.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#a6a6a6]">{c.desc}</p>
                    </div>
                    <div className="mt-8 text-[11px] font-bold uppercase tracking-widest text-white/45 group-hover:text-white/70 transition-colors">
                      {c.metric}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </section>

        {/* SEÇÃO DOS PILARES (Estilo Palestrantes da Referência) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-3xl text-center mb-20">
              <RevealOnScroll delay={100}>
                <SectionLabel>PILARES DE ACELERAÇÃO</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight">
                  AS BASES DA <span className="text-gradient-silver">ESCALA E GOVERNANÇA</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="mt-5 text-base text-[#bfbfbf] md:text-xl leading-relaxed">
                  Não somos uma agência de marketing. Desenvolvemos uma estrutura completa de aceleração empresarial através de 6 pilares essenciais.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "COMERCIAL",
                  desc: "Estruturação do processo comercial e aumento da previsibilidade de vendas.",
                  bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "GESTÃO",
                  desc: "Clareza total sobre metas, indicadores, governança e prioridades estratégicas.",
                  bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "PROCESSOS",
                  desc: "Mapeamento, padronização e delegação de rotinas para máxima eficiência operacional.",
                  bgImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "FINANÇAS",
                  desc: "Controle financeiro rígido, análise de margens, DRE, DFC e visão estratégica de caixa.",
                  bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "DADOS",
                  desc: "Tomada de decisão cirúrgica baseada em dashboards e indicadores confiáveis.",
                  bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                },
                {
                  title: "EXPANSÃO",
                  desc: "Estratégias avançadas para crescimento sustentável sem desorganização.",
                  bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
                }
              ].map((p, idx) => (
                <RevealOnScroll key={p.title} delay={idx * 100}>
                  {/* Card com Moldura Metálica, Efeito Glow e Foto de Fundo Premium */}
                  <div className="card-premium rounded-2xl overflow-hidden group aspect-[4/5] flex flex-col justify-end p-8 border border-white/10 relative">
                    
                    {/* Imagem de Fundo (Grayscale) */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={p.bgImage}
                        alt={p.title}
                        className="w-full h-full object-cover brightness-50 contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:brightness-40"
                      />
                      {/* Gradiente escuro cobrindo a imagem para garantir legibilidade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                    </div>

                    {/* Glow prateado sutil no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                    {/* Conteúdo do Card */}
                    <div className="relative z-10">
                      <div className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#bfbfbf] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md inline-block">
                        PIlar 0{idx + 1}
                      </div>
                      <h3 className="text-2xl font-extrabold text-white tracking-wide">{p.title}</h3>
                      <p className="mt-3 text-sm text-[#bfbfbf] leading-relaxed transition-all duration-300 group-hover:text-white">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </section>

        {/* SEÇÃO METODOLOGIA (Grade premium) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03] bg-[#080808]/20">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-4xl text-center mb-20">
              <RevealOnScroll delay={100}>
                <SectionLabel>METODOLOGIA PROPRIETÁRIA</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight uppercase">
                  A METODOLOGIA QUE <span className="text-gradient-silver">ORGANIZA O CRESCIMENTO</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="mx-auto mt-5 max-w-3xl text-base text-[#bfbfbf] md:text-xl leading-relaxed">
                  Um processo estruturado para diagnosticar, organizar e acelerar empresas consolidadas com mais clareza, controle e previsibilidade.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Diagnóstico Estratégico",
                  desc: "Mapeamento completo do cenário atual, rotinas e gargalos de produtividade e gestão.",
                  image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "02",
                  title: "Aceleração Comercial",
                  desc: "Estruturação e parametrização do pipeline comercial com foco em previsibilidade e rotina de vendas.",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "03",
                  title: "Gestão de Dados",
                  desc: "Centralização e organização dos indicadores críticos em dashboards automatizados.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "04",
                  title: "Estruturação Digital",
                  desc: "Ativação de canais de captação digital: Google Meu Negócio, landing pages profissionais e ativos estratégicos.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "05",
                  title: "Reuniões Semanais OKRs",
                  desc: "Cadência fixa semanal para monitorar metas e garantir foco na execução.",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "06",
                  title: "Análise Financeira",
                  desc: "Reestruturação do fluxo de caixa e leitura analítica de DRE e DFC.",
                  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "07",
                  title: "Modelo Operacional",
                  desc: "Desenho da arquitetura de processos da empresa, rotinas de delegação e organograma.",
                  image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop"
                },
                {
                  step: "08",
                  title: "Plano de Escala",
                  desc: "Direcionamento estratégico detalhado para alavancar crescimento sem desorganizar as bases.",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                }
              ].map((m, idx) => (
                <RevealOnScroll key={m.title} delay={idx * 80}>
                  <div className="group relative flex flex-col h-[390px] rounded-xl overflow-hidden border border-white/[0.06] bg-[#0c0c0c]/80 backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                    
                    {/* Linha superior de luz metálica prateada/azulada */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 via-blue-400/15 to-transparent opacity-80 transition-all duration-500 group-hover:via-white/60 group-hover:opacity-100" />
                    
                    {/* Área Visual Superior (Imagem com overlay) */}
                    <div className="relative h-[155px] w-full overflow-hidden select-none">
                      <img 
                        src={m.image} 
                        alt={m.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
                      />
                      {/* Gradiente escuro na base da imagem para fundir com o texto */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
                      {/* Overlay sutil */}
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />
                    </div>
                    
                    {/* Conteúdo inferior */}
                    <div className="relative flex-1 flex flex-col justify-between p-5">
                      <div>
                        {/* Etiqueta da Fase */}
                        <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full mb-3 transition-all duration-300 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10">
                          FASE {m.step}
                        </span>
                        
                        {/* Título */}
                        <h3 className="text-sm md:text-base font-extrabold text-white tracking-wide transition-colors duration-300 group-hover:text-white">
                          {m.title}
                        </h3>
                        
                        {/* Descrição */}
                        <p className="mt-2 text-xs leading-relaxed text-[#9e9e9e] transition-colors duration-300 group-hover:text-[#bfbfbf]">
                          {m.desc}
                        </p>
                      </div>
                      
                      {/* Número Discreto no Canto Inferior */}
                      <div className="flex justify-end items-end select-none">
                        <span className="font-mono text-3xl font-black tracking-tighter text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.08] group-hover:scale-105">
                          {m.step}
                        </span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </section>

        {/* SEÇÃO DE TRANSFORMAÇÃO (Antes vs Depois) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-3xl text-center mb-20">
              <RevealOnScroll delay={100}>
                <SectionLabel>A EVOLUÇÃO ESTRATÉGICA</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight">
                  MUDANÇA DE PATAMAR:<br />
                  <span className="text-gradient-silver">DA OPERAÇÃO CONFUSA AO CRESCIMENTO PREVISÍVEL</span>
                </h2>
              </RevealOnScroll>
            </div>

            <div className="grid gap-8 md:grid-cols-2 relative">
              {/* Efeito de separação vertical no desktop */}
              <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-white/10 -translate-x-1/2" />
              
              {/* Bloco ANTES */}
              <RevealOnScroll delay={100}>
                <div className="rounded-2xl border border-white/5 bg-[#080808]/40 p-8 md:p-12 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-steel-texture opacity-5 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50">
                      <XCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c8c8c]">Cenário Atual (Gargalo)</span>
                  </div>
                  
                  <ul className="space-y-6">
                    {[
                      { t: "Empresa dependente do dono", d: "Se você parar de trabalhar ou tirar férias, as decisões travam e as vendas despencam." },
                      { t: "Falta de indicadores estratégicos", t1: "Decisões cruciais tomadas com base em percepções ou 'feeling', sem planilhas de DRE ou dashboards de conversão." },
                      { t: "Equipe desalinhada e sem metas", t1: "O time executa tarefas diárias mas não possui clareza de performance, metas de conversão ou OKRs." },
                      { t: "Processos confusos", t1: "A ausência de manuais, playbooks e fluxos faz com que cada colaborador execute as tarefas à sua maneira." },
                      { t: "Crescimento desorganizado", t1: "Gerar faturamento maior passa a significar mais estresse, mais contratações erradas e menos margem de lucro." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-white/20 shrink-0" />
                        <div>
                          <h4 className="text-base font-bold text-[#bfbfbf]">{item.t}</h4>
                          <p className="mt-1 text-xs text-[#8c8c8c] leading-relaxed">{item.d || item.t1}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Bloco DEPOIS */}
              <RevealOnScroll delay={200}>
                <div className="rounded-2xl border border-white/15 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden shadow-glow h-full">
                  {/* Glow interno prateado */}
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/[0.02] blur-xl pointer-events-none" />
                  <div className="absolute inset-0 bg-steel-texture opacity-5 pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20 text-white shadow-glow">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">Nova Realidade (Aceleração)</span>
                  </div>

                  <ul className="space-y-6">
                    {[
                      { t: "Gestão baseada em dados", d: "Decisões assertivas apoiadas em DRE, DFC e dashboards. Otimização de margens e controle completo de custos." },
                      { t: "Comercial previsível e playbook estruturado", t1: "Rotina comercial com metas de prospecção diária, scripts validados e controle completo do pipeline de vendas." },
                      { t: "Indicadores e metas claras para a equipe", t1: "Reuniões semanais de OKRs e métricas de desempenho individuais que engajam o time na execução." },
                      { t: "Operação organizada e escalável", t1: "Padronização total de processos cruciais. Cada profissional sabe exatamente o que executar e quando." },
                      { t: "Crescimento previsível e sustentável", t1: "Crescer faturamento mantendo a governança, a margem de lucro e a liberdade de tempo do fundador." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,1)]" />
                        <div>
                          <h4 className="text-base font-extrabold text-white">{item.t}</h4>
                          <p className="mt-1 text-xs text-[#bfbfbf] leading-relaxed">{item.d || item.t1}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </section>

        {/* SEÇÃO DIFERENCIAIS (3 Grandes Cards) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03] bg-[#080808]/40">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-3xl text-center mb-20">
              <RevealOnScroll delay={100}>
                <SectionLabel>DIFERENCIAIS EXCLUSIVOS</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight">
                  CONSTRUÍDO PARA <span className="text-gradient-silver">GERAR VALOR REAL</span>
                </h2>
              </RevealOnScroll>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "CLAREZA",
                  desc: "Transforme informações dispersas e dados incompletos em decisões de negócio cirúrgicas. Veja a empresa de cima para baixo.",
                  detail: "Governança"
                },
                {
                  title: "PREVISIBILIDADE",
                  desc: "Entenda exatamente de onde vem cada cliente e quais canais geram a melhor margem de lucro. Sem surpresas no caixa.",
                  detail: "Finanças & Vendas"
                },
                {
                  title: "ESCALA",
                  desc: "Prepare as fundações da sua empresa para multiplicar o volume operacional sem aumentar a desorganização e a estafa.",
                  detail: "Processos"
                }
              ].map((d, idx) => (
                <RevealOnScroll key={d.title} delay={idx * 150}>
                  <div className="card-premium rounded-2xl p-10 h-full flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute inset-0 bg-steel-texture opacity-10 pointer-events-none" />
                    <div>
                      <div className="mb-8 text-xs font-mono text-[#8c8c8c] border-b border-white/10 pb-4">
                        DIFERENCIAL // 0{idx + 1}
                      </div>
                      <h3 className="text-3xl font-extrabold text-white tracking-wide">{d.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-[#a6a6a6] group-hover:text-[#f2f2f2] transition-colors">
                        {d.desc}
                      </p>
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">{d.detail}</span>
                      <ArrowRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </section>

        {/* SEÇÃO O CONSELHO FA (ESTILO BOARD EXECUTIVO INTEGRADO - REFERÊNCIA ABSOLUTA) */}
        <section className="relative py-28 md:py-36 border-b border-white/[0.03] bg-[#050505] overflow-hidden">
          
          {/* FOTO DO CONSELHEIRO INTEGRADA AO FUNDO (Sem Colunas / Sem Moldura) */}
          <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[55%] z-0 pointer-events-none select-none hidden lg:block">
            
            {/* Letra/Monograma Gigante de Profundidade (Atrás da pessoa, quase invisível) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.015] font-black text-[25rem] md:text-[38rem] select-none pointer-events-none leading-none z-0 font-display">
              FA
            </div>

            {/* Imagem do Conselheiro com Fade em Degradê Lateral e Inferior */}
            <img
              key={activeAdvisor}
              src={advisors[activeAdvisor].image}
              alt={advisors[activeAdvisor].name}
              className={`absolute bottom-0 right-0 w-full h-full object-cover brightness-[0.95] contrast-[1.05] z-10 animate-fade-in-premium ${
                advisors[activeAdvisor].image.startsWith('/') ? "" : "grayscale"
              }`}
              style={{
                objectPosition: advisors[activeAdvisor].position || 'center 20%'
              }}
            />

            {/* FADE GRADIENTE LATERAL ESQUERDO: Protege o texto à esquerda sem escurecer o rosto na direita */}
            <div 
              className="absolute inset-y-0 left-0 w-full z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.9) 15%, rgba(5,5,5,0.3) 28%, rgba(5,5,5,0) 40%)'
              }}
            />
            
            {/* FADE GRADIENTE INFERIOR: Suavizando o peito/base da imagem no fundo preto da seção */}
            <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

            {/* Luz cinematográfica no topo direito */}
            <div className="absolute top-[10%] right-[8%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none z-20" />
            <div className="absolute top-[25%] right-[15%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_6px_rgba(255,255,255,0.3)] pointer-events-none z-20" />

          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
            
            {/* Header da Seção Premium Simplificado */}
            <div className="mx-auto max-w-5xl text-center mb-20 md:mb-28 relative z-30">
              <RevealOnScroll delay={100}>
                <h2 className="text-4xl font-extrabold md:text-6xl tracking-tight uppercase text-gradient-silver text-shine">
                  O CONSELHO
                </h2>
              </RevealOnScroll>
            </div>

            {/* Área de composição única */}
            <div className="relative mx-auto max-w-5xl">
              
              {/* Setas Flutuantes nas Extremidades com Borda Fina e Glow Suave */}
              <button
                onClick={() => setActiveAdvisor((prev) => (prev === 0 ? advisors.length - 1 : prev - 1))}
                className="absolute left-[-20px] md:left-[-65px] top-[220px] md:top-1/2 -translate-y-1/2 h-13 w-13 rounded-full border border-white/10 bg-[#050505]/80 text-white/80 transition-all hover:bg-white/10 hover:border-white/30 hover:text-white cursor-pointer z-30 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)] group active:scale-95 select-none"
                aria-label="Anterior"
              >
                <ArrowLeft className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              
              <button
                onClick={() => setActiveAdvisor((prev) => (prev === advisors.length - 1 ? 0 : prev + 1))}
                className="absolute right-[-20px] md:right-[-65px] top-[220px] md:top-1/2 -translate-y-1/2 h-13 w-13 rounded-full border border-white/10 bg-[#050505]/80 text-white/80 transition-all hover:bg-white/10 hover:border-white/30 hover:text-white cursor-pointer z-30 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)] group active:scale-95 select-none"
                aria-label="Próximo"
              >
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {/* Grid Invisível para Posicionar o Conteúdo Flutuante */}
              <div className="grid gap-10 lg:grid-cols-12 min-h-[500px] items-center relative z-20">
                
                {/* Bloco de Texto (Ocupa 45% de largura aproximada no desktop) */}
                <div 
                  key={activeAdvisor}
                  className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1 animate-fade-in-premium"
                >
                  {/* Indicador Numérico Spaced */}
                  <div className="text-xs font-mono text-white/40 uppercase tracking-[0.25em] mb-4">
                    <span className="text-white font-bold">0{activeAdvisor + 1}</span>
                    <span className="mx-2 text-white/20">/</span>
                    <span>0{advisors.length}</span>
                  </div>

                  {/* Nome do Conselheiro em Caixa Alta Grande */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95] mb-5">
                    {advisors[activeAdvisor].name}
                  </h3>

                  {/* Apresentação da Expertise (Selo de Autoridade) */}
                  <div className="mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-2">
                      Área de Expertise
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2.5 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.18em] text-white border border-white/15 rounded-full px-5 py-2.5 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-md">
                        {(() => {
                          const AdvisorIcon = advisors[activeAdvisor].icon;
                          return AdvisorIcon && <AdvisorIcon className="h-3.5 w-3.5 text-white/70 shrink-0" />;
                        })()}
                        {advisors[activeAdvisor].area}
                      </span>
                    </div>
                  </div>

                  {/* Bloco Curto de Posicionamento de Autoridade */}
                  <p className="text-[#9e9e9e] text-xs md:text-sm leading-relaxed mb-8 font-medium italic border-l-2 border-white/10 pl-3">
                    {advisors[activeAdvisor].desc}
                  </p>

                  {/* Como ajuda */}
                  <div className="mt-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-2.5 block">Como ele pode ajudar</h4>
                    <p className="text-[#bfbfbf] text-sm md:text-[15px] leading-relaxed font-normal">
                      {advisors[activeAdvisor].help}
                    </p>
                  </div>

                  {/* Pontos principais com linhas divisórias finas */}
                  <div className="mt-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 mb-3.5 block">Pontos Principais de Contribuição</h4>
                    <ul className="space-y-0 border-t border-white/5">
                      {advisors[activeAdvisor].points.map((pt, i) => (
                        <li 
                          key={i} 
                          className="flex items-center gap-4 py-3 border-b border-white/5 text-xs md:text-sm text-[#e5e5e5] transition-all duration-300 hover:bg-white/[0.01]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,1)]" />
                          <span className="font-medium tracking-wide">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Imagem do Conselheiro no Mobile (Sem Gradiente, na parte inferior) */}
                <div
                  key={`img-mobile-${activeAdvisor}`}
                  className="block lg:hidden order-2 w-full h-auto min-h-0 overflow-visible bg-[#050505] pointer-events-none select-none"
                >
                  <img
                    src={advisors[activeAdvisor].image}
                    alt={advisors[activeAdvisor].name}
                    className="block w-full h-auto max-w-full object-contain transform-none"
                    style={{
                      aspectRatio: '16 / 9',
                      objectPosition: advisors[activeAdvisor].mobilePosition || 'center top'
                    }}
                  />
                </div>

                {/* Coluna de Preenchimento para manter o respiro no Desktop */}
                <div className="hidden lg:block lg:col-span-7 lg:order-2 pointer-events-none" />

              </div>

              {/* Controles de Rodapé */}
              <div className="mt-20 flex flex-col items-center gap-8 relative z-30">
                
                {/* Dots (Pills dinâmicos) */}
                <div className="flex gap-2.5">
                  {advisors.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveAdvisor(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeAdvisor ? "w-6 bg-white" : "w-1.5 bg-white/20"
                      }`}
                      aria-label={`Ir para conselheiro ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Frase Enclausurada por Linhas Gradientes */}
                <div className="flex items-center gap-6 justify-center w-full max-w-2xl mx-auto mt-2">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                  <p className="text-xs md:text-sm text-white/40 tracking-wide text-center shrink-0">
                    “Cada conselheiro entra como apoio estratégico em uma dor específica do empresário.”
                  </p>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SEÇÃO DE INVESTIMENTO (Alta Intensidade Prateada) */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/[0.03] bg-gradient-to-b from-[#080808] to-[#050505]">
          {/* Brilho Intenso de Fundo */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] w-full bg-white/[0.02] blur-[120px] pointer-events-none" />
          
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            
            <RevealOnScroll delay={100}>
              <SectionLabel>PROGRAMA EXCLUSIVO</SectionLabel>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <h2 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-tight">
                INVESTIMENTO NO PROGRAMA
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="my-12 relative inline-block">
                
                {/* Glow de destaque metálico */}
                <div className="absolute -inset-8 rounded-3xl bg-white/[0.04] blur-2xl pointer-events-none" />
                
                {/* Painel do Preço */}
                <div className="relative rounded-2xl border border-white/20 bg-[#0f0f0f]/90 px-8 py-10 md:px-14 shadow-silver backdrop-blur-xl">
                  
                  {/* Efeito aço escovado */}
                  <div className="absolute inset-0 bg-steel-texture opacity-10 pointer-events-none" />
                  
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#a6a6a6] mb-3">Aceleração Estratégica Individual</div>
                  
                  <div className="text-5xl font-black leading-none text-white md:text-7xl tracking-tighter text-shine">
                    6x de R$ 5.000
                  </div>
                  
                  <div className="mt-4 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#bfbfbf] flex items-center justify-center gap-2">
                    <span>OU R$ 30.000 À VISTA</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <p className="mx-auto max-w-2xl text-base text-[#bfbfbf] md:text-lg leading-relaxed mb-10">
                Empresas mais organizadas tomam melhores decisões, retêm melhores talentos e crescem com mais consistência e lucro.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={500}>
              <div className="flex flex-col items-center gap-3">
                <CTAButton className="px-10 py-5.5 text-base shadow-[0_0_35px_rgba(255,255,255,0.25)]">
                  QUERO PARTICIPAR
                </CTAButton>
                <p className="text-xs text-[#8c8c8c] tracking-wide mt-2">
                  * Vagas severamente limitadas devido ao acompanhamento individual dos sócios da FA.
                </p>
              </div>
            </RevealOnScroll>

          </div>
        </section>

        {/* FAQ (Estilo Minimalista e Escuro) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03]">
          <div className="mx-auto max-w-3xl px-6">
            
            <div className="text-center mb-16">
              <RevealOnScroll delay={100}>
                <SectionLabel>DÚVIDAS FREQUENTES</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight">
                  Tire suas <span className="text-gradient-silver">dúvidas</span>
                </h2>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={300}>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: "Para quem é o Programa de Aceleração da FA?",
                    a: "O programa é desenhado especificamente para fundadores, sócios e diretores de empresas que já possuem operação ativa e faturamento consolidado, mas sofrem com a falta de processos padronizados, desorganização no comercial, ausência de leitura financeira (DRE/DFC) ou excesso de dependência do fundador no operacional."
                  },
                  {
                    q: "A FA é uma agência de marketing ou consultoria de tráfego?",
                    a: "Não. Somos uma aceleradora estratégica de negócios. Nosso foco está em estruturar as fundações do seu negócio (Processos, Gestão, Governança, Comercial e Finanças) para garantir que a sua operação esteja pronta para escalar com consistência, governança e previsibilidade."
                  },
                  {
                    q: "Como funciona o acompanhamento semanal?",
                    a: "Estabelecemos uma cadência de reuniões de OKRs (Objectives and Key Results) para guiar o time, monitorar o andamento dos projetos e revisar indicadores semanais em dashboards customizados, removendo achismos do processo decisório."
                  },
                  {
                    q: "Qual o tempo de duração da aceleração?",
                    a: "A estruturação dos pilares e a implementação inicial ocorrem em um formato intensivo de acompanhamento próximo. Os prazos exatos e entregas de governança são validados logo na fase de Diagnóstico Estratégico inicial."
                  },
                  {
                    q: "Como é feita a aplicação e seleção para o programa?",
                    a: "Por trabalharmos lado a lado com os fundadores e estruturarmos processos reais internamente, as vagas são limitadas. A entrada no programa ocorre via aplicação estratégica. Nossa equipe entrará em contato para analisar o fit do seu modelo de negócio."
                  }
                ].map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-item-${idx}`}
                    className="border border-white/5 bg-[#080808]/80 px-6 rounded-xl transition-all duration-300 hover:border-white/15"
                  >
                    <AccordionTrigger className="py-5 text-left text-sm md:text-base font-bold text-white hover:no-underline tracking-wide">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-xs md:text-sm leading-relaxed text-[#a6a6a6]">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealOnScroll>

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden py-28 md:py-36 bg-[#050505]">
          <div className="absolute inset-0 bg-hero-grad opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            
            <RevealOnScroll delay={100}>
              <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
                <span className="md:whitespace-nowrap">SUA EMPRESA ESTÁ PRONTA PARA</span>
                <br className="hidden md:block" />
                <span className="text-gradient-silver text-shine block md:inline-block">OPERAR EM OUTRO PATAMAR?</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="mx-auto mt-8 max-w-2xl text-base text-[#bfbfbf] md:text-lg leading-relaxed">
                Pare de perder margem de lucro e estressar sua operação devido à desorganização. Implemente um modelo replicável de governança, vendas e controle com o time da FA.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="mt-12">
                <CTAButton className="px-10 py-5.5 text-base shadow-[0_0_35px_rgba(255,255,255,0.15)]">
                  Falar com o Especialista FA
                </CTAButton>
              </div>
            </RevealOnScroll>

          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="border-t border-white/[0.05] bg-[#050505] py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-xs font-black text-white">
                FA
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Growth Partner
              </span>
            </div>
            <p className="text-xs text-[#8c8c8c] tracking-wide">
              © {new Date().getFullYear()} FA. Todos os direitos reservados. Programa Premium de Aceleração Empresarial.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

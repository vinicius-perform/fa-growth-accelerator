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
      { title: "FA Aceleração Comercial — 6 Meses de Estruturação e Escala" },
      {
        name: "description",
        content:
          "Programa de aceleração comercial de seis meses da FA. Organize dados, comercial, finanças e processos para transformar crescimento em escala previsível.",
      },
      { property: "og:title", content: "FA Aceleração Comercial — 6 Meses de Estruturação e Escala" },
      {
        property: "og:description",
        content:
          "Pare de apagar incêndios. Participe do programa de aceleração comercial de 6 meses.",
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP = "https://wa.link/ythgg5";

// Hook/Componente de Reveal ao Scroll (Seguro contra erros de suporte e hydration)
function RevealOnScroll({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback caso o IntersectionObserver não seja suportado no browser
    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
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

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`mb-6 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] backdrop-blur-md ${
      light 
        ? "border-black/10 bg-black/[0.02] text-black/90 shadow-none" 
        : "border-white/10 bg-white/[0.03] text-white/95 shadow-glow"
    }`}>
      <span className={`h-1.5 w-1.5 rounded-full ${
        light 
          ? "bg-black shadow-[0_0_6px_rgba(0,0,0,0.2)]" 
          : "bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
      }`} />
      {children}
    </div>
  );
}

function LandingPage() {

  const advisors = [
    {
      name: "PAULO HENRIQUE",
      area: "Inteligência Emocional",
      desc: "Desenvolve maturidade executiva e estabilidade estratégica para liderar equipes de alto desempenho sob pressão extrema.",
      help: "Apoia empresários a otimizarem a tomada de decisão estratégica, aprimorarem a liderança inspiradora e dominarem o controle emocional sob alta pressão.",
      points: [
        "Liderança sob pressão",
        "Gestão emocional",
        "Alta performance executiva"
      ],
      image: "/phc.webp",
      position: "center 15%",
      mobilePosition: "50% 20%",
      icon: Brain
    },
    {
      name: "PAULO FILHO",
      area: "Sair do Operacional & Delegação",
      desc: "Especialista em criar rotinas estratégicas e metodologias de delegação para libertar o fundador do dia a dia operacional.",
      help: "Mentoria no formato Hotseat para desenhar processos de governança eficientes, capacitar lideranças intermediárias e estruturar o negócio para rodar de forma previsível.",
      points: [
        "Hotseat: Saída do operacional",
        "Delegação prática e rotina estratégica",
        "Menos dependência do fundador"
      ],
      image: "/paulof.webp",
      position: "center 18%",
      mobilePosition: "50% 18%",
      icon: Layers
    },
    {
      name: "LEMUEL",
      area: "Redução de Custos Operacionais",
      desc: "Consultor especializado em identificar desperdícios invisíveis, auditar gargalos financeiros e proteger a lucratividade de grandes operações.",
      help: "Ajuda a identificar desperdícios em processos, reduzir custos desnecessários, melhorar eficiência e proteger a lucratividade geral do negócio.",
      points: [
        "Auditoria de custos e desperdícios",
        "Eficiência operacional e otimização",
        "Proteção e ganho de margem de lucro"
      ],
      image: "/lemuel2.webp",
      position: "center 20%",
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
              src="/bg.webp"
              alt="Fundo Executivo"
              className="w-full h-full object-cover object-[80%_top] brightness-75 contrast-[1.05]"
              loading="eager"
              fetchPriority="high"
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
                  <SectionLabel>PROGRAMA DE SEIS MESES</SectionLabel>
                </RevealOnScroll>
                
                <RevealOnScroll delay={200}>
                  <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight uppercase">
                    Programa de aceleração comercial<br />
                    <span className="text-gradient-silver text-shine block mt-2">por seis meses</span>
                  </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-[#bfbfbf] md:text-xl">
                    Programa estratégico de seis meses focado em estruturar canais de vendas, inteligência de dados, processos comerciais e ritmo de execução.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-col items-start gap-2">
                      <CTAButton>QUERO ACELERAR MINHAS VENDAS</CTAButton>
                      <p className="text-[11px] text-[#8c8c8c] tracking-wide mt-1">
                        * Aplicação estratégica para empresas que já possuem operação em funcionamento.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>

              </div>

              {/* Imagem de Fundo (Apenas Mobile - Card Premium Estilizado) */}
              <RevealOnScroll delay={450} className="w-full lg:hidden mt-8">
                <div className="relative select-none overflow-hidden rounded-3xl border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                  <img
                    src="/bg.webp"
                    alt="Fundo Executivo Mobile"
                    className="w-full h-[280px] object-cover object-[68%_center] brightness-[0.85] contrast-[1.03]"
                    loading="eager"
                    fetchPriority="high"
                  />
                  {/* Gradiente de fusão sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/10 to-transparent pointer-events-none" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE CONTEXTO */}
        <section className="relative py-24 md:py-32 border-b border-black/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-5xl text-center mb-16">
              <RevealOnScroll delay={100}>
                <SectionLabel light>O CONTEXTO</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-neutral-900 tracking-tight">
                  O PROBLEMA NÃO É APENAS VENDER MAIS.
                  <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600 bg-clip-text text-transparent block mt-2">É ESTRUTURAR A OPERAÇÃO E ESCALAR AS VENDAS.</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 md:text-xl leading-relaxed">
                  Muitas empresas falham em crescer por falta de processos comerciais bem definidos, inteligência de dados nas decisões e ritmo de execução.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Comercial Instável",
                  desc: "Vendas ocorrendo de forma imprevisível. Falta de rotinas comerciais claras e um playbook de conversão replicável.",
                  metric: "Imprevisibilidade",
                  icon: TrendingDown
                },
                {
                  title: "Gargalos de Gestão",
                  desc: "A operação comercial não acompanha a demanda e depende integralmente do fundador para funcionar e decidir.",
                  metric: "Sobrecarga",
                  icon: Layers
                },
                {
                  title: "Tomada de Decisão sem Dados",
                  desc: "Decisões cruciais tomadas com base em percepções, sem leitura clara de DRE/DFC, margens de lucro ou custos.",
                  metric: "Sem Direção",
                  icon: BarChart3
                }
              ].map((c, idx) => {
                const IconComponent = c.icon;
                return (
                  <RevealOnScroll key={c.title} delay={idx * 100}>
                    <div className="relative rounded-3xl p-8 h-full flex flex-col justify-between group border border-neutral-200/60 bg-gradient-to-b from-white to-neutral-50/70 hover:from-white hover:to-white hover:border-neutral-900 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1 overflow-hidden">
                      {/* Efeito aço escovado sutilíssimo de fundo */}
                      <div className="absolute inset-0 bg-steel-texture opacity-[0.02] pointer-events-none" />
                      
                      <div>
                        {/* Container do ícone estilo moeda metálica fosca */}
                        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-800 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                          <IconComponent className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-neutral-900 tracking-wide transition-colors duration-300 group-hover:text-black">{c.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300">{c.desc}</p>
                      </div>
                      
                      {/* Divisor e métrica estilo clean de alta costura */}
                      <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                          {c.metric}
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 group-hover:bg-neutral-950 transition-colors duration-300" />
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>

          </div>
        </section>

        {/* SEÇÃO ENTREGÁVEIS (O Programa de 6 Meses) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-3xl text-center mb-20">
              <RevealOnScroll delay={100}>
                <SectionLabel>ENTREGÁVEIS DO PROGRAMA</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight uppercase">
                  O QUE VOCÊ VAI <span className="text-gradient-silver">RECEBER NA ACELERAÇÃO</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="mt-5 text-base text-[#bfbfbf] md:text-xl leading-relaxed">
                  Um escopo completo de reestruturação comercial, inteligência financeira e ritmo de gestão executiva durante seis meses.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Diagnóstico Estratégico",
                  desc: "Mapeamento completo do perfil do projeto, identificando falhas de processo, gargalos e oportunidades imediatas de escala.",
                  icon: Target
                },
                {
                  title: "Análise de Geração de Demanda",
                  desc: "Auditoria analítica sobre a captação de clientes através de canais de tráfego pago e estratégias orgânicas de conversão.",
                  icon: TrendingUp
                },
                {
                  title: "Estruturação Digital",
                  desc: "Construção de ativos essenciais para conversão de vendas: Google Meu Negócio otimizado, landing page profissional e links estratégicos na bio.",
                  icon: Globe
                },
                {
                  title: "Gestão de Dados",
                  desc: "Centralização e organização de todas as métricas comerciais críticas do negócio em dashboards automatizados de fácil leitura.",
                  icon: Database
                },
                {
                  title: "Análise de DRE e DFC",
                  desc: "Reestruturação e leitura analítica do Demonstrativo de Resultados (DRE) e Demonstrativo de Fluxo de Caixa (DFC) para proteger as margens.",
                  icon: LineChart
                },
                {
                  title: "Modelo Operacional Completo",
                  desc: "Desenho da arquitetura de processos comerciais e fluxos de trabalho operacionais para dar escala e previsibilidade à rotina do time.",
                  icon: Briefcase
                },
                {
                  title: "Reuniões Semanais de OKR",
                  desc: "Cadência fixa semanal de alinhamento estratégico e acompanhamento de metas (Objectives and Key Results) diretamente com o Stakeholder.",
                  icon: CalendarCheck
                }
              ].map((entregavel, idx) => {
                const IconComponent = entregavel.icon;
                return (
                  <RevealOnScroll key={entregavel.title} delay={idx * 80}>
                    <div className="card-premium rounded-2xl p-8 h-full flex flex-col justify-between group relative overflow-hidden">
                      <div className="absolute inset-0 bg-steel-texture opacity-5 pointer-events-none" />
                      <div>
                        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-wide">{entregavel.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#a6a6a6] group-hover:text-[#bfbfbf] transition-colors">{entregavel.desc}</p>
                      </div>
                      <div className="mt-8 text-[11px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/45 transition-colors">
                        ENTREGÁVEL 0{idx + 1}
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>

          </div>
        </section>

        {/* SEÇÃO DE TRANSFORMAÇÃO (Antes vs Depois) */}
        <section className="relative py-24 md:py-32 border-b border-black/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="mx-auto max-w-3xl text-center mb-20">
              <RevealOnScroll delay={100}>
                <SectionLabel light>A EVOLUÇÃO ESTRATÉGICA</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl font-extrabold text-neutral-900 md:text-5xl tracking-tight">
                  MUDANÇA DE PATAMAR:<br />
                  <span className="bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600 bg-clip-text text-transparent block mt-2">DA OPERAÇÃO CONFUSA AO CRESCIMENTO PREVISÍVEL</span>
                </h2>
              </RevealOnScroll>
            </div>

            <div className="grid gap-8 md:grid-cols-2 relative">
              {/* Efeito de separação vertical no desktop */}
              <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-black/10 -translate-x-1/2" />
              
              {/* Bloco ANTES */}
              <RevealOnScroll delay={100}>
                <div className="rounded-3xl border border-red-100/50 bg-red-50/30 p-8 md:p-12 relative overflow-hidden h-full transition-all duration-500 hover:bg-red-50/40 hover:border-red-200/50 hover:shadow-none">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 border border-red-100 text-red-500 shadow-sm">
                      <XCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">Diagnóstico</span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-neutral-800">Cenário Atual (Gargalos)</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-6">
                    {[
                      { t: "Comercial imprevisível", d: "Sem processos claros de atração ou playbooks estruturados de vendas." },
                      { t: "Decisões no 'feeling'", d: "Ausência de métricas comerciais e dados consolidados sobre a operação." },
                      { t: "Time desalinhado", d: "Colaboradores trabalhando isoladamente, sem metas claras de performance e OKRs." },
                      { t: "Processos informais", d: "Ausência de padrões operacionais, fazendo com que cada um atue à sua maneira." },
                      { t: "Crescimento caótico", d: "Crescer faturamento significa maior sobrecarga, estresse e queda de margem." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400/60 shrink-0" />
                        <div>
                          <h4 className="text-base font-bold text-neutral-800">{item.t}</h4>
                          <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{item.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Bloco DEPOIS */}
              <RevealOnScroll delay={200}>
                <div className="rounded-3xl border border-neutral-300/80 bg-gradient-to-b from-white to-neutral-50/50 p-8 md:p-12 relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.06)] h-full transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 md:scale-[1.02] hover:md:scale-[1.03]">
                  {/* Luz metálica sutil no topo do card */}
                  <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-neutral-500/40 to-transparent" />
                  
                  {/* Efeito aço escovado sutilíssimo de fundo */}
                  <div className="absolute inset-0 bg-steel-texture opacity-[0.03] pointer-events-none" />
                  
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-950 text-white shadow-md">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">Metodologia FA</span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-neutral-900">Nova Realidade (Aceleração)</span>
                    </div>
                  </div>

                  <ul className="space-y-6">
                    {[
                      { t: "Máquina previsível de vendas", d: "Processo comercial parametrizado, com playbook validado e metas claras." },
                      { t: "Decisões guiadas por dados", d: "Leitura estratégica de DRE/DFC e dashboards de conversão integrados." },
                      { t: "Foco em execução semanal", d: "Alinhamentos de OKRs e acompanhamento de metas diretamente com o Stakeholder." },
                      { t: "Modelo Operacional estruturado", d: "Processos padronizados e rotinas claras de governança e delegação." },
                      { t: "Escala comercial com lucro", d: "Crescimento previsível de receita protegendo a margem e o caixa do negócio." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-800 shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
                        <div>
                          <h4 className="text-base font-extrabold text-neutral-900">{item.t}</h4>
                          <p className="mt-1 text-xs text-neutral-600 leading-relaxed">{item.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </section>

        {/* SEÇÃO BÔNUS EXCLUSIVOS (GRID DE CARD SPOTLIGHT DE SÓCIOS) */}
        <section className="relative py-24 md:py-32 border-b border-white/[0.03] bg-[#050505] overflow-hidden">
          
          {/* Luzes de fundo cinematográficas */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-full max-w-7xl bg-white/[0.01] blur-[150px] pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
            
            {/* Header da Seção Premium Centralizado */}
            <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24 relative z-30">
              <RevealOnScroll delay={100}>
                <SectionLabel>ENTREGAS ADICIONAIS</SectionLabel>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <h2 className="text-4xl font-extrabold md:text-6xl tracking-tight uppercase text-gradient-silver text-shine">
                  BÔNUS EXCLUSIVOS
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm text-[#bfbfbf] leading-relaxed">
                  Além do escopo principal de seis meses, você recebe o direcionamento estratégico e mentoria dos sócios especialistas da FA.
                </p>
              </RevealOnScroll>
            </div>

            {/* Grid de Cards dos Conselheiros */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {advisors.map((advisor, idx) => {
                const AdvisorIcon = advisor.icon;
                return (
                  <RevealOnScroll key={advisor.name} delay={idx * 150}>
                    <div className="group relative rounded-3xl p-6 bg-gradient-to-b from-[#121212] to-[#080808] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:-translate-y-2 flex flex-col justify-between h-full">
                      
                      {/* Efeito aço escovado sutilíssimo de fundo */}
                      <div className="absolute inset-0 bg-steel-texture opacity-[0.02] pointer-events-none" />
                      
                      {/* Glow de hover sutil por trás do card */}
                      <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none z-0" />
                      
                      <div className="relative z-10 flex-1">
                        {/* Imagem do Conselheiro */}
                        <div className="aspect-[5/4] w-full rounded-2xl overflow-hidden mb-6 border border-white/5 bg-neutral-900 relative">
                          <img
                            src={advisor.image}
                            alt={advisor.name}
                            className="w-full h-full object-cover transition-all duration-700 ease-out brightness-95 group-hover:brightness-100 group-hover:scale-105"
                            style={{
                              objectPosition: advisor.position || 'center 20%'
                            }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Selo/Badge do Tema */}
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#d4d4d4] bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
                            {AdvisorIcon && <AdvisorIcon className="h-3 w-3 text-white/70" />}
                            {advisor.area}
                          </span>
                        </div>

                        {/* Nome do Conselheiro */}
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase mb-3">
                          {advisor.name}
                        </h3>

                        {/* Descrição Curta */}
                        <p className="text-xs text-[#a6a6a6] leading-relaxed mb-6 min-h-[48px]">
                          {advisor.desc}
                        </p>
                      </div>

                      {/* Lista de Entregas do Bônus */}
                      <div className="relative z-10 mt-auto border-t border-white/5 pt-5">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3.5 block">Pontos de Contribuição</span>
                        <ul className="space-y-3">
                          {advisor.points.map((pt, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs text-[#d4d4d4]">
                              <span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,1)] transition-all duration-300" />
                              <span className="font-medium tracking-wide">{pt}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Assinatura do Conselho */}
                        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.25em] text-white/20 group-hover:text-white/40 transition-colors duration-300">
                          <span>Sócio Especialista</span>
                          <span>FA CONSELHO</span>
                        </div>
                      </div>

                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>

            {/* Frase Enclausurada de Rodapé */}
            <div className="mt-20 flex items-center gap-6 justify-center w-full max-w-2xl mx-auto px-4 relative z-20">
              <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <p className="text-xs text-white/40 tracking-wide text-center max-w-lg leading-relaxed">
                “Cada bônus foi desenhado para atuar em uma alavanca crítica de gestão, eficiência e estabilidade executiva.”
              </p>
              <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
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
                  
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#a6a6a6] mb-3">Aceleração Comercial Premium — 6 Meses</div>
                  
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
                Uma operação comercial previsível toma melhores decisões de vendas, atrai e retém melhores talentos e acelera resultados reais.
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
                    q: "Para quem é o Programa de Aceleração Comercial?",
                    a: "O programa é desenhado especificamente para fundadores, sócios e diretores de empresas que já possuem faturamento ativo, mas sofrem com comercial instável, falta de processos de vendas padronizados, ausência de leitura financeira (DRE/DFC) ou excesso de dependência do fundador nas decisões comerciais."
                  },
                  {
                    q: "A FA é uma agência de marketing ou consultoria de tráfego?",
                    a: "Não. Somos uma aceleradora de negócios. Estruturamos as fundações do seu departamento comercial, inteligência financeira, dados e processos operacionais para dar escala e previsibilidade."
                  },
                  {
                    q: "Como funciona o acompanhamento semanal?",
                    a: "Estabelecemos reuniões semanais de OKRs (Objectives and Key Results) diretamente com o Stakeholder para monitorar metas comerciais, avaliar campanhas e refinar o ritmo de execução."
                  },
                  {
                    q: "Qual a duração do programa?",
                    a: "A Aceleração Comercial tem duração contínua de seis meses, onde implementamos o diagnóstico, a estruturação digital, a análise financeira e o modelo operacional."
                  },
                  {
                    q: "Como é feita a seleção para o programa?",
                    a: "Por realizarmos uma entrega próxima e individual de estruturação interna, nossas vagas são limitadas. O ingresso no programa é feito sob aplicação e análise de fit comercial."
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
                Pare de ter vendas imprevisíveis e perder margem de lucro. Implemente um modelo replicável de aceleração comercial, controle de dados e finanças com o time da FA.
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
              © {new Date().getFullYear()} FA. Todos os direitos reservados. Programa Premium de Aceleração Comercial.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-executive.jpg";
import meetingImg from "@/assets/strategy-meeting.jpg";
import dashboardImg from "@/assets/dashboard-mockup.jpg";
import {
  ArrowRight,
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
      { title: "FA Growth Partner — Aceleração empresarial premium" },
      {
        name: "description",
        content:
          "Programa estratégico da FA para empresários estruturarem comercial, dados, finanças e operação em um único plano de crescimento previsível.",
      },
      { property: "og:title", content: "FA Growth Partner — Aceleração empresarial premium" },
      {
        property: "og:description",
        content:
          "Transforme sua empresa em uma operação previsível, organizada e pronta para crescer.",
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP = "https://wa.me/5500000000000";

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold uppercase tracking-wider md:text-base ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-glow bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
      {children}
    </div>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-band font-black text-primary-foreground shadow-red">
              FA
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Growth Partner
            </span>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-red-glow bg-primary/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition hover:bg-primary/20 sm:inline-block"
          >
            Aplicar agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-grad">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.22_27/0.35),transparent_50%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-8">
          <div className="relative z-10">
            <SectionLabel>Programa premium de aceleração empresarial</SectionLabel>
            <h1 className="text-4xl font-black leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
              Transforme sua empresa em uma operação{" "}
              <span className="text-gradient-red">previsível</span>, organizada e pronta para crescer
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Um programa estratégico da FA para empresários que precisam organizar comercial,
              marketing, dados, finanças e operação em um único plano de crescimento.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3">
              <CTAButton>Quero estruturar minha empresa</CTAButton>
              <p className="text-xs text-muted-foreground">
                Aplicação estratégica para empresas em fase de crescimento.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {["Comercial", "Dados", "Finanças", "Operação", "Crescimento"].map((tag) => (
                <div
                  key={tag}
                  className="rounded-lg border border-red-glow bg-card/60 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-foreground/90 backdrop-blur"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-red-glow shadow-red">
              <img
                src={heroImg}
                alt="Empresário em ambiente premium com indicadores estratégicos"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating dashboard cards */}
            <div className="absolute -left-4 top-10 hidden rounded-xl border border-red-glow bg-card-grad px-4 py-3 shadow-red backdrop-blur md:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Receita</div>
              <div className="text-lg font-bold text-foreground">+42%</div>
              <div className="mt-1 h-1 w-24 rounded bg-primary/30">
                <div className="h-full w-3/4 rounded bg-red-band" />
              </div>
            </div>
            <div className="absolute -right-2 bottom-12 hidden rounded-xl border border-red-glow bg-card-grad px-4 py-3 shadow-red backdrop-blur md:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Funil comercial</div>
              <div className="mt-1 flex items-end gap-1">
                {[40, 70, 55, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-t bg-red-band"
                    style={{ height: `${h * 0.4}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR / CONTEXTO */}
      <section className="relative border-t border-border/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>O contexto</SectionLabel>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              O problema não é apenas vender mais.{" "}
              <span className="text-gradient-red">É crescer sem perder o controle.</span>
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Muitas empresas até conseguem gerar demanda, mas travam quando precisam acompanhar
              leads, medir resultados, organizar o time, controlar custos e transformar crescimento
              em lucro.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Leads sem acompanhamento",
                desc: "Oportunidades chegam, mas não há rotina para qualificar, nutrir e converter.",
              },
              {
                title: "Comercial sem rotina clara",
                desc: "O time vende quando consegue. Não existe processo replicável e previsível.",
              },
              {
                title: "Marketing sem análise real",
                desc: "Investimento em mídia sem leitura clara do retorno e do que realmente funciona.",
              },
              {
                title: "Gestão financeira sem visão de futuro",
                desc: "Decisões tomadas no instinto, sem entender margem, fluxo de caixa e projeção.",
              },
            ].map((c) => (
              <div key={c.title} className="card-premium rounded-2xl p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <XCircle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section className="relative border-t border-border/30 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-red-glow shadow-red">
              <img
                src={meetingImg}
                alt="Reunião estratégica com indicadores"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionLabel>A oportunidade</SectionLabel>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Empresas que crescem de verdade não dependem de sorte.{" "}
              <span className="text-gradient-red">Dependem de método.</span>
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              A FA entra para diagnosticar gargalos, organizar processos e criar uma estrutura de
              crescimento baseada em dados, execução e acompanhamento estratégico.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Diagnóstico real", "Processos definidos", "Indicadores que importam", "Execução acompanhada"].map(
                (t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 rounded-lg border border-red-glow bg-card/60 px-4 py-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </div>
                ),
              )}
            </div>
            <div className="mt-9">
              <CTAButton>Aproveitar agora</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="relative border-t border-border/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>O método FA</SectionLabel>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              O que será <span className="text-gradient-red">construído</span> dentro da sua empresa
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Oito frentes de trabalho que se conectam em um único plano de crescimento.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, title: "Aceleração comercial", desc: "Estruturação do processo comercial, acompanhamento de oportunidades e criação de uma rotina clara de vendas." },
              { icon: Database, title: "Gestão de dados", desc: "Organização dos principais indicadores para que as decisões deixem de ser baseadas em achismo." },
              { icon: BarChart3, title: "Geração de demanda", desc: "Leitura estratégica do que vem de anúncios, redes sociais, Google, indicações e canais orgânicos." },
              { icon: Globe, title: "Estruturação digital", desc: "Revisão e construção dos principais pontos digitais: Google Meu Negócio, landing page e link bio." },
              { icon: CalendarCheck, title: "OKR semanal", desc: "Reuniões semanais com os stakeholders para definir prioridades, metas e próximos passos." },
              { icon: Target, title: "Diagnóstico estratégico", desc: "Análise completa do cenário atual, gargalos, oportunidades e plano de evolução." },
              { icon: LineChart, title: "Análise de DRE e DFC", desc: "Leitura financeira para entender receita, custos, fluxo de caixa e pontos de melhoria." },
              { icon: Layers, title: "Modelo operacional", desc: "Desenho da estrutura ideal para a empresa operar com clareza, delegação e previsibilidade." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card-premium relative rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-band shadow-red">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK - RED BAND */}
      <section className="relative overflow-hidden bg-red-band py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(1_0_0/0.15),transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0_0_0/0.3),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Da confusão à clareza
            </div>
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              Da operação confusa para uma empresa com clareza, controle e direção
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-black/40 p-8 backdrop-blur">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Antes
              </div>
              <ul className="space-y-4">
                {[
                  "Falta de previsibilidade",
                  "Decisões no achismo",
                  "Leads perdidos",
                  "Custos sem controle",
                  "Dono preso no operacional",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/90">
                    <XCircle className="h-5 w-5 shrink-0 text-white/60" />
                    <span className="text-base">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/40 bg-white/10 p-8 backdrop-blur">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Depois
              </div>
              <ul className="space-y-4">
                {[
                  "Metas claras",
                  "Dados organizados",
                  "Comercial acompanhado",
                  "Finanças analisadas",
                  "Operação estruturada",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-white" />
                    <span className="text-base font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACOMPANHAMENTO */}
      <section className="relative border-t border-border/30 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionLabel>Acompanhamento estratégico</SectionLabel>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Você não recebe apenas um plano. Você recebe{" "}
              <span className="text-gradient-red">acompanhamento estratégico.</span>
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Durante o programa, a FA acompanha a evolução do negócio com reuniões, indicadores,
              análises e direcionamentos práticos para que a estratégia saia do papel.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Reuniões semanais", d: "Cadência fixa com o time de crescimento." },
                { t: "OKRs definidos", d: "Metas claras por trimestre e por área." },
                { t: "Indicadores acompanhados", d: "KPIs revisados semanalmente." },
                { t: "Plano de ação por prioridade", d: "Foco no que move o ponteiro." },
              ].map((c) => (
                <div key={c.t} className="card-premium rounded-xl p-4">
                  <div className="text-sm font-bold text-foreground">{c.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-red-glow shadow-red">
              <img
                src={dashboardImg}
                alt="Dashboard estratégico de acompanhamento"
                width={1600}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="relative border-t border-border/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Bônus exclusivos</SectionLabel>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Além da estrutura principal, você terá acesso a{" "}
              <span className="text-gradient-red">bônus estratégicos</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, name: "Mathyas", title: "Networking Estratégico", desc: "Acesso a conexões, oportunidades e visão de mercado para ampliar possibilidades de crescimento." },
              { icon: Brain, name: "Paulo Henrique", title: "Inteligência Emocional", desc: "Direcionamento para liderança, tomada de decisão e gestão emocional em fases de crescimento." },
              { icon: Crown, name: "Paulo Filho", title: "Hotseat de Delegação", desc: "Encontro sobre como sair do operacional, delegar melhor e construir uma rotina mais estratégica." },
              { icon: Wallet, name: "Lemuel", title: "Redução de Custos", desc: "Análise prática para identificar desperdícios, reduzir custos e melhorar eficiência operacional." },
            ].map(({ icon: Icon, name, title, desc }) => (
              <div key={name} className="card-premium rounded-2xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-band shadow-red">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {name}
                </div>
                <h3 className="mt-1 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="relative overflow-hidden border-t border-border/30 py-24">
        <div className="absolute inset-0 bg-red-band" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,oklch(0_0_0/0.6))]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            Investimento
          </div>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            Programa completo por
          </h2>
          <div className="mt-8">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Investimento único
            </div>
            <div className="mt-2 text-[5rem] font-black leading-none text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:text-[7rem]">
              R$ 30.000
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 md:text-lg">
            Uma estrutura empresarial para quem quer crescer com mais previsibilidade, controle e
            lucro.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground shadow-2xl transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:text-base"
            >
              Quero aplicar para o programa <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-white/80">
              Vagas limitadas para garantir acompanhamento estratégico próximo.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-border/30 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Tire suas <span className="text-gradient-red">dúvidas</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {[
              {
                q: "Para quem é esse programa?",
                a: "Para empresários que já possuem uma operação em andamento e desejam organizar comercial, marketing, dados, finanças e processos para crescer com mais previsibilidade.",
              },
              {
                q: "É apenas uma consultoria de marketing?",
                a: "Não. O programa envolve marketing, comercial, dados, finanças e operação. A proposta é estruturar o crescimento da empresa de forma mais completa.",
              },
              {
                q: "A FA também executa as melhorias?",
                a: "Sim, parte da estruturação digital e acompanhamento estratégico é conduzida junto ao time da FA, conforme o escopo definido no diagnóstico.",
              },
              {
                q: "Preciso ter equipe interna?",
                a: "Não obrigatoriamente, mas empresas com equipe ou responsáveis por áreas conseguem aproveitar melhor o processo.",
              },
              {
                q: "Como funciona o acompanhamento?",
                a: "Existe acompanhamento semanal por OKRs, análise de indicadores e definição de prioridades práticas para evolução do projeto.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-premium overflow-hidden rounded-xl border-0 px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-t border-border/30 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.22_27/0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl">
            Se a sua empresa cresceu, mas a operação ainda{" "}
            <span className="text-gradient-red">depende demais de você</span>, está na hora de
            estruturar.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            A FA pode ajudar a transformar esforço em processo, demanda em venda e crescimento em
            previsibilidade.
          </p>
          <div className="mt-10">
            <CTAButton className="px-9 py-5 text-base">Quero conversar com a FA</CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-band text-xs font-black text-primary-foreground">
              FA
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Growth Partner
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FA. Programa premium de aceleração empresarial.
          </p>
        </div>
      </footer>
    </main>
  );
}

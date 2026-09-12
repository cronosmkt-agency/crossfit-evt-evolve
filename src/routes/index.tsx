import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Flame,
  Dumbbell,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Award,
  Send,
  Zap,
  Users,
  Activity,
  Calendar,
  Check,
  Sparkles,
  Trophy,
  Target,
  Heart
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: CrossfitEvolveLandingPage,
});

export default function CrossfitEvolveLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"todos" | "fundamentos" | "wod" | "forca">("todos");

  // Form State - Agendamento de Aula Experimental
  const [studentName, setStudentName] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("Iniciante (Nunca fiz CrossFit)");
  const [preferredShift, setPreferredShift] = useState("Manhã (06h às 09h)");
  const [primaryGoal, setPrimaryGoal] = useState("Emagrecimento & Condicionamento");
  const [notes, setNotes] = useState("");

  const phone = "5521973685151";
  const phoneDisplay = "(21) 97368-5151";
  const address = "R. Chaves Faria, 182 - Várzea, Teresópolis - RJ, 25955-090";
  const hours = "Segunda a Sexta das 06:00 às 20:30 (Turmas de Manhã, Almoço, Tarde e Noite)";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site da CrossFit EVT Evolve e gostaria de agendar uma Aula Experimental Gratuita."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Equipe Evolve! Vim pelo site oficial da CROSSFIT EVT - EVOLVE.

*Nome:* ${studentName || "Não informado"}
*Nível de Experiência:* ${fitnessLevel}
*Turno Preferido:* ${preferredShift}
*Objetivo Principal:* ${primaryGoal}
${notes ? `*Observações:* ${notes}` : ""}

Gostaria de agendar a minha Aula Experimental Gratuita!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const programs = [
    {
      id: "wod-diario",
      category: "wod",
      title: "WOD (Workout of the Day)",
      subtitle: "O treino dinâmico do dia",
      desc: "Treino funcional de alta intensidade que muda todos os dias para você nunca cair na monotonia. Combina cardio, exercícios de peso corporal e levantamento com adaptação (scaling) de cargas para o ritmo de cada pessoa.",
      features: ["Nunca repete a mesma rotina", "Resultados acelerados de queima e força", "Acompanhamento cerrado do coach", "Turmas com energia contagiante"],
      badge: "Treino Principal",
      highlight: true
    },
    {
      id: "fundamentos-iniciantes",
      category: "fundamentos",
      title: "Fundamentos para Iniciantes",
      subtitle: "Segurança total desde o primeiro dia",
      desc: "Se você nunca treinou CrossFit ou está sedentário há anos, este módulo ensina a mecânica dos movimentos básicos (agachamento, levantamento terra, press) com cano de PVC e barras leves antes de qualquer peso.",
      features: ["Zero julgamento ou cobrança excessiva", "Foco cirúrgico na técnica e postura", "Prevenção ativa de lesões", "Adaptação gradual do fôlego"],
      badge: "Para Todos",
      highlight: true
    },
    {
      id: "lpo-olimpico",
      category: "forca",
      title: "Levantamento de Peso Olímpico (LPO)",
      subtitle: "Potência, precisão e técnica",
      desc: "Aprimoramento dos clássicos Snatch (arranco) e Clean & Jerk (arremesso) com barras e anilhas oficiais. Desenvolve força pura, mobilidade articular de ombros e quadril e coordenação motora refinada.",
      features: ["Barras e anilhas calibradas", "Piso de alta absorção de impacto", "Evolução métrica de carga", "Desenvolvimento de potência explosiva"],
      badge: "Força Pura",
      highlight: false
    },
    {
      id: "gymnastics-core",
      category: "fundamentos",
      title: "Ginástica & Controle Corporal",
      subtitle: "Domínio do próprio corpo no espaço",
      desc: "Aprenda a controlar seu peso corporal na barra fixa (pull-ups, muscle-ups), argolas olímpicas, subida de corda (rope climb) e paradas de mão (handstand), construindo um core blindado e ombros fortes.",
      features: ["Progressões pedagógicas seguras", "Argolas olímpicas e cordas náuticas", "Abdômen e lombar fortalecidos", "Agilidade e flexibilidade real"],
      badge: "Mobilidade & Core",
      highlight: false
    },
    {
      id: "cardio-resistencia",
      category: "wod",
      title: "Condicionamento Metabólico (MetCon)",
      subtitle: "Resistência cardiovascular extrema",
      desc: "Circuitos com remos ergométricos Concept2, air bikes, saltos de caixa e kettlebells projetados para elevar a capacidade pulmonar, queimar até 800 calorias por sessão e acelerar o metabolismo pós-treino.",
      features: ["Remos e air bikes de padrão mundial", "Super queima calórica diária", "Mais disposição para o dia a dia", "Saúde cardiovascular comprovada"],
      badge: "Queima Intensa",
      highlight: false
    },
    {
      id: "comunidade-familia",
      category: "forca",
      title: "Comunidade & Família Evolve",
      subtitle: "Onde ninguém treina sozinho",
      desc: "Mais do que um box de treino, a Evolve é uma família. Aqui o último a terminar o WOD recebe mais aplausos do que o primeiro. Eventos internos, comemorações e laços de amizade que fazem você amar a rotina de treinar.",
      features: ["Ambiente 100% acolhedor e familiar", "Incentivo mútuo em cada segundo", "Amizades que vão além do treino", "Taxa recorde de retenção de alunos"],
      badge: "Diferencial Humano",
      highlight: false
    }
  ];

  const filteredPrograms = activeTab === "todos"
    ? programs
    : programs.filter(p => p.category === activeTab);

  const testimonials = [
    {
      name: "Carolina Andrade",
      time: "Aluna há 3 anos na Evolve",
      quote: "Neste lugar me encontrei e consegui desenvolver o amor pela atividade física. Professores extremamente capacitados e uma comunidade de alunos incrível. Recomendo e não abro mão de treinar na Evolve há 3 anos!",
      rating: 5
    },
    {
      name: "Carol Ramos",
      time: "Aluna da Família Evolve",
      quote: "Melhor box de crossfit! Professores capacitados, equipamentos de qualidade, ambiente sempre limpo. Lugar onde todos se sentem parte da família Evolve!",
      rating: 5
    },
    {
      name: "Nana Pedrosa",
      time: "Aluna & Família Evolve",
      quote: "Um box que leva o Crossfit a sério. Comprometimento total com a saúde e evolução dos alunos, com professores capacitados e onde a família é bem-vinda, presente comunidade do Crossfit viva!",
      rating: 5
    }
  ];

  const scheduleShifts = [
    {
      period: "Turno da Manhã",
      icon: Clock,
      hours: ["06:00 às 07:00", "07:00 às 08:00", "08:00 às 09:00", "09:00 às 10:00"],
      desc: "Comece o dia com o metabolismo acelerado e energia máxima para o trabalho."
    },
    {
      period: "Horário de Almoço",
      icon: Zap,
      hours: ["12:00 às 13:00"],
      desc: "Otimize o seu intervalo de trabalho com um treino completo e eficiente de 60 minutos."
    },
    {
      period: "Turno da Tarde & Noite",
      icon: Flame,
      hours: ["17:00 às 18:00", "18:00 às 19:00", "19:00 às 20:00", "20:00 às 20:30"],
      desc: "Descarregue o estresse do dia com a comunidade mais vibrante da serra."
    }
  ];

  const faqList = [
    {
      q: "Preciso estar em forma antes de começar a treinar CrossFit?",
      a: "Não! Esse é o maior mito sobre o CrossFit. Você não entra em forma para começar o CrossFit; o CrossFit é o que vai colocar você em forma! Todos os movimentos e cargas são adaptados (scaling) para o seu nível atual, mesmo que você nunca tenha praticado nenhuma atividade física na vida."
    },
    {
      q: "Como funciona a Aula Experimental Gratuita?",
      a: "A aula experimental é 100% gratuita e sem compromisso. Você agenda um horário pelo nosso WhatsApp, vem ao box com roupa confortável de treino e um de nossos coaches certificados irá acompanhá-lo individualmente, explicando cada movimento com calma e garantindo que você treine com total conforto e segurança."
    },
    {
      q: "O que devo levar e vestir no meu primeiro treino?",
      a: "Venha com roupa esportiva leve (shorts/legging e camiseta respirável), tênis com solado estável e uma garrafinha de água. Toda a estrutura de pesos, barras, magnésio e vestiários limpos fica por nossa conta."
    },
    {
      q: "Quem nunca treinou corre risco de se machucar?",
      a: "Aqui na Evolve a segurança vem antes de qualquer carga. Nossos coaches possuem formação e certificações oficiais, e nossa regra número um é: mecânica correta primeiro, consistência do movimento depois e somente por último a intensidade. Você nunca será forçado a levantar pesos que não domina."
    },
    {
      q: "Onde fica localizado o box da CrossFit EVT Evolve?",
      a: "Estamos localizados na Rua Chaves Faria, 182, na Várzea, Teresópolis - RJ. Uma localização central, com acesso rápido para quem mora ou trabalha no polo da Várzea."
    },
    {
      q: "Como funcionam os planos e mensalidades?",
      a: "Temos planos mensais, trimestrais e semestrais flexíveis com livre acesso às turmas da sua grade. Ao fazer a aula experimental gratuita, você conhece o box e a recepção apresenta as condições especiais de matrícula."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 selection:bg-[#F97316]/30 selection:text-white pb-24 lg:pb-0">
      
      {/* 1. TOP BAR INSTITUCIONAL */}
      <div className="border-b border-white/5 bg-[#121217] px-4 py-2 text-xs text-zinc-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="font-medium text-zinc-300">
              Box Oficial de CrossFit na Várzea · Comunidade & Treinadores Certificados
            </span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="h-3.5 w-3.5 text-[#F97316]" />
              Seg a Sex: 06h às 20h30 (Turmas contínuas)
            </span>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 font-bold text-[#F97316] hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVBAR - SEM ÍCONE (APENAS O NOME DO CLIENTE) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0C]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          
          {/* Brand Name ONLY - NO ICON AS REQUESTED */}
          <a href="#" className="flex flex-col">
            <span className="font-['Outfit',sans-serif] text-xl font-black tracking-tight text-white sm:text-2xl">
              CROSSFIT EVT <span className="text-[#F97316]">EVOLVE</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase sm:text-xs">
              Box Oficial de CrossFit · Várzea, Teresópolis
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#iniciantes" className="text-sm font-medium text-zinc-300 transition hover:text-[#F97316]">
              Para Iniciantes
            </a>
            <a href="#modalidades" className="text-sm font-medium text-zinc-300 transition hover:text-[#F97316]">
              Modalidades & WOD
            </a>
            <a href="#horarios" className="text-sm font-medium text-zinc-300 transition hover:text-[#F97316]">
              Grade de Horários
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-zinc-300 transition hover:text-[#F97316]">
              Família Evolve (5.0)
            </a>
            <a href="#sobre" className="text-sm font-medium text-zinc-300 transition hover:text-[#F97316]">
              O Box
            </a>
            <a href="#faq" className="text-sm font-medium text-zinc-300 transition hover:text-[#F97316]">
              Dúvidas
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-[#F97316]/25 transition-all hover:brightness-110 active:scale-95 uppercase tracking-wider"
            >
              <Flame className="h-4 w-4 text-white" />
              Aula Experimental Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden hover:bg-white/5 transition"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#121217] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#iniciantes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#F97316]"
              >
                Para Iniciantes (Sem Medo)
              </a>
              <a
                href="#modalidades"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#F97316]"
              >
                Programas & WODs
              </a>
              <a
                href="#horarios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#F97316]"
              >
                Grade de Horários (06h - 20h30)
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#F97316]"
              >
                Depoimentos da Família Evolve
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#F97316]"
              >
                Localização na Várzea
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#F97316]"
              >
                Perguntas Frequentes
              </a>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] py-3 text-sm font-black text-white uppercase tracking-wider"
              >
                <Flame className="h-4 w-4" />
                Agendar Aula Grátis no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-14 md:py-24">
        {/* Glow de fundo esportivo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#F97316]/10 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badge de Prova Social */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#F97316]/30 bg-[#1C140F] px-4 py-1.5 text-xs font-semibold text-[#FDBA74]">
                <div className="flex items-center gap-1 text-[#F97316]">
                  <Star className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
                  <Star className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
                  <Star className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
                  <Star className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
                  <Star className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
                </div>
                <span>5,0 no Google Maps · 100% Avaliações 5 Estrelas Unânimes</span>
              </div>

              <h1 className="mt-6 font-['Outfit',sans-serif] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Supere seus limites no melhor box de CrossFit com{" "}
                <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] bg-clip-text text-transparent">
                  acolhimento para todos os níveis.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
                Esqueça a monotonia da musculação tradicional. Na <strong className="text-white">CROSSFIT EVT - EVOLVE</strong> você encontra coaches certificados, equipamentos de ponta, adaptação individual para iniciantes e uma comunidade que vibra junto com cada conquista sua.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#agendamento"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] px-7 py-4 text-base font-black text-white shadow-xl shadow-[#F97316]/25 transition-all hover:brightness-110 active:scale-95 uppercase tracking-wider"
                >
                  <Flame className="h-5 w-5 text-white" />
                  Agendar Aula Experimental Grátis
                </a>
                <a
                  href="#horarios"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  Ver Grade de Horários
                  <ArrowRight className="h-4 w-4 text-zinc-400" />
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-left">
                <div className="rounded-xl border border-white/5 bg-[#14141A]/60 p-3">
                  <span className="font-['Outfit',sans-serif] text-xl font-black text-[#F97316] sm:text-2xl block">
                    06h-20h30
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-400 block mt-0.5">
                    Grade Flexível o Dia Todo
                  </span>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#14141A]/60 p-3">
                  <span className="font-['Outfit',sans-serif] text-xl font-black text-white sm:text-2xl block">
                    100%
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-400 block mt-0.5">
                    Adaptação p/ Iniciantes
                  </span>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#14141A]/60 p-3">
                  <span className="font-['Outfit',sans-serif] text-xl font-black text-[#F97316] sm:text-2xl block">
                    Várzea
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-400 block mt-0.5">
                    Rua Chaves Faria, 182
                  </span>
                </div>
              </div>

            </div>

            {/* Right Card - O Espírito Evolve */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-[#121217] p-7 shadow-2xl backdrop-blur-md">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                      Metodologia Evolve
                    </span>
                    <h3 className="text-lg font-black text-white mt-0.5">
                      Por que você vai amar treinar aqui?
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#F97316]/15 border border-[#F97316]/30 px-3 py-1 text-[11px] font-bold text-[#F97316]">
                    Comunidade Viva
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Treinadores Certificados no Comando</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        Técnica e postura corrigidas em cada repetição para você evoluir com total segurança articular.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Cargas 100% Adaptadas ao Seu Nível</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        Seja você um atleta ou alguém que nunca fez uma flexão, o treino é ajustado milimetricamente para você.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Box Impecável, Limpo e Moderno</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        Barras olímpicas, anilhas, cordas, remos Concept2 e piso de alta absorção sempre higienizados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <HeartHandshake className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">A Família que Celebra sua Vitória</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        Aqui ninguém fica isolado no fone de ouvido. Criamos amizades que duram anos dentro e fora do box.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#181822] p-4 text-center">
                  <p className="text-xs text-zinc-300">
                    Sua primeira aula é um presente nosso para você conhecer:
                  </p>
                  <a
                    href="#agendamento"
                    className="mt-2.5 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 py-2.5 text-xs font-bold text-white transition"
                  >
                    <Calendar className="h-4 w-4 text-[#F97316]" />
                    Escolher meu horário de treino
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEÇÃO ESPECIAL: NUNCA FEZ CROSSFIT? ESTE BOX É PARA VOCÊ! */}
      <section id="iniciantes" className="border-y border-white/10 bg-gradient-to-b from-[#111116] to-[#0A0A0C] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F97316]/30 bg-[#1C140F] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#FDBA74]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#F97316]" />
              Sem Julgamentos · Com Respeito ao Seu Ritmo
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-black text-white sm:text-4xl">
              "Nunca fiz CrossFit na vida. Eu consigo acompanhar?"
            </h2>
            <p className="mt-3 text-base text-zinc-300">
              SIM! 100% dos nossos alunos mais apaixonados começaram do zero absoluto. Entenda como funciona a metodologia de segurança da Evolve:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#14141A] p-7 relative group hover:border-[#F97316]/40 transition">
              <span className="font-['Outfit',sans-serif] text-4xl font-black text-white/10 group-hover:text-[#F97316]/20 transition absolute top-5 right-5">
                01
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316]">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Mecânica Antes da Carga</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Você aprende o movimento com cano de PVC leve até dominar a postura correta. Carga é consequência, nunca prioridade inicial.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14141A] p-7 relative group hover:border-[#F97316]/40 transition">
              <span className="font-['Outfit',sans-serif] text-4xl font-black text-white/10 group-hover:text-[#F97316]/20 transition absolute top-5 right-5">
                02
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316]">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Scaling: Tudo é Adaptável</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Se o treino pede flexão na barra e você ainda não sobe, usamos elásticos (bands) de apoio ou remadas baixas. Você faz o seu máximo com conforto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14141A] p-7 relative group hover:border-[#F97316]/40 transition">
              <span className="font-['Outfit',sans-serif] text-4xl font-black text-white/10 group-hover:text-[#F97316]/20 transition absolute top-5 right-5">
                03
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Acolhimento da Turma</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Aqui ninguém repara na roupa de marca nem no peso da sua barra. Todo mundo treina junto, apoia e comemora cada repetição finalizada.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] px-8 py-4 text-base font-black text-white shadow-xl shadow-[#F97316]/25 transition-all hover:brightness-110 active:scale-95 uppercase tracking-wider"
            >
              <Calendar className="h-5 w-5 text-white" />
              Quero Experimentar Minha Primeira Aula Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* 5. MODALIDADES & PROGRAMAS (COM FILTROS/ABAS) */}
      <section id="modalidades" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Treinamento Completo
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-black text-white sm:text-4xl">
              Nossos Programas & Modalidades
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Desenvolva força, queime gordura, melhore sua postura e aumente sua disposição diária.
            </p>
          </div>

          {/* Abas */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "todos", label: "Todas as Modalidades" },
              { id: "wod", label: "WODs & Condicionamento" },
              { id: "fundamentos", label: "Iniciantes & Ginástica" },
              { id: "forca", label: "LPO & Comunidade" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#F97316] text-white shadow-md shadow-[#F97316]/25"
                    : "border border-white/10 bg-[#14141A] text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de Programas */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((p) => (
              <div
                key={p.id}
                className={`flex flex-col justify-between rounded-3xl border p-7 transition-all hover:border-[#F97316]/50 ${
                  p.highlight
                    ? "border-[#F97316]/40 bg-gradient-to-b from-[#1A1822] to-[#121217] shadow-xl"
                    : "border-white/10 bg-[#121217]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#F97316]/15 border border-[#F97316]/30 px-3 py-1 text-xs font-bold text-[#F97316]">
                      {p.badge}
                    </span>
                    {p.highlight && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Destaque Box
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#F97316]">
                    {p.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {p.desc}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de saber mais sobre como funciona o programa: ${p.title} na CrossFit EVT Evolve.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/5 hover:bg-[#F97316] hover:text-white p-3 text-xs font-bold text-zinc-200 transition group"
                  >
                    <span>Saber mais sobre {p.title}</span>
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. GRADE DE HORÁRIOS COMPLETA (06h às 20h30) */}
      <section id="horarios" className="border-t border-white/10 bg-[#0D0D12] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Flexibilidade Para a Sua Rotina
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-black text-white sm:text-4xl">
              Grade de Horários dos WODs
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Turmas dinâmicas de 60 minutos de segunda a sexta-feira para você encaixar o treino sem desculpas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {scheduleShifts.map((shift, idx) => {
              const ShiftIcon = shift.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-[#14141A] p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/25">
                        <ShiftIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{shift.period}</h3>
                        <span className="text-xs text-[#F97316] font-semibold">Turmas diárias</span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                      {shift.desc}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      {shift.hours.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2.5 text-xs font-bold text-white"
                        >
                          <span>{h}</span>
                          <span className="text-[10px] uppercase font-semibold text-emerald-400">Vagas abertas</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    <a
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(
                        `Olá! Gostaria de verificar a disponibilidade de vaga no ${shift.period} na CrossFit EVT Evolve.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 hover:bg-[#F97316] hover:text-white py-2.5 text-xs font-bold text-[#F97316] transition"
                    >
                      Reservar Vaga no {shift.period}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-xs text-zinc-400">
            * Aulas com duração de 60 minutos conduzidas por coaches certificados. Limite de alunos por turma para garantir correção técnica constante.
          </div>
        </div>
      </section>

      {/* 7. MURAL DA FAMÍLIA EVOLVE (PROVA SOCIAL 5,0 UNÂNIME) */}
      <section id="avaliacoes" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-[#F97316]">
              <Star className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
              <Star className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
              <Star className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
              <Star className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
              <Star className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
            </div>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-black text-white sm:text-4xl">
              O Que Dizem os Nossos Alunos
            </h2>
            <p className="mt-2 text-sm text-[#F97316] font-bold">
              5,0 no Google Maps com 23 avaliações unânimes 5 estrelas
            </p>
            <p className="mt-1 text-xs text-zinc-400 italic">
              "Ambiente acolhedor e aulas que realmente evoluem o aluno. Equipamentos novos e box super organizada."
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121217] p-8 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#F97316]">
                      {[...Array(t.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                      Aluno Oficial
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-zinc-300 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="block text-sm font-bold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-[#F97316] font-semibold mt-0.5">
                    {t.time}
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    Avaliação Verificada no Google Maps
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Comunidade Evolve */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1C140F] to-[#121217] p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h4 className="text-base font-bold text-white sm:text-lg">
                Quer conhecer o box pessoalmente antes de tomar sua decisão?
              </h4>
              <p className="mt-1 text-xs text-zinc-400">
                Venha fazer um treino sem pagar nada. Conheça a turma, sinta a energia e descubra o seu novo esporte favorito.
              </p>
            </div>
            <a
              href="#agendamento"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-5 py-3 text-xs font-black text-white uppercase tracking-wider transition hover:brightness-110 shrink-0"
            >
              <Flame className="h-4 w-4" />
              Agendar Minha Aula Gratuita
            </a>
          </div>

        </div>
      </section>

      {/* 8. SOBRE O BOX & LOCALIZAÇÃO NA VÁRZEA */}
      <section id="sobre" className="border-t border-white/10 bg-[#0D0D12] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                Infraestrutura Completa
              </span>
              <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-black text-white sm:text-4xl">
                O Box Oficial na Rua Chaves Faria, 182
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                A <strong className="text-white">CROSSFIT EVT - EVOLVE</strong> conta com um espaço amplo, arejado, com pé direito alto e piso emborrachado de absorção acústica e de impacto.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Equipamentos novos de ponta: barras olímpicas masculinas e femininas com rolamentos de precisão, anilhas calibradas, remos Concept2, air bikes, argolas, cordas de subida, kettlebells e vestiários completos e limpíssimos.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/10 text-[#F97316]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Endereço do Box</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{address}</p>
                    <p className="text-[11px] font-semibold text-[#F97316] mt-0.5">Acesso fácil e rápido no coração da Várzea</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/10 text-[#F97316]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Horário de Funcionamento</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/10 text-[#F97316]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">WhatsApp Recepção & Matrículas</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "CROSSFIT EVT EVOLVE Rua Chaves Faria 182 Várzea Teresópolis RJ"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <MapPin className="h-4 w-4 text-[#F97316]" />
                  Traçar Rota no Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#14141A] shadow-2xl">
                <div className="border-b border-white/10 bg-[#181822] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Box Evolve · Várzea, Teresópolis
                  </span>
                </div>
                <div className="h-[340px] w-full bg-zinc-900">
                  <iframe
                    title="Mapa CROSSFIT EVT - EVOLVE"
                    src="https://maps.google.com/maps?q=Rua+Chaves+Faria,+182+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0 grayscale contrast-125 opacity-85 hover:opacity-100 transition duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FORMULÁRIO INTERATIVO: AGENDAMENTO DA AULA EXPERIMENTAL */}
      <section id="agendamento" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-[#121217] p-7 sm:p-10 shadow-2xl">
            
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F97316]/30 bg-[#1C140F] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#FDBA74]">
                <Flame className="h-3.5 w-3.5 text-[#F97316]" />
                100% Grátis · Sem Pegadinha
              </span>
              <h2 className="mt-3 font-['Outfit',sans-serif] text-2xl font-black text-white sm:text-3xl">
                Agende Sua Aula Experimental no WhatsApp
              </h2>
              <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
                Preencha seus dados em 30 segundos e envie para nossa equipe reservar a sua vaga no WOD:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Gabriel Santos"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181822] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Experiência com Atividade Física:
                  </label>
                  <select
                    value={fitnessLevel}
                    onChange={(e) => setFitnessLevel(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181822] px-4 py-3 text-sm text-white outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition"
                  >
                    <option value="Iniciante (Nunca fiz CrossFit)">Iniciante (Nunca fiz CrossFit)</option>
                    <option value="Pratico Musculação Tradicional">Pratico Musculação Tradicional</option>
                    <option value="Sedentário querendo voltar">Sedentário querendo voltar</option>
                    <option value="Já treinei CrossFit em outro box">Já treinei CrossFit em outro box</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Turno de Preferência:
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181822] px-4 py-3 text-sm text-white outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition"
                  >
                    <option value="Manhã (06h às 09h)">Manhã (06h às 09h)</option>
                    <option value="Horário de Almoço (12h às 13h)">Horário de Almoço (12h às 13h)</option>
                    <option value="Tarde / Noite (17h às 20h30)">Tarde / Noite (17h às 20h30)</option>
                    <option value="Qualquer horário disponível">Qualquer horário disponível</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Objetivo Principal:
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181822] px-4 py-3 text-sm text-white outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition"
                  >
                    <option value="Emagrecimento & Queima Calórica">Emagrecimento & Queima Calórica</option>
                    <option value="Ganho de Força & Massa Magra">Ganho de Força & Massa Magra</option>
                    <option value="Saúde, Disposição e Menos Estresse">Saúde, Disposição e Menos Estresse</option>
                    <option value="Superação e Performance de Atleta">Superação e Performance de Atleta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Tem alguma lesão antiga ou dúvida? (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Tenho dor no joelho ou estou há 2 anos parado..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#181822] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] py-4 text-sm font-black text-white shadow-xl shadow-[#F97316]/25 transition-all hover:brightness-110 active:scale-98 uppercase tracking-wider"
              >
                <Send className="h-4 w-4 text-white" />
                Agendar Minha Aula no WhatsApp
              </button>

              <p className="text-center text-[11px] text-zinc-500">
                Atendimento direto com a equipe de recepção da Evolve no WhatsApp: {phoneDisplay}
              </p>
            </form>

          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section id="faq" className="border-t border-white/10 bg-[#0D0D12] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Tire Todas as Suas Dúvidas
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-black text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Tudo o que você precisa saber antes de pisar no box pela primeira vez.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#14141A] transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-['Outfit',sans-serif] text-base font-bold text-white hover:text-[#F97316] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#F97316] shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-zinc-300 border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FOOTER - SEM ÍCONE */}
      <footer className="border-t border-white/10 bg-[#070709] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Coluna 1: Nome Sem Ícone */}
            <div>
              <span className="font-['Outfit',sans-serif] text-xl font-black text-white block">
                CROSSFIT EVT <span className="text-[#F97316]">EVOLVE</span>
              </span>
              <span className="text-xs font-semibold text-zinc-400 block mt-0.5 uppercase tracking-wider">
                Box Oficial de CrossFit · Várzea
              </span>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Box oficial com equipamentos novos, treinadores certificados e a comunidade mais acolhedora de Teresópolis. Treinos adaptados para todos os níveis de condicionamento.
              </p>
            </div>

            {/* Coluna 2: Endereço */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
                Onde Estamos
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                {address}
              </p>
              <p className="mt-1 text-xs text-[#F97316] font-medium">
                Ponto central no coração da Várzea
              </p>
            </div>

            {/* Coluna 3: Horários */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
                Horários de Treino
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                Segunda a Sexta: 06:00 às 20:30
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Turmas pela manhã, almoço, tarde e noite
              </p>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
                Recepção & Matrículas
              </h4>
              <p className="mt-3 text-xs text-zinc-400">Telefone / WhatsApp:</p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-[#F97316] hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">
                Agendamento rápido de aula experimental
              </p>
            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
            <span>
              © {new Date().getFullYear()} CROSSFIT EVT - EVOLVE · Todos os direitos reservados.
            </span>
            <span>
              Desenvolvido com excelência por Cronos Agency
            </span>
          </div>
        </div>
      </footer>

      {/* 12. BARRA FIXA FLUTUANTE INFERIOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A0A0C]/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-2xl">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-[#F97316] bg-[#14141A]"
            aria-label="Ligar para o Box"
          >
            <Phone className="h-5 w-5 text-[#F97316]" />
          </a>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] py-3 text-sm font-black text-white shadow-lg shadow-[#F97316]/25 active:scale-98 uppercase tracking-wider"
          >
            <Flame className="h-4 w-4 text-white" />
            Agendar Aula Gratuita
          </a>
        </div>
      </div>


      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20CrossFit%20EVT%20Evolve%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}

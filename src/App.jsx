import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'capa', num: '01', label: 'Capa' },
  { id: 'quem-sou', num: '02', label: 'Quem Sou' },
  { id: 'ipss', num: '03', label: 'IPSS Gestão' },
  { id: 'ux-ui', num: '04', label: 'UX/UI' },
  { id: 'web-ia', num: '05', label: 'Web & IA' },
  { id: 'storytelling', num: '06', label: 'Storytelling' },
  { id: 'gastronomia', num: '07', label: 'Gastronomia' },
  { id: 'experiencia', num: '08', label: 'Experiência' },
  { id: 'acessibilidade', num: '09', label: 'Acessibilidade' },
  { id: 'agua-2047', num: '10', label: 'Água 2047' },
  { id: 'manifesto', num: '11', label: 'Manifesto' },
]

const GITHUB_URL = 'https://github.com/Ger0nim0dx'
const IPSS_URL = 'https://ipss-refeicoes.vercel.app/'

function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function Animated({ children, visible, className = '', delay = 0 }) {
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SideNav({ activeSection }) {
  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex lg:right-8"
      aria-label="Navegação por secções"
    >
      {SECTIONS.map(({ id, num, label }) => {
        const isActive = activeSection === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex items-center justify-end gap-3 transition-all duration-300 ${
              isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
            }`}
            aria-label={`Secção ${num}: ${label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`max-w-0 overflow-hidden whitespace-nowrap text-xs uppercase tracking-widest text-gelo transition-all duration-300 group-hover:max-w-[120px] ${
                isActive ? 'text-dourado' : ''
              }`}
            >
              {label}
            </span>
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full border font-display text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-dourado bg-dourado text-grafite shadow-lg shadow-dourado/30'
                  : 'border-white/20 bg-grafite/80 text-gelo backdrop-blur-sm group-hover:border-dourado/50'
              }`}
            >
              {parseInt(num, 10)}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

function TopBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-grafite/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-gelo/70">
          Portfólio MTM
        </span>
        <div className="flex items-center gap-3">
          <a href="/cv" className="btn-outline hidden px-4 py-2 text-xs sm:inline-flex">
            CV
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden px-4 py-2 text-xs sm:inline-flex"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={IPSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 text-xs"
          >
            <ExternalIcon />
            IPSS App
          </a>
        </div>
      </div>
    </header>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function SkillCard({ title, items, visible, delay }) {
  return (
    <Animated visible={visible} delay={delay}>
      <div className="card-premium h-full">
        <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-dourado">
          {title}
        </h4>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gelo/80">
              <span className="h-1 w-1 rounded-full bg-dourado" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Animated>
  )
}

function ImageFallback({ alt }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-petroleo to-grafite p-8">
      <span className="font-display text-xs uppercase tracking-[0.3em] text-dourado/60">Imagem</span>
      <p className="mt-2 text-center text-sm text-gelo/50">{alt}</p>
    </div>
  )
}

function ImageBlock({ src, alt, className = '', visible, delay = 0, aspect = 'aspect-cinema' }) {
  const [error, setError] = useState(false)

  return (
    <Animated visible={visible} delay={delay} className={className}>
      <div className={`image-frame group relative w-full overflow-hidden ${aspect}`}>
        {error ? (
          <ImageFallback alt={alt} />
        ) : (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={() => setError(true)}
          />
        )}
        <div className="gradient-overlay opacity-60" />
      </div>
    </Animated>
  )
}

function SectionCapa({ visible }) {
  return (
    <section id="capa" className="section-slide bg-grafite">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#184A5C_0%,_transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#BF914D20_0%,_transparent_40%)]" />
      <div className="section-inner relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <Animated visible={visible} delay={0}>
          <span className="label-tag mb-8">Candidatura Mestrado — Tecnologia Multimédia</span>
        </Animated>
        <Animated visible={visible} delay={150}>
          <h1 className="heading-display mb-6 text-6xl font-extrabold uppercase tracking-[0.15em] text-gelo md:text-8xl lg:text-9xl">
            Portfólio
          </h1>
        </Animated>
        <Animated visible={visible} delay={300}>
          <div className="mx-auto mb-8 h-px w-24 bg-dourado" />
        </Animated>
        <Animated visible={visible} delay={450}>
          <p className="heading-display mb-4 max-w-4xl text-xl font-medium text-gelo md:text-2xl lg:text-3xl">
            Frederico Marinheira Dias Sampaio Pinto
          </p>
        </Animated>
        <Animated visible={visible} delay={600}>
          <p className="text-gradient text-lg font-light tracking-wide md:text-xl">
            Da Informação à Experiência Digital
          </p>
        </Animated>
        <Animated visible={visible} delay={750}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalIcon />
              Ver IPSS Gestão
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </Animated>
        <Animated visible={visible} delay={900}>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="h-6 w-6 text-dourado/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Animated>
      </div>
    </section>
  )
}

function SectionQuemSou({ visible }) {
  return (
    <section id="quem-sou" className="section-slide bg-petroleo">
      <div className="absolute inset-0 bg-[url('/assets/cozinha.png')] bg-cover bg-center opacity-10" />
      <div className="section-inner relative z-10 grid min-h-screen items-center gap-12 lg:grid-cols-2">
        <div>
          <Animated visible={visible} delay={0}>
            <span className="label-tag mb-6">02 — Quem Sou</span>
          </Animated>
          <Animated visible={visible} delay={100}>
            <h2 className="heading-display mb-8 text-4xl font-bold text-gelo md:text-5xl lg:text-6xl">
              Um percurso<br />
              <span className="text-dourado">multidisciplinar</span>
            </h2>
          </Animated>
          <Animated visible={visible} delay={200}>
            <p className="mb-6 text-lg leading-relaxed text-gelo/85">
              Profissional com formação em gestão da informação e experiência em formação de adultos,
              gastronomia, storytelling digital, desenvolvimento web e inteligência artificial.
            </p>
          </Animated>
          <Animated visible={visible} delay={300}>
            <p className="text-base leading-relaxed text-gelo/70">
              Combino rigor analítico com sensibilidade criativa — da organização de dados à
              construção de experiências digitais que comunicam, informam e transformam.
            </p>
          </Animated>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <SkillCard
            title="Formação"
            items={['Gestão da Informação', 'Formação de Adultos', 'Multimédia']}
            visible={visible}
            delay={400}
          />
          <SkillCard
            title="Criativo"
            items={['Storytelling', 'Branding', 'Comunicação Visual']}
            visible={visible}
            delay={500}
          />
          <SkillCard
            title="Técnico"
            items={['React & Web Dev', 'IA aplicada', 'UX/UI Design']}
            visible={visible}
            delay={600}
          />
          <SkillCard
            title="Experiência"
            items={['Gastronomia', 'Gestão de equipas', 'Projetos digitais']}
            visible={visible}
            delay={700}
          />
        </div>
      </div>
    </section>
  )
}

function SectionIPSS({ visible }) {
  return (
    <section id="ipss" className="section-slide bg-grafite">
      <div className="section-inner relative z-10">
        <Animated visible={visible} delay={0}>
          <span className="label-tag mb-6">03 — Projeto em Destaque</span>
        </Animated>
        <Animated visible={visible} delay={100}>
          <h2 className="heading-display mb-4 text-4xl font-bold text-gelo md:text-5xl lg:text-6xl">
            IPSS <span className="text-dourado">Gestão</span>
          </h2>
        </Animated>
        <Animated visible={visible} delay={200}>
          <p className="mb-12 max-w-3xl text-lg text-gelo/75">
            Plataforma web completa para gestão de refeições em instituições de solidariedade social —
            do dashboard operacional aos relatórios analíticos, com foco em usabilidade e impacto social.
          </p>
        </Animated>
        <div className="grid gap-8 lg:grid-cols-5">
          <ImageBlock
            src="/assets/ipss-dashboard.png"
            alt="Dashboard IPSS Gestão"
            className="lg:col-span-3"
            visible={visible}
            delay={300}
          />
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            <Animated visible={visible} delay={400}>
              <div className="card-premium">
                <h4 className="mb-3 font-display font-semibold text-dourado">O Desafio</h4>
                <p className="text-sm leading-relaxed text-gelo/80">
                  Digitalizar processos manuais de gestão de refeições, reduzir erros operacionais
                  e dar visibilidade em tempo real às equipas de cozinha e administração.
                </p>
              </div>
            </Animated>
            <Animated visible={visible} delay={500}>
              <div className="card-premium">
                <h4 className="mb-3 font-display font-semibold text-dourado">A Solução</h4>
                <p className="text-sm leading-relaxed text-gelo/80">
                  App React com interface intuitiva, relatórios automatizados e arquitetura
                  pensada para escalar entre múltiplas IPSS.
                </p>
              </div>
            </Animated>
            <Animated visible={visible} delay={600}>
              <a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
                <ExternalIcon />
                Abrir Aplicação
              </a>
            </Animated>
          </div>
        </div>
        <div className="mt-8">
          <ImageBlock
            src="/assets/ipss-relatorios.png"
            alt="Relatórios IPSS Gestão"
            visible={visible}
            delay={700}
          />
        </div>
      </div>
    </section>
  )
}

function SectionUXUI({ visible }) {
  return (
    <section id="ux-ui" className="section-slide bg-gelo text-grafite">
      <div className="section-inner relative z-10 grid min-h-screen items-center gap-12 lg:grid-cols-2">
        <ImageBlock src="/assets/ipss-dashboard.png" alt="Interface UX/UI" visible={visible} delay={200} />
        <div>
          <Animated visible={visible} delay={0}>
            <span className="label-tag mb-6 border-petroleo/30 bg-petroleo/10 text-petroleo">
              04 — UX/UI e Interface
            </span>
          </Animated>
          <Animated visible={visible} delay={100}>
            <h2 className="heading-display mb-8 text-4xl font-bold text-grafite md:text-5xl">
              Design centrado<br />no utilizador
            </h2>
          </Animated>
          <Animated visible={visible} delay={200}>
            <p className="mb-8 text-lg leading-relaxed text-grafite/75">
              Interfaces claras, hierarquias visuais consistentes e fluxos de navegação
              pensados para reduzir carga cognitiva — especialmente em contextos operacionais
              onde cada segundo conta.
            </p>
          </Animated>
          <div className="grid grid-cols-2 gap-4">
            {['Wireframes', 'Prototipagem', 'Design Systems', 'Testes de Usabilidade'].map(
              (skill, i) => (
                <Animated key={skill} visible={visible} delay={300 + i * 80}>
                  <div className="rounded-xl border border-petroleo/15 bg-petroleo/5 px-4 py-3 text-center text-sm font-medium text-petroleo">
                    {skill}
                  </div>
                </Animated>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionWebIA({ visible }) {
  return (
    <section id="web-ia" className="section-slide bg-grafite">
      <div className="section-inner relative z-10">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2">
          <div>
            <Animated visible={visible} delay={0}>
              <span className="label-tag mb-6">05 — Desenvolvimento Web & IA</span>
            </Animated>
            <Animated visible={visible} delay={100}>
              <h2 className="heading-display mb-8 text-4xl font-bold text-gelo md:text-5xl">
                Código com<br /><span className="text-dourado">propósito</span>
              </h2>
            </Animated>
            <Animated visible={visible} delay={200}>
              <p className="mb-8 text-lg leading-relaxed text-gelo/75">
                Desenvolvimento frontend com React, integração de APIs e exploração de
                ferramentas de IA para automatizar tarefas repetitivas e ampliar capacidades criativas.
              </p>
            </Animated>
            <Animated visible={visible} delay={300}>
              <div className="mb-8 flex flex-wrap gap-3">
                {['React', 'Vite', 'Tailwind', 'JavaScript', 'IA Generativa', 'APIs REST'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-dourado/30 bg-dourado/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-dourado"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </Animated>
            <Animated visible={visible} delay={400}>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <GitHubIcon />
                Ver no GitHub
              </a>
            </Animated>
          </div>
          <ImageBlock src="/assets/github.png" alt="Projetos no GitHub" visible={visible} delay={300} />
        </div>
      </div>
    </section>
  )
}

function SectionStorytelling({ visible }) {
  return (
    <section id="storytelling" className="section-slide bg-petroleo">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#BF914D22_0%,_transparent_45%)]" />

      <div className="section-inner relative z-10 grid min-h-screen items-center gap-12 lg:grid-cols-2">
        <div>
          <Animated visible={visible} delay={0}>
            <span className="label-tag mb-6">06 — Storytelling Digital</span>
          </Animated>

          <Animated visible={visible} delay={100}>
            <h2 className="heading-display mb-6 text-4xl font-bold text-gelo md:text-5xl">
              Histórias do tempo em que a
              <br />
              <span className="text-dourado">Água era um Bem Público</span>
            </h2>
          </Animated>

          <Animated visible={visible} delay={200}>
            <p className="mb-6 text-lg leading-relaxed text-gelo/80">
              Projeto de escrita criativa em formato de blog, desenvolvido entre 2010 e 2014,
              com narrativa distópica e sátira social sobre escassez de recursos,
              sustentabilidade e justiça social.
            </p>
          </Animated>

          <Animated visible={visible} delay={300}>
            <div className="card-premium">
              <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-dourado">
                Competências Demonstradas
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm text-gelo/80">
                <span>Storytelling</span>
                <span>Worldbuilding</span>
                <span>Escrita Criativa</span>
                <span>Pensamento Crítico</span>
              </div>
            </div>
          </Animated>
        </div>

        <Animated visible={visible} delay={350}>
          <div className="rounded-3xl border border-dourado/30 bg-grafite/70 p-8 shadow-2xl">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-dourado">
              Excerto do Blog
            </p>

            <h3 className="mb-5 font-display text-3xl font-bold text-gelo">
              47 de Outembro de 2047
            </h3>

            <blockquote className="space-y-4 text-lg leading-relaxed text-gelo/85">
              <p>
                “Hoje seria tempo de Outono… recordo dos tempos da minha infância
                em que o ano era dividido em quatro estações.”
              </p>

              <p>
                “Os rios secaram, as praias são apenas indústrias de dessalinização.”
              </p>

              <p className="font-semibold text-dourado">
                “A Água era um Bem Público.”
              </p>
            </blockquote>
          </div>
        </Animated>
      </div>
    </section>
  )
}

function SectionGastronomia({ visible }) {
  const images = [
    { src: '/assets/burger.png', alt: 'Burger artesanal' },
    { src: '/assets/tempura.png', alt: 'Tempura' },
    { src: '/assets/fredfood.png', alt: 'Fred Food' },
  ]

  return (
    <section id="gastronomia" className="section-slide bg-grafite">
      <div className="section-inner relative z-10 flex min-h-screen flex-col justify-center">
        <Animated visible={visible} delay={0}>
          <span className="label-tag mb-6">07 — Gastronomia, Branding & Comunicação Visual</span>
        </Animated>
        <Animated visible={visible} delay={100}>
          <h2 className="heading-display mb-4 text-4xl font-bold text-gelo md:text-5xl lg:text-6xl">
            Sabores com <span className="text-dourado">identidade</span>
          </h2>
        </Animated>
        <Animated visible={visible} delay={200}>
          <p className="mb-12 max-w-3xl text-lg text-gelo/75">
            A cozinha como laboratório criativo — onde técnica, estética e branding se encontram
            para criar experiências gastronómicas com personalidade própria.
          </p>
        </Animated>
        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, i) => (
            <div key={img.src} className="relative">
              <ImageBlock
                src={img.src}
                alt={img.alt}
                visible={visible}
                delay={300 + i * 120}
                aspect="aspect-[4/5]"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-gelo">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionExperiencia({ visible }) {
  return (
    <section id="experiencia" className="section-slide bg-gelo text-grafite">
      <div className="section-inner relative z-10 grid min-h-screen items-center gap-12 lg:grid-cols-2">
        <div>
          <Animated visible={visible} delay={0}>
            <span className="label-tag mb-6 border-petroleo/30 bg-petroleo/10 text-petroleo">
              08 — Design de Experiência
            </span>
          </Animated>
          <Animated visible={visible} delay={100}>
            <h2 className="heading-display mb-8 text-4xl font-bold md:text-5xl">
              Do digital ao<br /><span className="text-petroleo">físico</span>
            </h2>
          </Animated>
          <Animated visible={visible} delay={200}>
            <p className="mb-8 text-lg leading-relaxed text-grafite/75">
              Experiências integradas que atravessam ecrãs, espaços e interações humanas.
              Cada ponto de contacto é uma oportunidade de criar significado.
            </p>
          </Animated>
          <div className="space-y-4">
            {[
              { title: 'Jornada do Utilizador', desc: 'Mapeamento de touchpoints e momentos críticos' },
              { title: 'Service Design', desc: 'Orquestração de serviços digitais e presenciais' },
              { title: 'Prototipagem Rápida', desc: 'Validação iterativa de conceitos e fluxos' },
            ].map((item, i) => (
              <Animated key={item.title} visible={visible} delay={300 + i * 100}>
                <div className="rounded-xl border border-petroleo/15 bg-white p-5 shadow-sm">
                  <h4 className="mb-1 font-display font-semibold text-petroleo">{item.title}</h4>
                  <p className="text-sm text-grafite/65">{item.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
        <ImageBlock src="/assets/cozinha.png" alt="Design de experiência na cozinha" visible={visible} delay={400} />
      </div>
    </section>
  )
}

function SectionAcessibilidade({ visible }) {
  return (
    <section id="acessibilidade" className="section-slide bg-petroleo">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#BF914D15_0%,_transparent_60%)]" />
      <div className="section-inner relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <Animated visible={visible} delay={0}>
          <span className="label-tag mb-8">09 — Tecnologia, Acessibilidade e Justiça Social</span>
        </Animated>
        <Animated visible={visible} delay={150}>
          <blockquote className="heading-display mx-auto max-w-4xl text-3xl font-medium leading-snug text-gelo md:text-4xl lg:text-5xl">
            &ldquo;A acessibilidade nasce de um sentimento de{' '}
            <span className="text-dourado">justiça</span>, onde o respeito é imperativo.&rdquo;
          </blockquote>
        </Animated>
        <Animated visible={visible} delay={350}>
          <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-gelo/75">
            Tecnologia inclusiva não é um extra — é um compromisso ético. Projetos como o IPSS Gestão
            nascem da convicção de que ferramentas digitais devem servir todas as pessoas,
            especialmente as mais vulneráveis.
          </p>
        </Animated>
        <Animated visible={visible} delay={500}>
          <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {['WCAG & Inclusão', 'Impacto Social', 'Design Universal'].map((item, i) => (
              <div key={item} className="card-premium text-center">
                <span className="font-display text-2xl font-bold text-dourado">0{i + 1}</span>
                <p className="mt-2 text-sm font-medium text-gelo/85">{item}</p>
              </div>
            ))}
          </div>
        </Animated>
      </div>
    </section>
  )
}


function StoryModal({ story, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-grafite/95 p-4 backdrop-blur-md md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#184A5C60_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#BF914D12_0%,_transparent_50%)]" />

      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-dourado/25 bg-grafite shadow-2xl shadow-black/60">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 bg-petroleo/40 px-6 py-5 md:px-8">
          <div>
            <p className="mb-1 font-display text-[10px] uppercase tracking-[0.3em] text-dourado">
              Arquivo 2047
            </p>
            <h2 id="story-modal-title" className="heading-display text-xl font-bold text-gelo md:text-2xl">
              {story.title}
            </h2>
            <p className="mt-1 text-sm text-dourado/80">{story.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gelo/70 transition-all hover:border-dourado hover:text-dourado"
            aria-label="Fechar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          <div className="prose-story space-y-5 text-base leading-[1.85] text-gelo/85 md:text-lg">
            {story.fullText.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-white/10 px-6 py-4 md:px-8">
          <button
            type="button"
            onClick={onClose}
            className="btn-outline w-full justify-center py-2.5 text-xs sm:w-auto"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

function SectionAgua2047({ visible }) {
  const [activeStory, setActiveStory] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const stories = [
    {
      title: '47 de Outubro de 2047',
      subtitle: 'Prólogo / Arquivo fundador',
      excerpt:
        '“Hoje seria tempo de Outono… recordo dos tempos da minha infância em que o ano era dividido em quatro estações.”',
      fullText: `Hoje seria tempo de Outono. Recordo dos tempos da minha infância em que o ano era dividido em quatro estações — primavera, verão, outono e inverno — e cada uma trazia consigo ritmos, cheiros e cores que marcavam a vida das pessoas.

Naquele tempo, a água corria livremente pelos rios, enchia as represas com generosidade e alimentava os campos sem pedir licença a ninguém. Era um bem público, partilhado por todos, como o ar que respirávamos. Ninguém imaginava que um dia seria necessário pagar para beber da nascente da aldeia.

Os rios secaram. As praias transformaram-se em indústrias de dessalinização. O Outono deixou de existir como estação — foi substituído por períodos de seca extrema e chuvas torrenciais imprevisíveis. A natureza perdeu o seu ritmo porque a ganância humana quebrou o contrato que durante milénios nos manteve vivos.

Este arquivo foi fundado para preservar a memória de um mundo que já não existe. Para que ninguém esqueça que a água era, um dia, um bem público — e que o respeito pelo comum é a última fronteira entre a civilização e o colapso.`,
    },
    {
      title: 'Os 3 Porcos Empreiteiros',
      subtitle: 'Privatização, poder e sobrevivência',
      excerpt:
        '“A CALB acabou por tomar conta de toda a água que corria no reino dos Porcos, taxando-a agora a preços intoleráveis.”',
      fullText: `Era uma vez três porcos irmãos que decidiram construir as suas casas no reino das Terras Baixas. O mais prudente ergueu a sua morada em pedra; o intermédio, em madeira; o mais jovem, por preguiça ou optimismo, fez a sua de palha.

Mas o verdadeiro lobo não era o das fábulas antigas. Era a CALB — Companhia de Abastecimento Líquido do Reino — que, ao abrigo de contratos públicos opacos, acabou por tomar conta de toda a água que corria no reino dos Porcos. Taxou-a a preços intoleráveis e instalou contadores em cada torneira, nascente e poço.

O porco da casa de palha, incapaz de pagar a fatura, viu a sua habitação secar-se por dentro — sem água para a argamassa, sem humidade para a vida. O da madeira negociou um plano de prestações que o endividou para sempre. Só o da pedra, que desde cedo percebera que a água era poder, construíra cisternas subterrâneas nos tempos em que ainda era gratuita.

A fábula reescrita não termina com o lobo devorado, mas com uma assembleia de acionistas a celebrar lucros recordes enquanto os porcos aprendem, tarde demais, que privatizar o essencial é a forma mais elegante de destruir um reino.`,
    },
    {
      title: 'A Capuchinho Azul',
      subtitle: 'Justiça, coragem e bens comuns',
      excerpt:
        '“À medida que a Capuchinho se aproximava da nascente, o verde que antes conhecera tornava-se cada vez mais cinzento.”',
      fullText: `Capuchinho vestia o azul da nascente — a cor da água pura antes de ser contaminada pelo cinzento da cimentação e do lucro. Ia visitar a avó, doente de sede, numa aldeia onde a torneira comunitária fora desligada por falta de pagamento.

No caminho através da floresta, encontrou trilhos vedados por grades privadas e placards que proibiam o acesso às fontes naturais. À medida que se aproximava da nascente, o verde que antes conhecera tornava-se cada vez mais cinzento — betão onde antes havia musgo, tubagens onde antes corria água cristalina.

Descobriu que a nascente fora vendida a uma empresa de engarrafamento. A água que durante gerações alimentara a aldeia era agora exportada em plástico para cidades ricas, enquanto os habitantes locais compravam garrafas da sua própria água a preços que não podiam pagar.

Capuchinho não recuou. Reuniu os vizinhos, documentou a ilegalidade da privatização e exigiu a devolução da nascente ao domínio público. A história reescrita não fala de lobos, mas de coragem cívica — de uma jovem que entendeu que defender a água comum é defender a vida de todos.`,
    },
    {
      title: 'Os 3 Reis Magros',
      subtitle: 'Seca, poder e absurdo político',
      excerpt:
        '“Espalhou-se por todos os reinos o boato de que havia nascido o menino que iria voltar a fazer chover.”',
      fullText: `Espalhou-se por todos os reinos o boato de que havia nascido o menino que iria voltar a fazer chover. Os três reis magros — emaciados pela seca e pela incompetência — reuniram-se para decidir se deviam ou não seguir a estrela que brilhava sobre o deserto recém-formado.

O primeiro rei trouxe ouro, mas o ouro já não comprava água. O segundo trouxe incenso, mas o incenso não refrescava a garganta seca dos súbditos. O terceiro trouxe mirra — perfume de funeral — porque já não acreditava em milagres políticos.

Quando chegaram à manjedoura, encontraram não um bebé salvador, mas um relatório de impacto ambiental ignorado durante décadas. O menino chorava não porque traria chuva, mas porque herdava um planeta onde os adultos tinham escolhido o lucro imediato em detrimento das gerações futuras.

Os reis magros, em vez de se ajoelharem, redigiram um comunicado a prometer chuva artificial para o próximo mandato. A sátira estava completa: o poder político reduzido a espetáculo, enquanto a seca avançava silenciosa e implacável sobre todos os reinos.`,
    },
  ]

  const badges = ['Distopia ecológica', 'Sátira social', 'Worldbuilding', 'Justiça social']
  const story = stories[activeStory]

  return (
    <section id="agua-2047" className="section-slide bg-grafite">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#184A5C_0%,_transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#BF914D18_0%,_transparent_45%)]" />

      {modalOpen && (
        <StoryModal story={story} onClose={() => setModalOpen(false)} />
      )}

      <div className="section-inner relative z-10 grid min-h-screen items-center gap-12 lg:grid-cols-2">
        <div>
          <Animated visible={visible} delay={0}>
            <span className="label-tag mb-6">10 — Projeto Autoral</span>
          </Animated>

          <Animated visible={visible} delay={150}>
            <h2 className="heading-display mb-3 text-2xl font-bold leading-tight text-gelo md:text-3xl lg:text-4xl">
              Histórias do Tempo em que a{' '}
              <span className="text-dourado">Água era um Bem Público</span>
            </h2>
            <p className="font-display text-lg font-semibold tracking-wide text-gelo/50 md:text-xl">
              Água <span className="text-dourado/70">2047</span>
            </p>
          </Animated>

          <Animated visible={visible} delay={300}>
            <p className="mb-4 mt-6 text-lg leading-relaxed text-gelo/80">
              Projeto autoral de storytelling distópico que reinventa contos tradicionais
              para refletir criticamente sobre privatização da água, desigualdade, poder
              económico e justiça social.
            </p>
            <div className="mb-6 rounded-xl border border-white/10 bg-petroleo/20 px-4 py-3">
              <p className="text-xs leading-relaxed text-gelo/60">
                Originalmente escrito entre 2010–2012. Revisitado em 2026 como projeto multimédia autoral.
              </p>
            </div>
          </Animated>

          <Animated visible={visible} delay={450}>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-dourado">
              Arquivo 2047
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {stories.map((item, index) => {
                const isActive = activeStory === index
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveStory(index)}
                    className={`group w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'scale-[1.02] border-dourado bg-dourado/10 shadow-lg shadow-dourado/25 ring-1 ring-dourado/30'
                        : 'border-white/10 bg-petroleo/20 hover:scale-[1.01] hover:border-dourado/40 hover:bg-petroleo/40 hover:shadow-md hover:shadow-dourado/10'
                    }`}
                  >
                    <span
                      className={`mb-1 block font-display text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors ${
                        isActive ? 'text-dourado' : 'text-gelo/40 group-hover:text-dourado/70'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`font-display text-sm font-bold transition-colors md:text-base ${
                        isActive ? 'text-dourado' : 'text-gelo group-hover:text-gelo'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1 text-xs transition-colors ${
                        isActive ? 'text-gelo/75' : 'text-gelo/50 group-hover:text-gelo/65'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </button>
                )
              })}
            </div>
          </Animated>
        </div>

        <Animated visible={visible} delay={500}>
          <div
            key={activeStory}
            className="rounded-3xl border border-dourado/30 bg-petroleo/30 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 md:p-10"
          >
            <p className="mb-2 font-display text-xs uppercase tracking-[0.3em] text-dourado">
              Excerto
            </p>
            <h3 className="heading-display mb-1 text-2xl font-bold text-gelo md:text-3xl">
              {story.title}
            </h3>
            <p className="mb-6 text-sm font-medium text-dourado/80">{story.subtitle}</p>

            <blockquote className="mb-8 border-l-2 border-dourado/40 pl-5">
              <p className="text-base leading-relaxed text-gelo/85 md:text-lg">{story.excerpt}</p>
            </blockquote>

            <div className="mb-8 grid grid-cols-2 gap-3 text-sm text-gelo/75">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-xl border border-dourado/20 bg-white/5 px-4 py-3 text-center text-xs transition-colors hover:border-dourado/40 hover:bg-dourado/5"
                >
                  {badge}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Ler conto completo
            </button>
          </div>
        </Animated>
      </div>
    </section>
  )
}


function SectionManifesto({ visible }) {
  return (
    <section id="manifesto" className="section-slide bg-grafite">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#184A5C40_0%,_transparent_60%)]" />
      <div className="section-inner relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <Animated visible={visible} delay={0}>
          <span className="label-tag mb-8">10 — Manifesto Final</span>
        </Animated>
        <Animated visible={visible} delay={150}>
          <h2 className="heading-display mb-6 text-4xl font-bold text-gelo md:text-5xl lg:text-6xl">
            Da informação à<br />
            <span className="text-gradient">experiência digital</span>
          </h2>
        </Animated>
        <Animated visible={visible} delay={300}>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gelo/70">
            Acredito numa multimédia que une rigor técnico, sensibilidade humana e impacto social.
            Este portfólio é o reflexo de um percurso que continua — e que pretendo aprofundar
            no Mestrado em Tecnologia Multimédia.
          </p>
        </Animated>
        <Animated visible={visible} delay={450}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalIcon />
              IPSS Gestão
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </Animated>
        <Animated visible={visible} delay={600}>
          <div className="card-premium inline-block px-10 py-8">
            <p className="mb-2 font-display text-xs uppercase tracking-[0.3em] text-dourado">
              Contacto
            </p>
            <a
              href="mailto:fredericosampaiopinto@gmail.com"
              className="block text-lg text-gelo transition-colors hover:text-dourado"
            >
              fredericosampaiopinto@gmail.com
            </a>
            <a
              href="tel:+351937331329"
              className="mt-2 block text-lg text-gelo/80 transition-colors hover:text-dourado"
            >
              +351 937 331 329
            </a>
          </div>
        </Animated>
        <Animated visible={visible} delay={750}>
          <p className="mt-16 text-xs uppercase tracking-[0.4em] text-gelo/30">
            Frederico Marinheira Dias Sampaio Pinto — 2026
          </p>
        </Animated>
      </div>
    </section>
  )
}

function SectionWrapper({ id, children }) {
  const [ref, visible] = useInView(0.2)
  return (
    <div ref={ref}>
      {children(visible)}
    </div>
  )
}

function CVSectionTitle({ children }) {
  return (
    <h3 className="cv-section-title mb-3 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-dourado">
      {children}
    </h3>
  )
}

function CVSidebarBlock({ title, children }) {
  return (
    <div className="mb-5">
      <CVSectionTitle>{title}</CVSectionTitle>
      {children}
    </div>
  )
}

function CVExperienceItem({ role, company, period, location, bullets }) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0">
        <h4 className="font-display text-[11px] font-bold uppercase tracking-wide text-grafite">{role}</h4>
        <span className="text-[9px] font-medium uppercase tracking-wider text-petroleo/70">{period}</span>
      </div>
      <p className="mb-1.5 text-[10px] font-semibold text-dourado">
        {company}
        {company && location && <span className="font-normal text-grafite/60"> — {location}</span>}
        {!company && location}
      </p>
      <ul className="space-y-0.5">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2 text-[9.5px] leading-relaxed text-grafite/80">
            <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-dourado" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CVPage() {
  useEffect(() => {
    document.documentElement.classList.add('cv-mode')
    document.body.classList.add('cv-mode')
    return () => {
      document.documentElement.classList.remove('cv-mode')
      document.body.classList.remove('cv-mode')
    }
  }, [])

  const competencias = [
    'React', 'Vite', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'Python', 'SQL',
    'UX/UI', 'IA Generativa', 'Prompt Engineering', 'GitHub', 'Cursor', 'Canva',
    'Microsoft Office', 'Gestão Documental',
  ]

  const idiomas = [
    { lang: 'Português', level: 'Nativo' },
    { lang: 'Inglês', level: 'Avançado' },
    { lang: 'Espanhol', level: 'Avançado' },
    { lang: 'Francês', level: 'Básico' },
  ]

  const certificacoes = [
    'Certificado de Competências Pedagógicas (CCP)',
    'Formação Pedagógica Contínua – e-Formador',
    'Curso CEAGP – INA',
    'Python — Santander Open Academy',
    'Cursor com Python: desenvolvimento inteligente com IA — Santander Open Academy',
  ]

  const transversais = [
    'Pensamento analítico', 'Resolução de problemas', 'Aprendizagem autónoma',
    'Comunicação pedagógica', 'Criatividade aplicada', 'Gestão de projetos',
    'Adaptação tecnológica',
  ]

  const projetos = [
    {
      title: 'IPSS Gestão',
      desc: 'Aplicação web para gestão integrada de refeições em IPSS, com planeamento de ementas, fichas técnicas, controlo de stock, cálculo de custos e automação com IA.',
    },
    {
      title: 'Portfólio Multimédia Interativo',
      desc: 'Projeto React + Tailwind para apresentação de percurso multidisciplinar, storytelling, UX/UI e identidade digital.',
    },
    {
      title: 'Blog Literário Distópico',
      desc: 'Histórias do Tempo em que a Água era um Bem Público — projeto de escrita criativa e crítica social.',
    },
    {
      title: 'Projetos Python',
      desc: 'Exercícios e scripts orientados para lógica computacional, programação e automação.',
    },
  ]

  return (
    <div className="cv-wrapper min-h-screen bg-grafite py-8 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-[210mm] items-center justify-between px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-gelo/20 bg-grafite/80 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-gelo backdrop-blur-sm transition-colors hover:border-dourado hover:text-dourado"
        >
          ← Voltar ao Portfólio
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-dourado px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-grafite transition-colors hover:bg-dourado/90"
        >
          Imprimir / PDF
        </button>
      </div>

      <div className="cv-pages mx-auto flex flex-col gap-8 print:gap-0">
        {/* ── Página 1 ── */}
        <article className="page cv-page mx-auto flex overflow-hidden bg-gelo shadow-2xl shadow-black/50 print:shadow-none">
          <aside className="cv-sidebar flex w-[31%] shrink-0 flex-col bg-petroleo px-5 py-7 text-gelo">
            <div className="mb-6 border-b border-dourado/30 pb-5">
              <p className="font-display text-[9px] font-semibold uppercase tracking-[0.35em] text-dourado">
                Curriculum Vitae
              </p>
              <p className="mt-2 font-display text-sm font-bold leading-tight">
                Frederico<br />Sampaio Pinto
              </p>
            </div>

            <CVSidebarBlock title="Contactos">
              <ul className="space-y-2 text-[9.5px] leading-relaxed text-gelo/85">
                <li>Alijó, Vila Real, Portugal</li>
                <li>
                  <a href="tel:+351937331329" className="hover:text-dourado">937 331 329</a>
                </li>
                <li>
                  <a href="mailto:fredericosampaiopinto@gmail.com" className="break-all hover:text-dourado">
                    fredericosampaiopinto@gmail.com
                  </a>
                </li>
              </ul>
            </CVSidebarBlock>

            <CVSidebarBlock title="Links">
              <ul className="space-y-1.5 text-[9px] leading-relaxed">
                <li>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gelo/80 hover:text-dourado">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="text-gelo/80 hover:text-dourado">
                    IPSS App
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gelo/80 hover:text-dourado">
                    Portfolio React / Tailwind
                  </a>
                </li>
              </ul>
            </CVSidebarBlock>

            <CVSidebarBlock title="Competências">
              <div className="flex flex-wrap gap-1">
                {competencias.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm bg-white/10 px-1.5 py-0.5 text-[7.5px] font-medium uppercase tracking-wide text-gelo/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CVSidebarBlock>

            <CVSidebarBlock title="Idiomas">
              <ul className="space-y-1.5">
                {idiomas.map(({ lang, level }) => (
                  <li key={lang} className="flex items-baseline justify-between gap-2 text-[9.5px]">
                    <span className="font-medium text-gelo">{lang}</span>
                    <span className="text-[8.5px] text-dourado">{level}</span>
                  </li>
                ))}
              </ul>
            </CVSidebarBlock>
          </aside>

          <div className="cv-main flex flex-1 flex-col px-7 py-7">
            <header className="mb-5 border-b-2 border-petroleo/15 pb-4">
              <h1 className="font-display text-[22px] font-bold leading-tight tracking-tight text-grafite">
                Frederico Marinheira Dias<br />Sampaio Pinto
              </h1>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-dourado">
                Tecnologia • Multimédia • Transformação Digital
              </p>
            </header>

            <section className="mb-5">
              <CVSectionTitle>Perfil Profissional</CVSectionTitle>
              <p className="text-[10px] leading-[1.65] text-grafite/85">
                Profissional multidisciplinar com formação em Ciências da Informação e experiência
                consolidada em gestão documental, formação profissional, operações e transformação
                digital de processos. Combina pensamento analítico, visão sistémica e sensibilidade
                criativa, com particular interesse em multimédia, acessibilidade, UX/UI e aplicações
                tecnológicas com impacto social.
              </p>
            </section>

            <section>
              <CVSectionTitle>Experiência Profissional</CVSectionTitle>
              <CVExperienceItem
                role="Formador Profissional"
                company="IEFP / BestCenter"
                period="2019 – Presente"
                location="Vila Real"
                bullets={[
                  'Planeamento, organização e dinamização de ações de formação presenciais e online.',
                  'Formação em Informática, Gestão e Administração, HACCP/Alimentação, Competências Digitais, Arquivo e Documentação.',
                  'Elaboração de conteúdos pedagógicos e instrumentos de avaliação.',
                  'Utilização de metodologias e-learning e ferramentas digitais.',
                ]}
              />
              <CVExperienceItem
                role="Gestor Operacional"
                company="FredFood"
                period="2022 – 2026"
                bullets={[
                  'Gestão administrativa e operacional.',
                  'Controlo de stocks e aprovisionamento.',
                  'Planeamento logístico e otimização de processos.',
                  'Comunicação visual e promoção digital de produtos gastronómicos.',
                ]}
              />
            </section>
          </div>
        </article>

        {/* ── Página 2 ── */}
        <article className="page cv-page mx-auto flex overflow-hidden bg-gelo shadow-2xl shadow-black/50 print:shadow-none">
          <aside className="cv-sidebar flex w-[31%] shrink-0 flex-col bg-petroleo px-5 py-7 text-gelo">
            <CVSidebarBlock title="Certificações">
              <ul className="space-y-2">
                {certificacoes.map((cert) => (
                  <li key={cert} className="flex gap-2 text-[9px] leading-relaxed text-gelo/85">
                    <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-dourado" />
                    {cert}
                  </li>
                ))}
              </ul>
            </CVSidebarBlock>

            <CVSidebarBlock title="Competências Transversais">
              <ul className="space-y-1.5">
                {transversais.map((item) => (
                  <li key={item} className="text-[9px] leading-relaxed text-gelo/85">
                    {item}
                  </li>
                ))}
              </ul>
            </CVSidebarBlock>

            <div className="mt-auto border-t border-dourado/20 pt-4">
              <p className="text-[8px] uppercase tracking-[0.3em] text-dourado/70">Página 2 de 2</p>
            </div>
          </aside>

          <div className="cv-main flex flex-1 flex-col px-7 py-7">
            <section className="mb-5">
              <CVSectionTitle>Experiência Profissional</CVSectionTitle>
              <CVExperienceItem
                role="Técnico Superior de Biblioteca e Documentação"
                company=""
                period="2013 – 2015"
                location="Castro Verde"
                bullets={[
                  'Tratamento documental.',
                  'Organização e gestão da informação.',
                  'Apoio técnico e administrativo.',
                  'Dinamização de atividades culturais.',
                ]}
              />
              <CVExperienceItem
                role="Auxiliar de Ação Educativa"
                company="FAMSER"
                period="2015 – 2016"
                location="Castro Verde"
                bullets={[
                  'Apoio a atividades educativas, terapêuticas e sociais.',
                  'Articulação com famílias e comunidade.',
                ]}
              />
            </section>

            <section className="mb-5">
              <CVSectionTitle>Formação Académica</CVSectionTitle>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4">
                <h4 className="font-display text-[11px] font-bold uppercase tracking-wide text-grafite">
                  Licenciatura em Ciências da Informação e da Documentação
                </h4>
              </div>
              <p className="mb-1 text-[10px] font-semibold text-dourado">Universidade Aberta</p>
              <ul className="space-y-0.5 text-[9.5px] text-grafite/80">
                <li>Major: Bibliotecas e Documentação</li>
                <li>Minor: Educação e Leitura</li>
                <li className="font-medium text-petroleo">Classificação final: 15 valores</li>
              </ul>
            </section>

            <section>
              <CVSectionTitle>Projetos em Destaque</CVSectionTitle>
              <div className="space-y-3">
                {projetos.map(({ title, desc }) => (
                  <div key={title}>
                    <h4 className="font-display text-[10.5px] font-bold text-grafite">{title}</h4>
                    <p className="mt-0.5 text-[9.5px] leading-relaxed text-grafite/75">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

function Portfolio() {
  const [activeSection, setActiveSection] = useState('capa')

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.5 },
      )

      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  return (
    <>
      <TopBar />
      <SideNav activeSection={activeSection} />

      <main>
        <SectionWrapper id="capa">
          {(visible) => <SectionCapa visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="quem-sou">
          {(visible) => <SectionQuemSou visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="ipss">
          {(visible) => <SectionIPSS visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="ux-ui">
          {(visible) => <SectionUXUI visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="web-ia">
          {(visible) => <SectionWebIA visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="storytelling">
          {(visible) => <SectionStorytelling visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="gastronomia">
          {(visible) => <SectionGastronomia visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="experiencia">
          {(visible) => <SectionExperiencia visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="acessibilidade">
          {(visible) => <SectionAcessibilidade visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="agua-2047">
          {(visible) => <SectionAgua2047 visible={visible} />}
        </SectionWrapper>
        <SectionWrapper id="manifesto">
          {(visible) => <SectionManifesto visible={visible} />}
        </SectionWrapper>
      </main>
    </>
  )
}

export default function App() {
  if (window.location.pathname === '/cv') {
    return <CVPage />
  }

  return <Portfolio />
}

"use client"

import Image from "next/image"
import { Palette, Clapperboard, Share2, Rocket, Target, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const offers = [
  {
    tag: "Branding",
    title: "Plateformes de marque & identités immersives",
    description:
      "Création d'univers visuels, chartes éditoriales et systèmes modulaires pour faire rayonner votre aura sur tous les points de contact.",
    deliverables: [
      "Plateforme de marque",
      "Naming & tone of voice",
      "Identité graphique et motion system",
    ],
    Icon: Palette,
  },
  {
    tag: "Production",
    title: "Photo & vidéo premium multi-formats",
    description:
      "Tournages multi-caméras, direction photo et post-production cinématographique pour nourrir vos campagnes et vos réseaux.",
    deliverables: [
      "Films brand & TVC",
      "Capsules social-first",
      "Photographie & retouche avancée",
    ],
    Icon: Clapperboard,
  },
  {
    tag: "Social Studio",
    title: "Gestion éditoriale & animation des réseaux",
    description:
      "Stratégie social media, création quotidienne et optimisation temps réel pour engager vos communautés et amplifier vos messages.",
    deliverables: [
      "Calendrier éditorial & storytelling",
      "Templates & formats réactifs",
      "Modération & reporting social",
    ],
    Icon: Share2,
  },
  {
    tag: "Campaign Lab",
    title: "Campagnes publicitaires & activations data-driven",
    description:
      "Du concept à la diffusion : conception TV/digital, assets paid et scénographies événementielles pilotées par la data.",
    deliverables: [
      "Concepts créatifs multicanaux",
      "Social ads & paid media",
      "Activations événementielles immersives",
    ],
    Icon: Rocket,
  },
  {
    tag: "Strategy",
    title: "Stratégie marketing & rédaction publicitaire",
    description:
      "Narration stratégique, copywriting et pilotage des parcours clients pour transformer l’attention en action mesurable.",
    deliverables: [
      "Brand messaging & campagnes",
      "Copywriting long & court format",
      "Analyse de performance & optimisation",
    ],
    Icon: Target,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative px-6 pb-28 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/5 p-10 text-white backdrop-blur-xl md:p-14">
          <div className="absolute inset-y-0 -left-20 hidden w-1/3 bg-[radial-gradient(circle_at_center,_rgba(0,115,255,0.35),_transparent_70%)] opacity-70 md:block" />
          
          {/* Image - Right Side */}
          <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden rounded-r-[40px] opacity-40 md:opacity-50">
            <Image
              src="/Banque d_images/Copie de M7_00487.jpg"
              alt="Nos expertises"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 0px, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black/80" />
          </div>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-3xl space-y-6">
              <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white shadow-[0_0_35px_rgba(89,129,255,0.25)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                Nos expertises
              </span>
              <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-[52px]">
                Un collectif créatif inspiré pour orchestrer image, contenu et performance.
              </h2>
              <p className="max-w-2xl text-base text-white/80 md:text-lg leading-relaxed">
                Notre approche s&apos;inspire des studios premium : design affirmé, narration forte et pilotage data. Chaque offre se module selon vos objectifs – de la vision de marque aux activations les plus agiles.
              </p>
            </Reveal>
          </div>

          {/* Process & Team - Below the main card */}
          <Reveal delay={300} className="relative z-10 mt-8">
            <div className="relative rounded-2xl border border-white/20 bg-white/8 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-w-2xl">
              {/* Subtle Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-50" />
              
              <div className="relative space-y-8">
                {/* Process - Ultra Modern Design */}
                <div className="group/process">
                  <div className="flex items-start gap-4">
                    {/* Animated Circle Indicator */}
                    <div className="relative h-12 w-12 flex-shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="absolute inset-0 rounded-full border border-white/40" />
                      <div className="relative h-3 w-3 rounded-full bg-white/80" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/80">Process</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/40 via-white/25 to-transparent" />
                        <div className="h-6 w-6 flex items-center justify-center text-white/60 group-hover/process:text-white transition-all duration-500 group-hover/process:scale-110">
                          <svg className="h-4 w-4 transition-transform duration-500 group-hover/process:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm text-white/75 leading-relaxed group-hover/process:text-white/95 transition-colors duration-500">
                        Immersion, concept, prototypage, diffusion. Un rythme cadencé pour garantir cohérence et impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Elegant Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* Team - Ultra Modern Design */}
                <div className="group/team">
                  <div className="flex items-start gap-4">
                    {/* Animated Circle Indicator */}
                    <div className="relative h-12 w-12 flex-shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                      <div className="absolute inset-0 rounded-full border border-white/40" />
                      <div className="relative h-3 w-3 rounded-full bg-white/80" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/80">Équipe</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/40 via-white/25 to-transparent" />
                        <div className="h-6 w-6 flex items-center justify-center text-white/60 group-hover/team:text-white transition-all duration-500 group-hover/team:scale-110">
                          <svg className="h-4 w-4 transition-transform duration-500 group-hover/team:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm text-white/75 leading-relaxed group-hover/team:text-white/95 transition-colors duration-500">
                        Directeurs artistiques, réalisateurs, stratèges social et media planner travaillent de concert au sein d&apos;un même studio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {offers.map((offer, index) => (
            <Reveal
              key={offer.title}
              delay={index * 120}
              className="group relative overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.06] p-10 text-white backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12]"
            >
              <div className="pointer-events-none absolute -inset-x-16 top-[-40%] h-[420px] rounded-full bg-[radial-gradient(circle,_rgba(0,115,255,0.36)_0%,_transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[url('/Banque d_images/noise.png')] opacity-[0.12] mix-blend-screen" />

              <div className="relative flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.42em] text-white/55">
                    <span>{offer.tag}</span>
                    <span className="h-px w-9 bg-white/20" />
                  </div>
                  <span className="text-4xl font-black text-white/15 md:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/80 transition-colors duration-500 group-hover:border-white/40 group-hover:text-white">
                    <offer.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold md:text-[30px]">{offer.title}</h3>
                </div>
                <p className="text-sm text-white/70 md:text-base">{offer.description}</p>

                <div className="flex flex-col gap-4 pt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
                  {offer.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-4 border-b border-white/12 pb-3 transition-colors duration-500 group-hover:border-white/25"
                    >
                      <span className="flex-1 text-left text-white/65 transition-colors duration-500 group-hover:text-white/95">
                        {item}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] text-white/40 transition-all duration-500 group-hover:border-white group-hover:text-white">
                        ↗
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-[36px] border border-white/12 bg-white/[0.06] px-8 py-6 text-white backdrop-blur-2xl">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Prêts à accélérer ?</span>
            <p className="text-sm text-white/70">
              Discutons d'un dispositif sur mesure — branding, production, activation.
            </p>
          </div>
          <LinkCTA />
        </Reveal>
      </div>
    </section>
  )
}

function LinkCTA() {
  return (
    <a
      href="/#rendez-vous"
      className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-500 hover:border-white hover:bg-white/15"
    >
      Planifier un appel
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-[11px] transition-transform duration-500 group-hover:translate-x-1">
        ↗
      </span>
    </a>
  )
}

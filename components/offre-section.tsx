"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Factory, Sparkles, BarChart3, Check, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { OffreModal } from "@/components/offre-modal"

const differentiatorDetails = {
  production: {
    title: "Production intégrée",
    subtitle: "Studio interne = maîtrise qualité et délais",
    image: "/Banque d_images/Copie de M7_00487.jpg",
    intro: "Chez Pixaura_IT, la production est totalement intégrée : studio photo, tournage vidéo, montage et post-production sont gérés en interne.",
    points: [
      "Une cohérence visuelle entre tous les contenus produits (photo, vidéo, social).",
      "Une maîtrise totale des délais et de la qualité, sans sous-traitance.",
      "Des shootings réguliers adaptés au calendrier éditorial de chaque client.",
      "Des contenus optimisés pour les différents formats digitaux (reels, ads, bannières, etc.)."
    ],
    conclusion: "Le studio interne permet à Pixaura_IT de produire plus vite, avec plus de contrôle et de créativité, tout en conservant une signature esthétique forte.",
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    glow: "rgba(59, 130, 246, 0.4)",
    iconBg: "from-blue-500/20 to-cyan-500/20"
  },
  creativite: {
    title: "Créativité stratégique",
    subtitle: "Storytelling + direction artistique + performance",
    image: "/Banque d_images/art1.jpg",
    intro: "L'équipe créative de Pixaura_IT fusionne la stratégie marketing et la création artistique. Chaque contenu est pensé comme un mini-film publicitaire, au service d'un objectif clair : émouvoir, convertir et fidéliser.",
    points: [
      "Le storytelling de marque, pour révéler l'ADN et les valeurs de chaque client.",
      "La direction artistique, qui définit les palettes, typographies et styles visuels cohérents.",
      "L'optimisation stratégique, pour que chaque publication atteigne ses KPIs (clics, engagement, leads)."
    ],
    conclusion: "L'émotion guide la création, la stratégie en assure l'efficacité.",
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    glow: "rgba(168, 85, 247, 0.4)",
    iconBg: "from-purple-500/20 to-pink-500/20"
  },
  suivi: {
    title: "Suivi mesurable",
    subtitle: "Reporting, KPI, ROI",
    image: "/Banque d_images/Copie de M7_03194.jpg",
    intro: "Pixaura_IT place la donnée au cœur de la performance. Chaque campagne fait l'objet d'un reporting régulier, accompagné d'une analyse claire et visuelle des indicateurs :",
    points: [
      "Taux d'engagement, portée, clics, conversions",
      "ROI publicitaire (ROAS) et évolution du trafic qualifié",
      "Recommandations d'optimisation continue"
    ],
    conclusion: "Ces analyses sont présentées via des tableaux de bord intuitifs et partagées lors des points de suivi. Objectif : prouver la valeur de chaque action, ajuster en temps réel et maximiser la rentabilité marketing.",
    gradient: "from-emerald-500 via-teal-400 to-emerald-600",
    glow: "rgba(16, 185, 129, 0.4)",
    iconBg: "from-emerald-500/20 to-teal-500/20"
  }
}

const packs = [
  {
    name: "Starter",
    price: "1 499 € puis 11 × 375 €",
    priceDetail: "5 999 € TTC/an",
    description: "Idéal pour lancer une dynamique de contenus réguliers, calibrés pour vos réseaux prioritaires.",
    image: "/Banque d_images/Copie de M7_00487.jpg",
    features: [
      "Production vidéo/photo mensuelle",
      "Stratégie éditoriale et calendrier",
      "Montage vertical + pack stories",
      "Reporting consolidé"
    ],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    glow: "rgba(59, 130, 246, 0.3)",
    accent: "blue",
    badge: "Starter"
  },
  {
    name: "Croissance",
    price: "Sur devis",
    priceDetail: "À partir de 9 000 € HT / an",
    description: "Un accompagnement 360° pour accélérer l'impact : plus de contenus, paid media et pilotage data.",
    image: "/Banque d_images/art1.jpg",
    features: [
      "2 à 3 tournages/mois + capsules studio",
      "Gestion social media & paid",
      "Activation influence & newsletters",
      "Workshop trimestriel performance"
    ],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    glow: "rgba(168, 85, 247, 0.3)",
    accent: "purple",
    badge: "Croissance"
  },
  {
    name: "Signature",
    price: "Sur devis",
    priceDetail: "> 15 000 € HT / an",
    description: "Marques premium ou internationales cherchant un accompagnement complet",
    image: "/Banque d_images/Copie de M7_03194.jpg",
    features: [
      "Direction artistique complète",
      "Production audiovisuelle premium",
      "Campagnes cross-plateformes",
      "Intégration format Humind",
      "Stratégie trimestrielle pilotée",
      "Reporting avancé + support prioritaire"
    ],
    gradient: "from-amber-500 via-yellow-400 to-amber-600",
    glow: "rgba(245, 158, 11, 0.3)",
    accent: "amber",
    premium: true,
    badge: "Premium"
  }
]

export function OffreSection() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOffre, setSelectedOffre] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove)
      return () => {
        if (sectionRef.current) {
          sectionRef.current.removeEventListener('mousemove', handleMouseMove)
        }
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="offre" className="relative overflow-hidden px-6 py-24">
      {/* Subtle Background Effect */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.08) 30%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Premium Header */}
        <Reveal>
          <div className="mb-16 text-left">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white shadow-[0_0_35px_rgba(89,129,255,0.25)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              Notre offre
            </span>
            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl text-left">
              Trois piliers qui font la différence
            </h2>
            <p className="mt-6 max-w-3xl text-base text-white/70 md:text-lg text-left">
              Une approche intégrée qui combine production, créativité stratégique et suivi mesurable pour maximiser votre impact.
            </p>
          </div>
        </Reveal>

        {/* Premium Design Cards - Style Réalisations */}
        <div className="mb-24 grid gap-8 md:grid-cols-3">
          {[
            { key: "production", icon: Factory, badge: "Production" },
            { key: "creativite", icon: Sparkles, badge: "Créativité" },
            { key: "suivi", icon: BarChart3, badge: "Analytics" }
          ].map(({ key, icon: Icon, badge }) => {
            const detail = differentiatorDetails[key as keyof typeof differentiatorDetails]

            return (
              <Reveal key={key} delay={key === "production" ? 0 : key === "creativite" ? 100 : 200}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 text-white backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] hover:border-white/25 hover:bg-white/10 hover:shadow-[0_45px_140px_rgba(0,0,0,0.55)]">
                  {/* Premium Glow Effects - Style Réalisations */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                    <div className={`absolute -inset-6 rounded-[40px] bg-gradient-to-r ${detail.gradient} blur-3xl animate-pulse`} style={{ opacity: 0.2 }} />
                    <div className="absolute inset-0 rounded-[30px] border border-white/20 opacity-60" />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedOffre(key)
                      setIsModalOpen(true)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setSelectedOffre(key)
                        setIsModalOpen(true)
                      }
                    }}
                    className="w-full text-left"
                  >
                    {/* Image Section - Enhanced Premium Style */}
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={detail.image}
                        alt={detail.title}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                        loading="lazy"
                      />
                      {/* Enhanced Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                      {/* Animated gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-20`} />
                      
                      {/* Premium Badge with enhanced styling */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <span className="rounded-full border border-white/30 bg-white/20 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.35em] text-white backdrop-blur-md shadow-lg transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/25 group-hover:scale-105">
                          {badge}
                        </span>
                        {/* Icon indicator */}
                        <div className={`rounded-full border border-white/20 bg-white/10 p-2.5 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-12`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Section with Premium Typography */}
                    <div className="flex flex-col gap-5 px-8 py-10 text-white">
                      {/* Title with enhanced styling */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black leading-tight tracking-tight md:text-3xl bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">
                          {detail.title}
                        </h3>
                        <p className="text-sm font-medium text-white/60 md:text-base leading-relaxed">
                          {detail.subtitle}
                        </p>
                      </div>
                      
                      {/* Enhanced CTA Section */}
                      <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-white/90 transition-all duration-300 group-hover:text-white group-hover:gap-3">
                          Voir les détails
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
                      </div>
                    </div>
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Premium Divider */}
        <div className="relative mb-20 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-px bg-gradient-to-r from-transparent via-white/25 to-transparent">
              <div className="absolute left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-blue-400/50 via-purple-400/70 to-cyan-400/50" />
            </div>
          </div>
        </div>

        {/* Ultra Premium Packs Section */}
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Trois packs sur mesure
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 md:text-lg">
              Des solutions adaptées à votre ambition, avec un engagement de 12 mois pour garantir des résultats mesurables.
            </p>
          </div>
        </Reveal>

        {/* Premium Packs Cards - Style 3 Piliers */}
        <div className="grid gap-8 md:grid-cols-3">
          {packs.map((pack, index) => (
            <Reveal key={pack.name} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 text-white backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] hover:border-white/25 hover:bg-white/10 hover:shadow-[0_45px_140px_rgba(0,0,0,0.55)]">
                {/* Premium Glow Effects - Style Réalisations */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                  <div className={`absolute -inset-6 rounded-[40px] bg-gradient-to-r ${pack.gradient} blur-3xl animate-pulse`} style={{ opacity: 0.2 }} />
                  <div className="absolute inset-0 rounded-[30px] border border-white/20 opacity-60" />
                </div>

                {/* Image Section - Style 3 Piliers */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={pack.image}
                    alt={pack.name}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                    loading="lazy"
                  />
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  {/* Animated gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pack.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-20`} />
                  
                  {/* Premium Badge with enhanced styling */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className={`rounded-full border border-white/30 bg-white/20 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.35em] text-white backdrop-blur-md shadow-lg transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/25 group-hover:scale-105 ${pack.premium ? 'bg-gradient-to-r from-amber-500/30 to-yellow-500/30 border-amber-400/40' : ''}`}>
                      {pack.badge}
                    </span>
                    {/* Premium indicator for Signature pack */}
                    {pack.premium && (
                      <span className="rounded-full border-2 border-amber-400/50 bg-amber-500/20 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md shadow-lg">
                        Premium
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="flex flex-col gap-5 px-8 py-10 text-white">
                  {/* Title with enhanced styling */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black leading-tight tracking-tight md:text-3xl bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">
                      {pack.name}
                    </h3>
                    <p className="text-sm font-medium text-white/60 md:text-base leading-relaxed">
                      {pack.description}
                    </p>
                  </div>

                  {/* Price Section - Premium Design */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${pack.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                    <div className="relative z-10 space-y-1">
                      <div className="text-2xl font-black text-white md:text-3xl">{pack.price}</div>
                      <div className="text-xs font-semibold text-white/50 md:text-sm uppercase tracking-wide">{pack.priceDetail}</div>
                    </div>
                  </div>

                  {/* Features List - Compact Premium Design */}
                  <div className="space-y-3 pt-2">
                    {pack.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-white/70 transition-colors duration-300 group-hover:text-white/90"
                      >
                        <Check className="h-4 w-4 text-white/60 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-white/80" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Offre Modal */}
      <OffreModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        offre={selectedOffre ? differentiatorDetails[selectedOffre as keyof typeof differentiatorDetails] : null}
      />
    </section>
  )
}

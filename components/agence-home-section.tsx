"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Target, GraduationCap, Shield, BarChart3, Globe, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const values = [
  {
    icon: Sparkles,
    title: "Créativité contemporaine",
    description: "Direction artistique, storytelling visuel, esthétique inspirée des codes cinématiques.",
    gradient: "from-purple-500 via-pink-500 to-purple-600",
  },
  {
    icon: Target,
    title: "Intelligence stratégique",
    description: "Maîtrise des algorithmes, data, performance marketing et ciblage digital.",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Transmission & accompagnement",
    description: "Formations, ateliers, accompagnement stratégique pour faire grandir les marques.",
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
  },
]

const founders = [
  {
    name: "Franck Ebouré",
    role: "Co-fondateur & Directeur Administratif et Commercial",
    image: "/Banque d_images/Copie de M7_03372.jpg",
    description: "Entrepreneur depuis 2005, expert en gestion de projets ambitieux et en développement stratégique.",
    vision: "Allier rigueur opérationnelle, stratégie long terme et compréhension fine des enjeux économiques.",
  },
  {
    name: "Julien Oké",
    role: "Co-fondateur & Directeur Marketing et Communication",
    image: "/Banque d_images/Copie de M7_01248.jpg",
    description: "Ancien opérateur spécialisé des troupes parachutistes de l'armée de l'air, il incarne discipline, créativité et dépassement de soi.",
    vision: "Spécialiste du cadrage, montage et stratégie de communication digitale. Collaborations : Reebok, Adobe France, Shiftech.",
  },
]

const commitments = [
  {
    icon: Shield,
    title: "Transparence & contrat clair",
    description: "CGV et droit à l'image sécurisés.",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
  },
  {
    icon: BarChart3,
    title: "Excellence mesurable",
    description: "KPI, reporting, ROI mensuel.",
    gradient: "from-purple-500 via-pink-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Vision responsable",
    description: "Production locale, engagement durable et éthique.",
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
  },
]

export function AgenceHomeSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="agence" className="relative bg-transparent py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Manifester Valeurs */}
        <Reveal>
          <div className="mb-20 text-left">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white shadow-[0_0_35px_rgba(89,129,255,0.25)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              Nos valeurs
            </span>
            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl text-left">
              Manifester nos valeurs
            </h2>
            <p className="mt-6 max-w-3xl text-base text-white/70 md:text-lg text-left">
              Trois piliers fondamentaux qui guident chaque projet et chaque décision.
            </p>
          </div>
        </Reveal>

        {/* Values Cards - Style Réalisations Premium */}
        <div className="mb-32 grid gap-8 md:grid-cols-3">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/8 text-white backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] hover:border-white/30 hover:bg-white/12 hover:shadow-[0_45px_140px_rgba(0,0,0,0.55)]">
                  {/* Premium Glow Effects - Style Réalisations */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                    <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-primary/20 via-white/10 to-cyan-400/20 blur-3xl animate-pulse" />
                    <div className="absolute inset-0 rounded-[30px] border border-white/20 opacity-60" />
                  </div>

                  {/* Icon Header Section - Enhanced Clarity */}
                  <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
                    {/* Background Gradient - More Visible */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Icon Container - Premium */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Icon Glow */}
                        <div className="absolute -inset-8 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
                        
                        {/* Icon */}
                        <div className="relative w-24 h-24 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-700 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110">
                          <IconComponent className="w-14 h-14 text-white transition-all duration-700 group-hover:scale-110" style={{ 
                            filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.3))',
                          }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge - Enhanced Visibility */}
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-white/20 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.32em] text-white backdrop-blur-md">
                      {value.title.split(' ')[0]}
                    </span>
                  </div>

                  {/* Content Section - Enhanced Clarity */}
                  <div className="flex flex-col gap-5 px-8 py-10 text-white">
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl text-white">
                      {value.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-white/90 font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Section Separator */}
        <div className="relative mb-20 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-px bg-gradient-to-r from-transparent via-white/25 to-transparent">
              <div className="absolute left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-blue-400/50 via-purple-400/70 to-cyan-400/50" />
            </div>
          </div>
        </div>

        {/* Section Les Fondateurs */}
        <Reveal>
          <div className="mb-16 text-left">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white shadow-[0_0_35px_rgba(89,129,255,0.25)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              L'équipe
            </span>
            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl text-left">
              Les fondateurs de Pixaura
            </h2>
            <p className="mt-6 max-w-3xl text-base text-white/70 md:text-lg text-left">
              Deux visionnaires qui ont uni leurs forces pour créer une agence d'exception.
            </p>
          </div>
        </Reveal>

        {/* Founders Cards - ULTRA PREMIUM MODERN WORLD-CLASS DESIGN */}
        <div className="mb-32 grid gap-10 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-[32px] border border-white/25 bg-gradient-to-br from-white/12 via-white/8 to-white/5 text-white backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:border-white/40 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/7 hover:shadow-[0_30px_100px_rgba(0,115,255,0.25),0_0_0_1px_rgba(255,255,255,0.1)]">
                {/* Premium Multi-Layer Glow Effects */}
                <div className="pointer-events-none absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-primary/25 via-white/15 to-cyan-400/25 blur-3xl" />
                  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-white/10 blur-2xl" />
                </div>
                
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                  }} />
                </div>
                
                {/* Content Layout - Horizontal Ultra Premium */}
                <div className="relative flex flex-row h-full min-h-[321px]">
                  {/* Image Container - Left Side (42%) - Enhanced */}
                  <div className="relative w-[42%] overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    {/* Enhanced Gradient Overlays for Better Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
                    
                    {/* Premium Badge - Enhanced Visibility */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-gradient-to-br from-white/25 via-white/20 to-white/15 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.35em] text-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
                        Fondateur
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Container - Right Side (58%) - Ultra Clear & Premium */}
                  <div className="relative w-[58%] p-10 flex flex-col justify-center z-10">
                    {/* Enhanced Background for Better Text Contrast - Always Visible */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 rounded-r-[32px]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-r-[32px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
                    
                    {/* Name - Ultra Large Bold with Premium Typography */}
                    <h3 className="relative text-4xl md:text-5xl font-black text-white leading-[1.1] mb-5 tracking-tight" style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: '-0.03em',
                      textShadow: '0 3px 25px rgba(0,0,0,0.5), 0 0 50px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.8)',
                    }}>
                      {founder.name}
                    </h3>
                    
                    {/* Premium Divider Line with Glow */}
                    <div className="relative w-full h-[1px] mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-cyan-400/40 to-primary/40 blur-sm opacity-70" />
                    </div>
                    
                    {/* Role - Enhanced Readability */}
                    <p className="relative text-white text-[13px] font-bold uppercase tracking-[0.4em] leading-tight mb-8" style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: '0.35em',
                      textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.7)',
                    }}>
                      {founder.role}
                    </p>
                    
                    {/* Description - Ultra Clear & Readable */}
                    <p className="relative text-white text-[16px] leading-[1.75] font-medium mb-8" style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: '1.75',
                      textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)',
                    }}>
                      {founder.description}
                    </p>
                    
                    {/* Vision - Premium Separated Section */}
                    <div className="relative pt-6 border-t border-white/25">
                      <p className="text-white text-[14px] leading-[1.8] font-normal" style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: '1.8',
                        textShadow: '0 2px 18px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.75)',
                      }}>
                        {founder.vision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Section Separator */}
        <div className="relative mb-20 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-px bg-gradient-to-r from-transparent via-white/25 to-transparent">
              <div className="absolute left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-blue-400/50 via-purple-400/70 to-cyan-400/50" />
            </div>
          </div>
        </div>

        {/* Section Labels & Engagements */}
        <Reveal>
          <div className="mb-16 text-left">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white shadow-[0_0_35px_rgba(89,129,255,0.25)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              Nos engagements
            </span>
            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl text-left">
              Labels & Engagements
            </h2>
            <p className="mt-6 max-w-3xl text-base text-white/70 md:text-lg text-left">
              Trois engagements fondamentaux qui garantissent la qualité et la transparence de nos collaborations.
            </p>
          </div>
        </Reveal>

        {/* Commitments Cards - Style Réalisations Premium */}
        <div className="grid gap-8 md:grid-cols-3">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/8 text-white backdrop-blur-2xl transition duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] hover:border-white/30 hover:bg-white/12 hover:shadow-[0_45px_140px_rgba(0,0,0,0.55)]">
                  {/* Premium Glow Effects - Style Réalisations */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                    <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-primary/20 via-white/10 to-cyan-400/20 blur-3xl animate-pulse" />
                    <div className="absolute inset-0 rounded-[30px] border border-white/20 opacity-60" />
                  </div>

                  {/* Icon Header Section - Enhanced Clarity */}
                  <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
                    {/* Background Gradient - More Visible */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Icon Container - Premium */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Icon Glow */}
                        <div className="absolute -inset-8 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
                        
                        {/* Icon */}
                        <div className="relative w-24 h-24 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-700 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110">
                          <IconComponent className="w-14 h-14 text-white transition-all duration-700 group-hover:scale-110" style={{ 
                            filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.3))',
                          }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge - Enhanced Visibility */}
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-white/20 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.32em] text-white backdrop-blur-md">
                      {commitment.title.split(' ')[0]}
                    </span>
                  </div>

                  {/* Content Section - Enhanced Clarity */}
                  <div className="flex flex-col gap-5 px-8 py-10 text-white">
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl text-white">
                      {commitment.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-white/90 font-medium">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}


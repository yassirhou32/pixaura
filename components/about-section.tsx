"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-24 px-6 bg-black overflow-hidden">
      {/* Section Separator - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
      
      {/* Background Effects - Ultra Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 via-transparent to-purple-500/3 opacity-30" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255, 255, 255, 0.1) 100px),
          repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(255, 255, 255, 0.1) 100px)
        `,
        backgroundSize: '200px 200px',
      }} />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center py-16 px-6">
          {/* Decorative Sparkles */}
          <div className="flex justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Title - Ultra Premium */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight relative" style={{ 
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.03em',
          }}>
            <span className="relative z-10 inline-block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Découvrez Notre Agence
            </span>
            {/* Text Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 blur-2xl opacity-50 -z-10" />
          </h2>
          
          {/* Subtitle - Premium */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light" style={{ 
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.01em',
          }}>
            Une équipe passionnée, des créateurs visionnaires, une expertise reconnue. 
            <br className="hidden md:block" />
            Plongez dans l'univers Pixaura et découvrez les talents qui façonnent votre image.
          </p>
          
          {/* CTA Button - Ultra Premium */}
          <Link 
            href="/agence"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/40"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            {/* Base Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400" 
                 style={{
                   backgroundSize: '200% 200%',
                   animation: 'gradient 3s ease infinite',
                 }} />
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{
                   backgroundSize: '200% 200%',
                   animation: 'gradient 3s ease infinite',
                 }} />
            
            {/* Multi-Layer Glow Effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-cyan-400/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/40 group-hover:border-cyan-400/80 transition-colors duration-500" />
            
            {/* Rotating Glow Ring */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/60 transition-all duration-500 group-hover:rotate-180" 
                 style={{
                   background: 'linear-gradient(90deg, transparent, transparent) padding-box, linear-gradient(90deg, cyan-400, purple-500, cyan-400) border-box',
                 }} />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              En Savoir Plus
              <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </span>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Pulsing Circles */}
            <div className="absolute inset-0 rounded-xl">
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-32 group-hover:h-32 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700" />
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/10 rounded-full group-hover:w-40 group-hover:h-40 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-900" style={{ transitionDelay: '100ms' }} />
            </div>
          </Link>
        </div>
      </div>
      
      {/* Section Separator - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
    </section>
  )
}

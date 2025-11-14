"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface PremiumPageTransitionProps {
  isActive: boolean
  targetPath: string
  onComplete: () => void
}

export function PremiumPageTransition({ isActive, targetPath, onComplete }: PremiumPageTransitionProps) {
  const router = useRouter()
  const [phase, setPhase] = useState<'idle' | 'expanding' | 'fullscreen' | 'redirecting'>('idle')
  const [uniqueId] = useState(() => `wave-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    if (!isActive) {
      setPhase('idle')
      return
    }

    // Phase 1: Expansion morphing (500ms) - Optimized with RAF
    setPhase('expanding')
    
    let expandTimer: number | null = null
    let timeout1: NodeJS.Timeout | null = null
    let raf2: number | null = null
    let timeout2: NodeJS.Timeout | null = null
    let raf3: number | null = null
    let timeout3: NodeJS.Timeout | null = null
    let raf4: number | null = null
    let timeout4: NodeJS.Timeout | null = null

    expandTimer = requestAnimationFrame(() => {
      timeout1 = setTimeout(() => {
        raf2 = requestAnimationFrame(() => {
          setPhase('fullscreen')
          
          // Phase 2: Fullscreen avec effets premium (700ms) - Reduced for fluidity
          timeout2 = setTimeout(() => {
            raf3 = requestAnimationFrame(() => {
              setPhase('redirecting')
              
              // Phase 3: Redirection (150ms) - Faster for instant feel
              timeout3 = setTimeout(() => {
                raf4 = requestAnimationFrame(() => {
                  router.push(targetPath)
                  timeout4 = setTimeout(() => {
                    onComplete()
                  }, 50)
                })
              }, 150)
            })
          }, 700)
        })
      }, 500)
    })

    return () => {
      if (expandTimer !== null) cancelAnimationFrame(expandTimer)
      if (timeout1 !== null) clearTimeout(timeout1)
      if (raf2 !== null) cancelAnimationFrame(raf2)
      if (timeout2 !== null) clearTimeout(timeout2)
      if (raf3 !== null) cancelAnimationFrame(raf3)
      if (timeout3 !== null) clearTimeout(timeout3)
      if (raf4 !== null) cancelAnimationFrame(raf4)
      if (timeout4 !== null) clearTimeout(timeout4)
    }
  }, [isActive, targetPath, router, onComplete])

  if (!isActive && phase === 'idle') return null

  return (
    <div 
      className={`premium-transition fixed inset-0 z-[9999] pointer-events-none ${
        phase === 'idle' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        willChange: 'contents',
        contain: 'strict',
        isolation: 'isolate',
      }}
    >
      {/* Expanding Circle Morph - Ultra Premium with Wave Effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(138, 43, 226, 0.98) 0%,
            rgba(0, 191, 255, 0.96) 15%,
            rgba(124, 58, 237, 0.94) 25%,
            rgba(255, 20, 147, 0.92) 35%,
            rgba(0, 115, 255, 0.9) 45%,
            rgba(0, 200, 255, 0.85) 55%,
            rgba(0, 0, 0, 0.98) 70%,
            rgba(0, 0, 0, 1) 100%
          )`,
          clipPath: phase === 'expanding' 
            ? 'circle(0% at 50% 50%)'
            : phase === 'fullscreen' || phase === 'redirecting'
            ? 'circle(150% at 50% 50%)'
            : 'circle(0% at 50% 50%)',
          transition: 'clip-path 500ms cubic-bezier(0.16,1,0.3,1)',
          opacity: phase === 'expanding' || phase === 'fullscreen' || phase === 'redirecting' ? 1 : 0,
          willChange: 'clip-path',
          transform: 'translateZ(0)',
        }}
      />

      {/* Animated Wave Overlay - Premium Fluid Morphing Effect */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 1 : 0,
          transition: 'opacity 0.5s ease',
          willChange: 'opacity',
          transform: 'translateZ(0)',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 50%, rgba(138, 43, 226, 0.5) 0%, transparent 55%),
              radial-gradient(ellipse 60% 40% at 30% 70%, rgba(0, 191, 255, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 70% 45% at 70% 30%, rgba(255, 20, 147, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 65% 35% at 20% 20%, rgba(124, 58, 237, 0.35) 0%, transparent 45%),
              radial-gradient(ellipse 75% 50% at 80% 80%, rgba(0, 115, 255, 0.35) 0%, transparent 50%)
            `,
            animation: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumWaveMorph 8s ease-in-out infinite' : 'none',
            mixBlendMode: 'screen',
            filter: 'blur(20px)',
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* Flowing Wave Lines - Premium Fluid Effect */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.7 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {[...Array(12)].map((_, i) => {
          const waveColors = [
            { start: 'rgba(138, 43, 226, 0.7)', mid: 'rgba(0, 191, 255, 0.8)', end: 'rgba(255, 20, 147, 0.7)' },
            { start: 'rgba(0, 191, 255, 0.7)', mid: 'rgba(124, 58, 237, 0.8)', end: 'rgba(138, 43, 226, 0.7)' },
            { start: 'rgba(255, 20, 147, 0.7)', mid: 'rgba(0, 115, 255, 0.8)', end: 'rgba(0, 191, 255, 0.7)' },
          ]
          const color = waveColors[i % 3]
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: '250%',
                height: `${2 + (i % 3)}px`,
                left: '-75%',
                top: `${15 + i * 7}%`,
                background: `linear-gradient(
                  90deg,
                  transparent 0%,
                  ${color.start} 15%,
                  ${color.mid} 50%,
                  ${color.end} 85%,
                  transparent 100%
                )`,
              animationName: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumWaveFlow' : 'none',
              animationDuration: `${2.5 + (i % 4) * 0.25}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${i * 0.15}s`,
                filter: `blur(${0.5 + (i % 2) * 0.5}px)`,
                willChange: 'transform',
                transform: 'translateZ(0)',
                boxShadow: `0 0 ${10 + i * 2}px ${color.mid}`,
              }}
            />
          )
        })}
      </div>

      {/* Premium Wave Curves - Sophisticated Fluid Effect */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.5 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.7, mixBlendMode: 'screen' }}>
          <defs>
            <linearGradient id={`${uniqueId}-gradient1`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(138, 43, 226, 0.7)" />
              <stop offset="50%" stopColor="rgba(0, 191, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 20, 147, 0.7)" />
            </linearGradient>
            <linearGradient id={`${uniqueId}-gradient2`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 191, 255, 0.7)" />
              <stop offset="50%" stopColor="rgba(124, 58, 237, 0.8)" />
              <stop offset="100%" stopColor="rgba(138, 43, 226, 0.7)" />
            </linearGradient>
            <filter id={`${uniqueId}-glow`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(6)].map((_, i) => {
            const yPos = 20 + i * 15
            return (
              <path
                key={i}
                d={`M 0 ${yPos} Q 25 ${yPos - 5}, 50 ${yPos} T 100 ${yPos}`}
                fill="none"
                stroke={`url(#${uniqueId}-gradient${(i % 2) + 1})`}
                strokeWidth="2.5"
                style={{
                  opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.6 : 0,
                  transition: 'opacity 0.5s ease, transform 0.3s ease',
                  filter: `url(#${uniqueId}-glow)`,
                  willChange: 'opacity, transform',
                  transform: 'translateZ(0)',
                  animationName: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumWaveFloat' : 'none',
                  animationDuration: `${2.5 + i * 0.3}s`,
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            )
          })}
        </svg>
      </div>
      
      {/* Secondary Expanding Layer - Optimized */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(255, 255, 255, 0.25) 0%,
            rgba(138, 43, 226, 0.4) 15%,
            rgba(0, 191, 255, 0.35) 25%,
            rgba(124, 58, 237, 0.3) 35%,
            rgba(255, 20, 147, 0.25) 40%,
            transparent 65%
          )`,
          clipPath: phase === 'expanding' 
            ? 'circle(0% at 50% 50%)'
            : phase === 'fullscreen' || phase === 'redirecting'
            ? 'circle(140% at 50% 50%)'
            : 'circle(0% at 50% 50%)',
          transition: 'clip-path 600ms cubic-bezier(0.19,1,0.22,1)',
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.85 : 0,
          filter: 'blur(40px)',
          willChange: 'clip-path, opacity',
          transform: 'translateZ(0)',
        }}
      />

      {/* Animated Particles Layer - Optimized for Performance */}
      <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'contents', contain: 'layout style paint' }}>
        {[...Array(60)].map((_, i) => {
          const size = 2 + (i % 4) * 1.5
          const delay = (i % 10) * 0.2
          const particleType = i % 3
          const colors = [
            { start: 'rgba(255, 255, 255, 0.8)', mid: 'rgba(138, 43, 226, 0.6)', end: 'rgba(0, 191, 255, 0.4)' },
            { start: 'rgba(0, 191, 255, 0.8)', mid: 'rgba(124, 58, 237, 0.6)', end: 'rgba(255, 20, 147, 0.4)' },
            { start: 'rgba(255, 20, 147, 0.8)', mid: 'rgba(0, 115, 255, 0.6)', end: 'rgba(138, 43, 226, 0.4)' },
          ]
          const color = colors[particleType]
          const left = (i * 7.3) % 100
          const top = (i * 11.7) % 100
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle, ${color.start} 0%, ${color.mid} 50%, ${color.end} 100%)`,
                boxShadow: `0 0 ${size * 2}px ${color.start}, 0 0 ${size * 3}px ${color.mid}`,
                animationName: 'premiumParticleFloat',
                animationDuration: `${2.5 + (i % 3) * 0.5}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${delay}s`,
                opacity: phase === 'fullscreen' || phase === 'redirecting' ? 1 : 0,
                transition: 'opacity 0.4s ease',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            />
          )
        })}
      </div>

      {/* Light Rays - Optimized */}
      <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'contents', contain: 'layout style paint' }}>
        {[...Array(12)].map((_, i) => {
          const angle = i * 30
          const rayColors = [
            { center: 'rgba(138, 43, 226, 0.25)', edge: 'rgba(0, 191, 255, 0.15)' },
            { center: 'rgba(0, 191, 255, 0.25)', edge: 'rgba(255, 20, 147, 0.15)' },
            { center: 'rgba(255, 20, 147, 0.25)', edge: 'rgba(124, 58, 237, 0.15)' },
            { center: 'rgba(124, 58, 237, 0.25)', edge: 'rgba(0, 115, 255, 0.15)' },
          ]
          const color = rayColors[i % 4]
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${angle}deg, transparent 0%, rgba(255,255,255,0.12) 40%, ${color.center} 48%, ${color.edge} 52%, rgba(255,255,255,0.08) 60%, transparent 100%)`,
                opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.7 : 0,
                animationName: 'premiumLightRay',
                animationDuration: `${2 + (i % 3) * 0.3}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${(i % 4) * 0.25}s`,
                transition: 'opacity 0.4s ease',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            />
          )
        })}
      </div>

      {/* Central Glow Pulse - Optimized */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, 0.5) 0%,
            rgba(138, 43, 226, 0.45) 15%,
            rgba(0, 191, 255, 0.4) 25%,
            rgba(124, 58, 237, 0.35) 35%,
            rgba(255, 20, 147, 0.3) 45%,
            rgba(0, 115, 255, 0.25) 55%,
            transparent 75%
          )`,
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 1 : 0,
          animation: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumGlowPulse 2s ease-in-out infinite' : 'none',
          filter: 'blur(80px)',
          transition: 'opacity 0.4s ease',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Secondary Glow Layer - Optimized */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, 0.6) 0%,
            rgba(0, 191, 255, 0.5) 20%,
            rgba(138, 43, 226, 0.4) 35%,
            transparent 60%
          )`,
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.85 : 0,
          animationName: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumGlowPulse' : 'none',
          animationDuration: '1.8s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '0.3s',
          filter: 'blur(60px)',
          transition: 'opacity 0.4s ease',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />

      {/* Gradient Wave Effect - Premium Multi-Layer with Liquid Flow */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(138, 43, 226, 0.45) 0%,
            rgba(0, 191, 255, 0.45) 20%,
            rgba(124, 58, 237, 0.45) 40%,
            rgba(255, 20, 147, 0.4) 60%,
            rgba(0, 115, 255, 0.4) 80%,
            rgba(138, 43, 226, 0.45) 100%
          )`,
          backgroundSize: '500% 500%',
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.4 : 0,
          animation: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumGradientWave 5s ease-in-out infinite' : 'none',
          mixBlendMode: 'screen',
          transition: 'opacity 0.4s ease',
          willChange: 'background-position, opacity',
          transform: 'translateZ(0)',
        }}
      />

      {/* Liquid Wave Surface - Premium Effect */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.4 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(138, 43, 226, 0.1) 2px,
                rgba(138, 43, 226, 0.1) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 191, 255, 0.08) 2px,
                rgba(0, 191, 255, 0.08) 4px
              )
            `,
            animation: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumLiquidWave 6s ease-in-out infinite' : 'none',
            mixBlendMode: 'screen',
            filter: 'blur(1px)',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* Premium Wave Ripple Effect - Enhanced with Multiple Layers */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.6 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {[...Array(8)].map((_, i) => {
          const rippleColors = [
            'rgba(138, 43, 226, 0.5)',
            'rgba(0, 191, 255, 0.45)',
            'rgba(255, 20, 147, 0.4)',
            'rgba(124, 58, 237, 0.35)',
            'rgba(0, 115, 255, 0.3)',
            'rgba(138, 43, 226, 0.25)',
            'rgba(0, 191, 255, 0.2)',
            'rgba(255, 20, 147, 0.15)',
          ]
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${250 + i * 180}px`,
                height: `${250 + i * 180}px`,
                border: `2px solid ${rippleColors[i]}`,
                borderRadius: '50%',
                boxShadow: `0 0 ${15 + i * 5}px ${rippleColors[i]}, inset 0 0 ${20 + i * 8}px ${rippleColors[i]}`,
                animationName: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumWaveRipple' : 'none',
                animationDuration: `${1.8 + i * 0.25}s`,
                animationTimingFunction: 'ease-out',
                animationIterationCount: 'infinite',
                animationDelay: `${i * 0.15}s`,
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            />
          )
        })}
      </div>

      {/* Expanding Ripple Waves - Optimized */}
      {phase === 'expanding' || phase === 'fullscreen' || phase === 'redirecting' ? (
        <>
          {[...Array(3)].map((_, i) => {
            const delay = i * 0.1
            const size = 2000 - (i * 300)
            const borderWidth = i === 0 ? 2.5 : i === 1 ? 2 : 1.5
            const colors = [
              'rgba(138, 43, 226, 0.35)',
              'rgba(0, 191, 255, 0.3)',
              'rgba(255, 20, 147, 0.25)',
            ]
            return (
              <div 
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: phase === 'expanding' ? '0px' : `${size}px`,
                  height: phase === 'expanding' ? '0px' : `${size}px`,
                  border: `${borderWidth}px solid ${colors[i]}`,
                  boxShadow: `0 0 ${15 + i * 8}px ${colors[i]}`,
                  transition: `width ${0.8 + i * 0.1}s cubic-bezier(0.16,1,0.3,1), height ${0.8 + i * 0.1}s cubic-bezier(0.16,1,0.3,1), opacity ${0.8 + i * 0.1}s ease`,
                  opacity: phase === 'fullscreen' || phase === 'redirecting' ? 0.25 - (i * 0.05) : 0.5 - (i * 0.1),
                  transitionDelay: `${delay}s`,
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)',
                }}
              />
            )
          })}
        </>
      ) : null}

      {/* Text Reveal - Ultra Premium Brand Name with Advanced Effects - Optimized */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
        style={{
          opacity: phase === 'fullscreen' || phase === 'redirecting' ? 1 : 0,
          transform: phase === 'fullscreen' || phase === 'redirecting' 
            ? 'translate(-50%, -50%) scale(1) translateZ(0)' 
            : 'translate(-50%, -50%) scale(0.8) translateZ(0)',
          transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative">
          {/* Main Text with Ultra Rich Gradient */}
          <div 
            className="text-7xl md:text-9xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(138,43,226,0.95) 20%, rgba(0,191,255,0.9) 40%, rgba(255,20,147,0.95) 60%, rgba(124,58,237,0.9) 80%, rgba(255,255,255,1) 100%)',
              backgroundSize: '250% 250%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.7)) drop-shadow(0 0 60px rgba(138,43,226,0.5)) drop-shadow(0 0 90px rgba(0,191,255,0.4))',
              animation: phase === 'fullscreen' || phase === 'redirecting' ? 'premiumGradientWave 3.5s ease-in-out infinite' : 'none',
              willChange: 'background-position',
              transform: 'translateZ(0)',
            }}
          >
            <span className="inline-block">HUMIND</span>
          </div>
          
          {/* Multi-Layer Glow Effects Behind Text - Optimized */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white/35 blur-3xl pointer-events-none" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            HUMIND
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-purple-500/25 blur-2xl pointer-events-none" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            HUMIND
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-cyan-400/20 blur-xl pointer-events-none" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            HUMIND
          </div>
        </div>
      </div>
    </div>
  )
}


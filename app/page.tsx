"use client"

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { HomeVideoCarousel } from "@/components/home-video-carousel"
import { ClientHighlights } from "@/components/client-highlights"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { OffreSection } from "@/components/offre-section"
import { AgenceHomeSection } from "@/components/agence-home-section"
import { HumindSection } from "@/components/humind-section"
import { ContactHomeSection } from "@/components/contact-home-section"
import { SectionDivider } from "@/components/section-divider"
import { GlobalAtmosphere } from "@/components/global-atmosphere"
import { ImmersiveIntro } from "@/components/immersive-intro"

export default function Home() {
  // Always start with false to avoid hydration mismatch
  const [introComplete, setIntroComplete] = useState(false)

  // Use useLayoutEffect to check URL parameter and handle scroll
  // This runs synchronously before paint, preventing intro from showing
  useLayoutEffect(() => {
    // Check URL parameter directly (available immediately on client)
    const urlParams = new URLSearchParams(window.location.search)
    const skipIntroParam = urlParams.get('skipIntro')
    const hash = window.location.hash.substring(1) // Remove the # symbol
    
    if (skipIntroParam === 'true') {
      // Skip intro immediately - before any paint happens
      setIntroComplete(true)
      
      // Remove the parameter from URL without reload
      urlParams.delete('skipIntro')
      const newUrl = urlParams.toString() 
        ? `${window.location.pathname}?${urlParams.toString()}${hash ? `#${hash}` : ''}`
        : `${window.location.pathname}${hash ? `#${hash}` : ''}`
      window.history.replaceState({}, '', newUrl)
      
      // Don't scroll here - let useEffect handle it after content renders
      // Just ensure we're at top initially
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      // Always ensure page starts at top if not skipping intro
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  // Handle scroll to section after content is rendered
  useEffect(() => {
    if (introComplete) {
      const hash = window.location.hash.substring(1)
      if (hash) {
        // Wait a bit for content to render, then scroll to section
        const timer = setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            // Calculate offset for navbar
            const navbarHeight = 80
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 200)
        
        return () => clearTimeout(timer)
      }
    }
  }, [introComplete])

  const contentTransition = useMemo(
    () =>
      [
        "relative z-10 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,0.84,0.34,1)]",
        introComplete ? "opacity-100 translate-y-0 scale-100 blur-0" : "pointer-events-none opacity-0 translate-y-6 scale-[0.97] blur-sm",
      ].join(" "),
    [introComplete]
  )

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/Banque d_images/backv1.mp4" type="video/mp4" />
        </video>
      </div>

      {!introComplete && (
        <div data-intro-wrapper>
          <ImmersiveIntro onComplete={handleIntroComplete} />
        </div>
      )}

      {introComplete && (
        <>
          <Navbar />
          <GlobalAtmosphere />

          <div className={contentTransition}>
            <HeroSection />
            <HomeVideoCarousel />
            <ClientHighlights />
            <SectionDivider label="Services" />
            <ServicesSection />
            <SectionDivider label="Réalisations" />
            <PortfolioSection />
            <SectionDivider label="Humind" />
            <HumindSection />
            <SectionDivider label="Offres" />
            <OffreSection />
            <SectionDivider label="Agence" />
            <AgenceHomeSection />
            <SectionDivider label="Contact" />
            <ContactHomeSection />
            <Footer />
          </div>
        </>
      )}
    </main>
  )
}

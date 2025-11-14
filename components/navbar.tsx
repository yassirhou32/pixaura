"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Offre", href: "/#offre" },
    { label: "Agence", href: "/#agence" },
    { label: "Humind", href: "/humind" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-out ${
        scrolled
          ? [
              "border border-white/12",
              "bg-white/[0.03]",
              "supports-[backdrop-filter]:bg-white/[0.03]",
              "backdrop-blur-[28px]",
              "shadow-[0_18px_60px_-18px_rgba(15,23,42,0.65)]",
              "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(120deg,rgba(69,123,247,0.22)_0%,rgba(255,255,255,0.06)_45%,rgba(69,123,247,0.22)_100%)] before:opacity-90 before:transition before:duration-700 before:content-['']",
              "after:pointer-events-none after:absolute after:left-1/2 after:top-full after:-z-20 after:h-32 after:w-[80%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[999px] after:bg-[radial-gradient(circle,rgba(59,130,246,0.24)_0%,transparent_75%)] after:opacity-60 after:blur-3xl after:content-['']",
            ].join(" ")
          : "bg-transparent"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-[1920px] items-center justify-between px-6 lg:px-16 transition-all duration-700 ${
          scrolled ? "py-1.5" : "py-3"
        }`}
      >
        <a 
          href="/?skipIntro=true" 
          className="transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            // Always redirect to home page and skip intro, go directly to Hero Section
            if (window.location.pathname === "/") {
              // If already on home page, just scroll to top (Hero Section)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
              // Navigate to home page with skipIntro parameter to skip intro
              window.location.href = "/?skipIntro=true"
            }
          }}
        >
          <Image
            src="/Pixaura_it .png"
            alt="Pixaura International Logo"
            width={500}
            height={150}
            className="h-28 w-auto object-contain"
            priority
          />
        </a>

        <div className="relative hidden items-center gap-3 rounded-3xl border border-white/10 bg-black/20 px-5 py-1.5 text-white backdrop-blur-xl xl:flex">
          <div className="absolute inset-0 rounded-3xl border border-white/10 opacity-40" />
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-xl px-5 py-2 text-sm font-bold text-white/95 transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`absolute inset-0 rounded-xl bg-primary/15 opacity-0 transition-opacity duration-500 ${
                  hoveredItem === item.href ? "opacity-100" : "group-hover:opacity-70"
                }`}
              />
              <div
                className={`absolute bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
                  hoveredItem === item.href ? "w-[calc(100%-1rem)] opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute top-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-all duration-500 ${
                  hoveredItem === item.href ? "w-[calc(100%-1rem)] opacity-100" : "opacity-0"
                }`}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full bg-primary transition-all duration-500 ${
                    hoveredItem === item.href ? "scale-150 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <Link
            href="/contact#rendez-vous"
            className="group relative overflow-hidden rounded-full px-9 py-3 text-sm font-bold uppercase tracking-wide text-white"
            style={{
              background: "linear-gradient(135deg, #0073ff 0%, #1aa3ff 50%, #0073ff 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-[#1aa3ff] to-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute inset-0 translate-x-[-100%] rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2.5">
              Prendre un rendez-vous
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/20 bg-black/30 p-4 text-white transition-colors duration-300 hover:border-primary hover:text-primary xl:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-300 ease-out xl:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6 text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-lg font-semibold transition-colors duration-300 hover:border-primary/60 hover:bg-primary/20"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact#rendez-vous"
            className="group relative overflow-hidden rounded-full px-10 py-5 text-center text-base font-bold uppercase tracking-wide text-white"
            onClick={() => setIsOpen(false)}
            style={{
              background: "linear-gradient(135deg, #0073ff 0%, #1aa3ff 50%, #0073ff 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-[#1aa3ff] to-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute inset-0 translate-x-[-100%] rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] group-hover:opacity-100" />
            <span className="relative z-10 flex items-center justify-center gap-2.5">
              Prendre un rendez-vous
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

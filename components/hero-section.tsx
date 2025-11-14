"use client"

import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"

const headlineVariants = [
  (
    <>
      l&apos;aura des marques <span className="hero-highlight">ambitieuses</span> sur chaque continent.
    </>
  ),
  (
    <>
      <span className="block">idées</span>
      <span className="block">audacieuses</span>
      <span className="block">impact global</span>
      <span className="block">
        <span className="hero-highlight">rayonne</span> pour
      </span>
      <span className="block">chaque marque.</span>
    </>
  ),
  (
    <>
      des activations créatives <span className="hero-highlight">haute performance</span> pour amplifier l&apos;impact.
    </>
  ),
]

const subHeadline =
  "Agence créative française aux ambitions globales, nous sculptons des expériences audiovisuelles et digitales premium pour les marques qui veulent rayonner dans le monde entier."

const heroProjects = [
  {
    id: 1,
    client: "Touraine Cars",
    title: "Night Drive Experience",
    category: "Film • Activation",
    image: "/Banque d_images/Copie de M7_03225 - Copie.jpg",
  },
  {
    id: 2,
    client: "BSD / UFC Paris",
    title: "Stage MMA Immersion",
    category: "Social • Event",
    image: "/Banque d_images/StageUfc.jpg",
  },
  {
    id: 3,
    client: "Immobilier Signature",
    title: "Résidences Lumière",
    category: "Film • Branding",
    image: "/Banque d_images/Copie de M7_01248.jpg",
  },
]

const DISPLAY_DURATION = 5200
const ANIMATION_DURATION = 900

const getNodeText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }
  if (Array.isArray(node)) {
    return node.map((child) => getNodeText(child)).join("")
  }
  if (node && typeof node === "object" && "props" in (node as any)) {
    return getNodeText((node as any).props?.children)
  }
  return ""
}

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const longestHeadlineIndex = useMemo(() => {
    let longest = 0
    let length = 0
    headlineVariants.forEach((variant, index) => {
      const currentLength = getNodeText(variant).length
      if (currentLength > length) {
        length = currentLength
        longest = index
      }
    })
    return longest
  }, [])

  const placeholderRef = useRef<HTMLDivElement>(null)
  const [placeholderHeight, setPlaceholderHeight] = useState<number>()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true)
      setActiveIndex((current) => {
        setPreviousIndex(current)
        return (current + 1) % headlineVariants.length
      })
    }, DISPLAY_DURATION)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!isAnimating) return
    const timeoutId = setTimeout(() => {
      setPreviousIndex(null)
      setIsAnimating(false)
    }, ANIMATION_DURATION)
    return () => clearTimeout(timeoutId)
  }, [isAnimating])

  useEffect(() => {
    const measure = () => {
      if (placeholderRef.current) {
        const { height } = placeholderRef.current.getBoundingClientRect()
        setPlaceholderHeight(height)
      }
    }

    measure()
    window.addEventListener("resize", measure)
    return () => {
      window.removeEventListener("resize", measure)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-36 pb-24 md:px-12 lg:gap-16 xl:max-w-7xl">
        <div className="grid gap-14 text-white lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-10 xl:gap-14">
          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <Reveal delay={100}>
                <div className="relative max-w-4xl">
                  <span className="absolute -left-6 top-2 h-14 w-14 rounded-full bg-[radial-gradient(circle,_rgba(87,140,255,0.35),_rgba(0,0,0,0)_70%)] blur-xl" />
                  <div className="flex flex-col gap-2 md:gap-3">
                    <span className="text-lg font-semibold uppercase tracking-[0.4em] text-white/70 md:text-xl">
                      Nous révélons
                    </span>
                    <div
                      className="hero-headline-container text-[36px] font-black leading-[1.04] tracking-tight text-white md:text-[56px] lg:text-[72px]"
                      aria-live="polite"
                      style={placeholderHeight ? { minHeight: placeholderHeight } : undefined}
                    >
                      <div ref={placeholderRef} className="hero-headline hero-headline--ghost">
                        {headlineVariants[longestHeadlineIndex]}
                      </div>
                      <span
                        key={activeIndex}
                        className={`hero-headline ${isAnimating ? "hero-headline--enter" : ""}`}
                      >
                        {headlineVariants[activeIndex]}
                      </span>
                      {previousIndex !== null && (
                        <span className="hero-headline hero-headline--exit">{headlineVariants[previousIndex]}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <p className="max-w-2xl text-base text-white/80 md:text-lg lg:text-xl">{subHeadline}</p>
              </Reveal>
            </div>

            <Reveal delay={360}>
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href="/realisations"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-9 py-4 text-sm font-semibold uppercase tracking-[0.32em] text-white transition-all duration-500 hover:border-white hover:bg-white/10"
                  >
                    Voir nos réalisations
                    <Play className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                  </Link>
                </div>

                <div className="lg:hidden">
                  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
                    {heroProjects.map((project, index) => (
                      <Reveal
                        key={project.id}
                        delay={index * 140}
                      className="hero-highlight-card group relative isolate flex h-[330px] min-w-[200px] max-w-[210px] snap-start flex-col overflow-hidden rounded-[24px] border border-white/15 bg-white/5 pb-5 text-white backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10 sm:h-[350px] sm:min-w-[210px] sm:max-w-[220px]"
                      >
                      <div className="relative h-[58%] w-full overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                            sizes="220px"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />
                          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-5 pb-4">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">
                              {project.client}
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
                              {project.category}
                            </span>
                          </div>
                        </div>

                      <div className="flex flex-1 flex-col justify-between px-5 pt-5">
                          <h3 className="text-sm font-semibold leading-snug text-white">{project.title}</h3>
                          <div className="mt-4 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-white/50">
                            <span className="h-px flex-1 bg-white/20" />
                            <Link href="/realisations" className="inline-flex items-center gap-2 text-white transition hover:text-white/70">
                              Explorer
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative hidden w-full items-start justify-end lg:flex lg:mt-32 xl:mt-40">
            <div className="flex w-full max-w-xl justify-end gap-6 xl:max-w-2xl xl:gap-8">
              {heroProjects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={index * 180}
                  className={`hero-highlight-card group relative isolate flex h-[360px] w-[220px] flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white/5 pb-5 text-white backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10 xl:h-[400px] xl:w-[240px] ${
                    index === 1 ? "lg:-mt-8 xl:-mt-14" : ""
                  } ${index === 2 ? "lg:-mt-16 xl:-mt-30" : ""}`}
                >
                  <div className="relative h-[58%] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 1280px) 220px, 260px"
                      priority={index === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-6 pb-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">
                        {project.client}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between px-6 pt-5">
                    <h3 className="text-base font-semibold leading-snug text-white">{project.title}</h3>
                    <div className="mt-4 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-white/50">
                      <span className="h-px flex-1 bg-white/20" />
                      <Link href="/realisations" className="inline-flex items-center gap-2 text-white transition hover:text-white/70">
                        Explorer
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
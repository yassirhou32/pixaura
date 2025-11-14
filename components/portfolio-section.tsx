"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const latestProjects = [
  {
    id: 1,
    client: "Touraine Cars",
    title: "Halloween — Shooting Éphémère",
    category: "Film / Vidéo",
    tags: ["Film / Vidéo", "Social", "Event"],
    video: "/Banque d_images/halowen.mp4",
    poster: "/Banque d_images/Copie de IMG_7149.jpg",
  },
  {
    id: 2,
    client: "Mr Microbe",
    title: "Projet Artistique & Thérapeutique",
    category: "Photo",
    tags: ["Photo", "Social", "Branding"],
    video: null,
    poster: "/Banque d_images/art1.jpg",
  },
  {
    id: 3,
    client: "BSK Immobilier",
    title: "Interviews Conseillers Immobiliers",
    category: "Film / Vidéo",
    tags: ["Film / Vidéo", "Social", "Corporate"],
    video: "/Banque d_images/Immobilier.mp4",
    poster: "/Banque d_images/Copie de M7_00487.jpg",
  },
  {
    id: 4,
    client: "Castles Rally",
    title: "Remerciements 2025",
    category: "Film / Vidéo",
    tags: ["Film / Vidéo", "Photo", "Social"],
    video: "/Banque d_images/rally1.mp4",
    poster: "/Banque d_images/Copie de DSC04796.jpg",
  },
  {
    id: 5,
    client: "Castles Rally",
    title: "Première Boucle 2025",
    category: "Film / Vidéo",
    tags: ["Film / Vidéo", "Photo", "Event"],
    video: "/Banque d_images/rally2.mp4",
    poster: "/Banque d_images/Copie de M7_02930.jpg",
  },
  {
    id: 6,
    client: "Vouvray/Chenin",
    title: "Aménagement Sur-Mesure",
    category: "Photo",
    tags: ["Photo", "Branding", "Design"],
    video: null,
    poster: "/Banque d_images/Copie de M7_09197.jpg",
  },
  {
    id: 7,
    client: "Stradale Events",
    title: "Interview Exclusive Humind",
    category: "Film / Vidéo",
    tags: ["Film / Vidéo", "Social", "Podcast"],
    video: "/Banque d_images/pod1.mp4",
    poster: "/Banque d_images/Copie de M7_03194.jpg",
  },
  {
    id: 8,
    client: "BSD / UFC Paris",
    title: "Stage MMA — God of War",
    category: "Film / Vidéo",
    tags: ["Film / Vidéo", "Photo", "Social"],
    video: "/Banque d_images/stageMMa.mp4",
    poster: "/Banque d_images/StageUfc.jpg",
  },
]

export function PortfolioSection() {
  const [activeId, setActiveId] = useState<number>(latestProjects[0]?.id ?? 0)
  const [previewTransform, setPreviewTransform] = useState("translate3d(0, 0, 0)")
  const [stageHeight, setStageHeight] = useState<number | undefined>(undefined)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const listRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const previewStageRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<Record<number, HTMLButtonElement | null>>({})

  const activeProject = latestProjects.find((project) => project.id === activeId) ?? latestProjects[0]

  const updatePreviewPosition = (projectId: number) => {
    if (!listRef.current || !previewRef.current || !previewStageRef.current) return
    const row = rowRefs.current[projectId]
    if (!row) return

    const listRect = listRef.current.getBoundingClientRect()
    const rowRect = row.getBoundingClientRect()
    const previewHeight = previewRef.current.getBoundingClientRect().height
    const listHeight = listRect.height

    const offsetTop = rowRect.top - listRect.top
    const target = offsetTop
    const clamped = Math.max(0, Math.min(target, listHeight - previewHeight))

    setPreviewTransform(`translate3d(0, ${clamped}px, 0)`)
    setStageHeight(listHeight)
  }

  const isChangingRef = useRef(false)
  const videoLoadTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const handleActivate = (projectId: number) => {
    // Prevent rapid changes that could cause blocking
    if (isChangingRef.current || projectId === activeId) return
    
    // Cancel any pending video loads
    if (videoLoadTimeoutRef.current) {
      clearTimeout(videoLoadTimeoutRef.current)
      videoLoadTimeoutRef.current = null
    }
    
    isChangingRef.current = true
    
    // Use requestIdleCallback for non-blocking state update
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setActiveId(projectId)
        isChangingRef.current = false
      }, { timeout: 50 })
    } else {
      // Fallback for browsers without requestIdleCallback
      requestAnimationFrame(() => {
        setActiveId(projectId)
        setTimeout(() => {
          isChangingRef.current = false
        }, 50)
      })
    }
  }

  useEffect(() => {
    // Defer position update to avoid blocking
    let rafId: number | null = null
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        rafId = requestAnimationFrame(() => updatePreviewPosition(activeId))
      }, { timeout: 100 })
    } else {
      rafId = requestAnimationFrame(() => updatePreviewPosition(activeId))
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [activeId])

  useEffect(() => {
    if (!listRef.current) return
    
    let timeoutId: NodeJS.Timeout
    const observer = new ResizeObserver(() => {
      // Debounce resize updates
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          updatePreviewPosition(activeId)
          setStageHeight(listRef.current?.getBoundingClientRect().height)
        })
      }, 50)
    })
    observer.observe(listRef.current)
    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [activeId])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const onResize = () => {
      // Debounce resize events
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        requestAnimationFrame(() => updatePreviewPosition(activeId))
      }, 100)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", onResize)
    }
  }, [activeId])

  useEffect(() => {
    setTimeout(() => updatePreviewPosition(activeId), 120)
  }, [])

  // Ultra-simplified video loading - ASYNC, NON-BLOCKING, DEFERRED
  useEffect(() => {
    const video = videoRef.current
    if (!video || !activeProject?.video) {
      return
    }

    // Complete cleanup first
    video.pause()
    video.removeAttribute('src')
    video.load()
    
    let isMounted = true
    let playTimeout: NodeJS.Timeout | null = null

    // Defer video loading to avoid blocking
    const handleCanPlay = () => {
      if (!isMounted || !video) return
      // Play only when ready - simple and safe
      playTimeout = setTimeout(() => {
        if (video && isMounted && video.readyState >= 2) {
          video.play().catch(() => {
            // Silent error - don't block UI
          })
        }
      }, 150)
    }

    const handleError = () => {
      // Just pause on error - show poster
      if (isMounted && video) {
        video.pause()
      }
    }

    // Delay video loading to prevent blocking on hover
    videoLoadTimeoutRef.current = setTimeout(() => {
      if (!isMounted || !video) return

      // Set source
      video.src = activeProject.video
      video.preload = 'metadata' // Only metadata, not full video
      
      // Simple event listeners
      video.addEventListener('canplay', handleCanPlay, { once: true, passive: true })
      video.addEventListener('error', handleError, { once: true, passive: true })

      // Load in idle time - non-blocking
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          if (isMounted && video) {
            video.load()
          }
        }, { timeout: 200 })
      } else {
        // Fallback - use setTimeout for non-blocking
        setTimeout(() => {
          if (isMounted && video) {
            video.load()
          }
        }, 200)
      }
    }, 200)

    return () => {
      isMounted = false
      if (playTimeout) clearTimeout(playTimeout)
      if (videoLoadTimeoutRef.current) {
        clearTimeout(videoLoadTimeoutRef.current)
        videoLoadTimeoutRef.current = null
      }
      if (video) {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('error', handleError)
        video.pause()
        video.removeAttribute('src')
        video.load()
      }
    }
  }, [activeProject?.video, activeId])

  return (
    <section id="portfolio" className="portfolio-latest-section relative overflow-hidden px-4 pb-24 pt-24 text-white md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <Reveal className="latest-header-top">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4 flex-1 max-w-6xl">
              <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.5em] text-white shadow-[0_0_35px_rgba(89,129,255,0.25)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                Projets récents
              </span>
              <h2 className="latest-heading">
                Scenes premium
                <br />
                pour les marques audacieuses.
              </h2>
              <p className="latest-subheading">
                Survolez une réalisation pour dévoiler son univers.
                <br />
                <span className="latest-subheading-highlight">
                  Chaque projet que nous pilotons combine narration en temps réel et craft digital pour livrer des expériences mémorables.
                </span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="latest-count">+{String(latestProjects.length).padStart(2, "0")} projets</span>
            </div>
          </div>
        </Reveal>

        <div className="latest-layout">
          <div
            className="latest-preview-stage"
            ref={previewStageRef}
            style={stageHeight ? { minHeight: stageHeight } : undefined}
          >
            <div className="latest-preview-wrapper" style={{ transform: previewTransform }}>
              <Reveal delay={100} className="latest-preview-reveal">
                <div ref={previewRef} className="latest-preview-card">
                  <div className="latest-preview-media">
                    {activeProject?.video ? (
                      <video
                        ref={videoRef}
                        key={`video-${activeProject.id}`}
                        poster={activeProject.poster}
                        muted
                        loop
                        playsInline
                        preload="none"
                        style={{
                          opacity: 1,
                          willChange: 'auto',
                          pointerEvents: 'none'
                        }}
                      />
                    ) : (
                      <Image
                        src={activeProject?.poster ?? "/placeholder.jpg"}
                        alt={activeProject?.title ?? "Project preview"}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <div className="latest-preview-glass" />
                  </div>

                  <div className="latest-preview-meta">
                    <div className="latest-preview-tags">
                      <span>{activeProject?.client}</span>
                      <span className="divider" />
                      <span>{activeProject?.category}</span>
                    </div>
                    <h3>{activeProject?.title}</h3>
                    <Link
                      href="/realisations"
                      className="latest-preview-link"
                    >
                      Explorer le projet
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="latest-content">
            <div className="latest-list" ref={listRef}>
              {latestProjects.map((project, index) => {
                const isActive = project.id === activeProject?.id
                return (
                  <Reveal key={project.id} delay={index * 90} className="w-full">
                    <button
                      type="button"
                      ref={(node) => {
                        rowRefs.current[project.id] = node
                      }}
                      onMouseEnter={() => handleActivate(project.id)}
                      onFocus={() => handleActivate(project.id)}
                      onClick={() => handleActivate(project.id)}
                      className={`latest-card ${isActive ? "is-active" : ""}`}
                      aria-pressed={isActive}
                    >
                      <div className="latest-card-left">
                        <span className="latest-client">{project.client}</span>
                        <span className="latest-title">{project.title}</span>
                      </div>
                      <div className="latest-card-right">
                        <span className="latest-category">{project.category}</span>
                        <div className="latest-tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className="latest-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  </Reveal>
                )
              })}
            </div>
            <Reveal delay={260} className="latest-cta">
              <Link
                href="/realisations"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Voir toutes les réalisations
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

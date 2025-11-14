"use client"

import { useEffect, useState } from "react"

export function GlobalAtmosphere() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_80%_10%,rgba(68,120,255,0.08),transparent_80%)]" />
      <div
        className="absolute inset-0 opacity-35 transition-[background] duration-700"
        style={{
          background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(26,163,255,0.18), transparent 70%)`,
        }}
      />
      <div className="absolute inset-0 bg-[url('/Banque d_images/noise.png')] opacity-[0.05]" />
    </div>
  )
}

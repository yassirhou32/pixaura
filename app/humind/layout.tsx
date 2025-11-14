import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Humind - Pixaura_IT",
}

export default function HumindLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="humind-bg-fix"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                document.documentElement.style.backgroundColor = '#000000';
                document.body.style.backgroundColor = '#000000';
              }
            })();
          `,
        }}
      />
      {children}
    </>
  )
}


"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
]

const exportLinks = [
  { href: "/medical", label: "Pharmaceutical Exports" },
  { href: "/marine-exports", label: "Marine Exports" },
  { href: "/aeronautical-exports", label: "Aeronautical Exports" },
]

const getSectionLinks = (pathname: string) => {
  if (pathname === "/") {
    return [
      { href: "/#about", label: "About" },
      { href: "/#references", label: "References" },
      { href: "/#reports", label: "Reports" },
    ]
  } else if (pathname === "/medical") {
    return [
      { href: "/medical#products", label: "Products" },
      { href: "/medical#certifications", label: "Certifications" },
      { href: "/medical#compliance", label: "Compliance" },
    ]
  } else if (pathname === "/marine-exports") {
    return [
      { href: "/marine-exports#products", label: "Marine Parts" },
      { href: "/marine-exports#services", label: "Services" },
      { href: "/marine-exports#markets", label: "Markets" },
    ]
  } else if (pathname === "/aeronautical-exports") {
    return [
      { href: "/aeronautical-exports#coming-soon", label: "Coming Soon" },
      { href: "/aeronautical-exports#updates", label: "Updates" },
    ]
  }
  return []
}

interface IslandNavbarProps {
  showLogo?: boolean
}

export default function IslandNavbar({ showLogo = false }: IslandNavbarProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const sectionLinks = getSectionLinks(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    if (mql.matches) setOpen(false)
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
      }
      document.addEventListener("keydown", onKey)
      return () => {
        document.body.style.overflow = original
        document.removeEventListener("keydown", onKey)
      }
    }
  }, [open])

  return (
    <>
      <div className="fixed top-2 left-2 right-2 sm:left-3 sm:right-3 z-50 flex justify-center">
        <div
          className="relative flex w-full max-w-4xl items-center justify-between rounded-full border border-white/60 bg-white/95 backdrop-blur-md shadow-lg px-3 sm:px-4 py-2 transition-all duration-300"
          style={{ transform: scrolled ? "scale(0.98)" : "scale(1)" }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 rounded-full px-1 sm:px-2 py-1 text-sm font-semibold text-gray-900 no-underline"
          >
            {showLogo &&
            (pathname === "/medical" || pathname === "/marine-exports" || pathname === "/aeronautical-exports") ? (
              <Image
                src="/images/hamadco-logo.png"
                alt="Hamad Co Exports"
                width={120}
                height={32}
                className="h-6 sm:h-8 w-auto"
              />
            ) : (
              <>
                <span
                  className="grid h-6 w-6 sm:h-8 sm:w-8 place-items-center rounded-full font-semibold text-xs sm:text-sm"
                  style={{
                    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important",
                    color: "#ffffff !important",
                  }}
                >
                  H
                </span>
                <span className="text-gray-900">Hamadco</span>
              </>
            )}
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1 mx-1">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium text-gray-600 no-underline ${
                    active ? "bg-gray-900/10" : ""
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>
                </Link>
              )
            })}

            <div className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-gray-600 no-underline hover:bg-gray-900/5 flex items-center gap-1 cursor-pointer"
              >
                <span className="relative z-10">We Export</span>
                <svg
                  className={`w-4 h-4 transition-transform group-hover:rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                {exportLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {sectionLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-gray-500 no-underline hover:text-gray-700"
              >
                <span className="relative z-10">{l.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm no-underline transition-all hover:bg-gray-800 hover:border-gray-800"
          >
            <span>Get Quote</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-gray-900/10 bg-white/90 text-gray-900 transition-all duration-200"
          >
            <div className="relative w-4 h-4 sm:w-5 sm:h-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : "translate-y-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-1.5" : "translate-y-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-60 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-16 sm:top-18 left-2 right-2 sm:left-4 sm:right-4 rounded-2xl bg-white shadow-2xl border border-gray-200 z-61 transition-all duration-300 transform ${
            open ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95"
          }`}
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <div className="h-px bg-gray-100 mb-4" />

            <nav className="flex flex-col space-y-1">
              {links.map((l, index) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium text-gray-800 no-underline hover:bg-gray-50 transition-all duration-200 ${
                    open ? "animate-slide-down-fade" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {l.label}
                </Link>
              ))}

              <div className="py-2 group">
                <div className="text-sm font-semibold text-gray-900 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors duration-200 flex items-center justify-between">
                  <span>We Export</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  {exportLinks.map((l, index) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`block rounded-xl px-6 py-2 text-sm font-medium text-gray-600 no-underline hover:bg-gray-50 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 ${
                        open ? "animate-slide-down-fade" : ""
                      }`}
                      style={{
                        animationDelay: `${(links.length + index) * 50}ms`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {sectionLinks.map((l, index) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-4 py-2 text-sm font-medium text-gray-600 no-underline hover:bg-gray-50 transition-all duration-200 ${
                    open ? "animate-slide-down-fade" : ""
                  }`}
                  style={{ animationDelay: `${(links.length + exportLinks.length + index) * 50}ms` }}
                >
                  {l.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className={`mt-4 inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-white font-medium no-underline hover:bg-gray-800 transition-all duration-200 ${
                  open ? "animate-slide-down-fade" : ""
                }`}
                style={{ animationDelay: `${(links.length + exportLinks.length + sectionLinks.length) * 50}ms` }}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

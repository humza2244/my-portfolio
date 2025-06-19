'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About Me', href: '/about' },
  { name: 'Work Experience', href: '/workexperience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Case Studies', href: '/casestudies' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/home' && (pathname === '/' || pathname === '/home')) {
      return true
    }
    return pathname === href
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-6 py-4 shadow-lg shadow-purple-500/10">
          <div className="flex items-center justify-between">
            
            {/* logo */}
            <Link 
              href="/home" 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-black px-3 py-2 rounded-lg">
                  <span className="font-bold text-white text-xl">HB</span>
                </div>
              </div>
            </Link>

            {/* desktop navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 font-mono text-sm transition-all duration-300 rounded-xl ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-purple-600/80 to-pink-600/80 shadow-lg shadow-purple-500/30'
                      : 'text-purple-300 hover:text-white hover:bg-purple-500/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* resume button */}
            <div className="hidden lg:block">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-mono text-sm hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Résumé
              </a>
            </div>

            {/* mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-2 text-purple-300 hover:text-white transition-colors duration-300"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pt-6 border-t border-purple-500/30">
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 font-mono text-sm transition-all duration-300 rounded-xl ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-purple-600/80 to-pink-600/80 shadow-lg shadow-purple-500/30'
                        : 'text-purple-300 hover:text-white hover:bg-purple-500/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* mobile resume button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-mono text-sm text-center hover:from-purple-500 hover:to-pink-500 transition-all duration-300 mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download Résumé
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

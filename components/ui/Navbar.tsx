'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { content } from '@/data/content'
export default function Navbar () {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null),
    first = useRef<HTMLAnchorElement>(null),
    progress = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handle = () => {
      setScrolled(scrollY > 40)
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - innerHeight
      )
      if (progress.current)
        progress.current.style.transform = `scaleX(${Math.max(
          0,
          Math.min(1, scrollY / max)
        )})`
    }
    handle()
    addEventListener('scroll', handle, { passive: true })
    return () => removeEventListener('scroll', handle)
  }, [])
  useEffect(() => {
    if (!open) return
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    first.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        button.current?.focus()
      }
      if (e.key === 'Tab') {
        const els = Array.from(
          document.querySelectorAll<HTMLElement>('#mobile-navigation a')
        )
        if (!els.length) return
        const a = els[0],
          z = els[els.length - 1]
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault()
          z.focus()
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault()
          a.focus()
        }
      }
    }
    const resize = () => {
      if (innerWidth > 900) setOpen(false)
    }
    addEventListener('keydown', onKey)
    addEventListener('resize', resize)
    return () => {
      document.body.style.overflow = old
      removeEventListener('keydown', onKey)
      removeEventListener('resize', resize)
    }
  }, [open])
  return (
    <>
      <header className={`nav-shell ${scrolled || open ? 'nav-scrolled' : ''}`}>
        <div className='container-grid'>
          <a href='#hero' onClick={() => setOpen(false)} className='nav-brand'>
            <span className='brand-symbol'>✳</span>
            {content.brand}
            <span aria-hidden='true'>®</span>
          </a>
          <nav className='desktop-nav' aria-label='Primary navigation'>
            {content.nav.map(link => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className='nav-actions'>
            <a href='#contact' className='nav-talk'>
              LET&apos;S TALK <ArrowUpRight size={17} />
            </a>
            <button
              ref={button}
              className='menu-toggle'
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              aria-controls='mobile-navigation'
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
      <div className='site-scroll-progress' ref={progress} aria-hidden='true' />
      {open && (
        <div
          className='mobile-menu'
          role='dialog'
          aria-modal='true'
          aria-label='Mobile navigation'
          id='mobile-navigation'
        >
          <nav aria-label='Mobile'>
            {content.nav.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                ref={i === 0 ? first : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label} ↗
              </a>
            ))}
            <a
              href='#contact'
              onClick={() => setOpen(false)}
              className='nav-talk'
            >
              LET&apos;S TALK <ArrowUpRight size={18} />
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

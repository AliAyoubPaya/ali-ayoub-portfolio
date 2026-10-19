'use client'
import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { content } from '@/data/content'
export default function Skills () {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(
      () =>
        gsap.from('.skill-card', {
          y: 54,
          opacity: 0,
          stagger: 0.1,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        }),
      root
    )
    return () => ctx.revert()
  }, [])
  function tilt (e: MouseEvent<HTMLElement>) {
    if (
      matchMedia(
        '(max-width:900px), (pointer:coarse), (prefers-reduced-motion:reduce)'
      ).matches
    )
      return
    const el = e.currentTarget,
      r = el.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `translateY(-6px) rotateX(${-y * 8}deg) rotateY(${
      x * 8
    }deg)`
  }
  return (
    <section
      id='skills'
      ref={root}
      className='skills-stage section-pad'
      aria-labelledby='skills-title'
    >
      <div className='container-grid'>
        <div className='section-kicker'>
          <span>{content.skills.eyebrow}</span>
          <span>THE TOOLKIT / 002</span>
        </div>
        <div className='skills-head'>
          <h2 id='skills-title' className='section-title oversized reveal-up'>
            {content.skills.display.line1}
            <br />
            <em>{content.skills.display.line2}</em>{' '}
            {content.skills.display.line3}
            <span className='lime-period'>.</span>
          </h2>
          <p className='section-desc reveal-up'>{content.skills.sub}</p>
        </div>
        <div className='skills-grid'>
          {content.skills.groups.map((g, i) => (
            <article
              key={g.index}
              className={`skill-card ${
                i === 1 || i === 4 ? 'skill-card-lime' : ''
              }`}
              onMouseMove={tilt}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
              }}
            >
              <div className='skill-top'>
                <span className='mono'>{g.index} / 05</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </div>
              <div className='skill-card-content'>
                <span className='mono skill-category'>{g.detail}</span>
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className='marquee' aria-label='Technology stack'>
        <div className='marquee-track'>
          {[...content.skills.marquee, ...content.skills.marquee].map(
            (name, i) => (
              <span
                className='marquee-item'
                key={`${name}-${i}`}
                aria-hidden={i >= content.skills.marquee.length}
              >
                {name}
                <span>✳</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}

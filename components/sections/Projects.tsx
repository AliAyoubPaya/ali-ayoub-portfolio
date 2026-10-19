'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { content } from '@/data/content'
import Image from 'next/image'
export default function Projects () {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    if (
      matchMedia('(max-width:900px), (prefers-reduced-motion:reduce)').matches
    )
      return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        ScrollTrigger.create({
          trigger: card,
          start: 'top 90px',
          endTrigger: cards[i + 1],
          end: 'top 90px',
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true
        })
        gsap.to(card, {
          scale: 0.94,
          filter: 'brightness(.78)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top 90px',
            scrub: true
          }
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section
      id='projects'
      className='projects-stage section-pad'
      ref={root}
      aria-labelledby='projects-title'
    >
      <div className='container-grid'>
        <div className='section-kicker'>
          <span>{content.projects.eyebrow}</span>
          <span>THE PROOF IS IN THE WORK / 003</span>
        </div>
        <div className='projects-heading'>
          <h2 id='projects-title' className='section-title oversized reveal-up'>
            {content.projects.display.line1}
            <br />
            <em>{content.projects.display.line2}</em>
            <span className='lime-period'>↘</span>
          </h2>
          <div className='projects-heading-right'>
            <span className='count-round'>04</span>
            <p>{content.projects.intro}</p>
          </div>
        </div>
        <div className='projects-list'>
          {content.projects.items.map((p, i) => (
            <article
              className={`project-card project-tone-${i + 1}`}
              key={p.slug}
            >
              <div className='project-info'>
                <div className='project-head'>
                  <span className='mono'>PROJECT / {p.index}</span>
                  <span className='project-type'>{p.type}</span>
                </div>
                <div className='project-main'>
                  <p className='mono project-category'>
                    FEATURED / {p.type.toUpperCase()}
                  </p>
                  <h3>{p.name}</h3>
                  <p className='project-desc'>{p.description}</p>
                  <p className='project-role'>
                    <strong>MY ROLE</strong>
                    <span>{p.role}</span>
                  </p>
                  <div className='project-tags'>
                    {p.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={p.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link'
                >
                  Visit live site <ArrowUpRight size={23} />
                </a>
              </div>
              <div className='project-art'>
                <div className='browser-frame'>
                  <div className='browser-top'>
                    <span className='dots'>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className='browser-url'>
                      {new URL(p.url).hostname}
                    </span>
                    <ArrowRight size={16} />
                  </div>
                  <div className='browser-content'>
                    <Image
                      src={p.image}
                      alt={`Temporary illustrative image for ${p.name} — not a website screenshot`}
                      loading='lazy'
                      decoding='async'
                      width={800}
                      height={600}
                    />
                    <span className='screenshot-stamp mono'>
                      PREVIEW IMAGE · REPLACE LATER
                    </span>
                  </div>
                </div>
                <span className='project-watermark' aria-hidden='true'>
                  {p.index}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className='project-footnote'>
          <span className='mono'>✳ 04 FEATURED PROJECTS</span>
          <p>{content.projects.imageDisclaimer}</p>
        </div>
        <div className='capabilities-band'>
          <p className='mono'>{content.projects.capabilitiesEyebrow}</p>
          <div className='capabilities-grid'>
            {content.projects.capabilities.map((item, i) => (
              <div className='capability' key={item.title}>
                <span className='mono'>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MoveDownRight, ArrowDown } from 'lucide-react';
import { content } from '@/data/content';

/** Hero: an editorial introduction plus a WebGL-led closing wordmark. */
export default function Hero() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-line-inner', {yPercent: 105, opacity: 0}, {yPercent: 0, opacity: 1, duration: 1.25, stagger: .10, ease: 'power4.out', delay: .14});
      gsap.fromTo('.hero-enter', {y: 26, opacity: 0}, {y: 0, opacity: 1, duration: .95, stagger: .075, ease: 'power3.out', delay: .42});
      gsap.to('.hero-scene-label', {y: -110, opacity: 0, ease: 'none', scrollTrigger: {trigger: section.current, start: 'top top', end: 'bottom top', scrub: true}});
      gsap.to('.hero-scroll-mark', {opacity: 0, y: 20, ease: 'none', scrollTrigger: {trigger: section.current, start: 'top top', end: '+=260', scrub: true}});
      gsap.to('.hero-brand-wide', {xPercent: -4, ease: 'none', scrollTrigger: {trigger: section.current, start: 'top top', end: 'bottom top', scrub: true}});
    }, section);
    return () => ctx.revert();
  }, []);
  return <section id="hero" className="hero-stage" ref={section} aria-labelledby="hero-title">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container-grid hero-inner">
      <div className="hero-topline hero-enter"><span className="eyebrow">/ 001 — PORTFOLIO · 2026</span><span className="eyebrow hero-top-right">KARACHI, PK <span className="live-bullet"/> AVAILABLE FOR PROJECTS</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow hero-enter">{content.hero.eyebrow}</p>
          <h1 className="hero-title" id="hero-title" aria-label={content.hero.heading}>
            <span className="hero-line"><span className="hero-line-inner">{content.hero.display.line1}</span></span>
            <span className="hero-line"><span className="hero-line-inner">{content.hero.display.line2}</span></span>
            <span className="hero-line"><span className="hero-line-inner">{content.hero.display.line3} <em>{content.hero.display.accent}</em></span></span>
          </h1>
          <p className="hero-intro hero-enter">{content.hero.sub}</p>
          <div className="hero-actions hero-enter"><a className="action action-accent" href="#projects">Explore selected work <ArrowUpRight size={18}/></a><a className="action action-line" href="#contact">Let&apos;s talk <ArrowUpRight size={18}/></a></div>
        </div>
        <div className="hero-scene-slot" aria-hidden="true"><div className="hero-scene-label mono">INDEPENDENT<br/>BY DESIGN <span>↗</span></div><div className="hero-scene-axis">+ &nbsp; CREATIVE DEVELOPMENT / IN MOTION</div></div>
      </div>
      <div className="hero-brand-wide" aria-hidden="true">ALI AYOUB<span>®</span></div>
      <div className="hero-bottom-rail hero-enter"><a className="hero-featured" href={content.projects.items[0].url} target="_blank" rel="noopener noreferrer"><span className="hero-featured-index">FEATURED PROJECT&nbsp; / &nbsp; 01</span><strong>{content.projects.items[0].name}</strong><ArrowUpRight size={17}/></a><a className="hero-scroll-mark" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={18}/></a><span className="hero-copyright mono">© ALI AYOUB / 2026 <MoveDownRight size={15}/></span></div>
    </div>
  </section>;
}

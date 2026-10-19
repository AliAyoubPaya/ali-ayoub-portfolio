'use client';
import {useEffect} from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {setScrollProgress,setChapterStops} from '@/lib/scroll-store';
export function ScrollProvider(){useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const lenis=reduced?null:new Lenis({duration:1.15,smoothWheel:true});if(lenis){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(onTick);gsap.ticker.lagSmoothing(0)}function onTick(time:number){lenis?.raf(time*1000)}
  function update(){const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);setScrollProgress(window.scrollY/max);const ids=['hero','about','skills','projects','experience','contact'];setChapterStops([...ids.map(id=>Math.min(1,Math.max(0,(document.getElementById(id)?.offsetTop||0)/max))),1]);}
  ScrollTrigger.addEventListener('refresh',update);addEventListener('scroll',update,{passive:true});addEventListener('resize',update);requestAnimationFrame(()=>{ScrollTrigger.refresh();update()});
  function onClick(e:MouseEvent){const target=(e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');if(!target)return;const id=target.getAttribute('href');if(!id||id==='#')return;const el=document.querySelector(id);if(!el)return;e.preventDefault();if(lenis)lenis.scrollTo(el,{offset:-72});else el.scrollIntoView({behavior:'auto'});}
  document.addEventListener('click',onClick);return()=>{document.removeEventListener('click',onClick);removeEventListener('scroll',update);removeEventListener('resize',update);ScrollTrigger.removeEventListener('refresh',update);gsap.ticker.remove(onTick);lenis?.destroy()};},[]);return null}

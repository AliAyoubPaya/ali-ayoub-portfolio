'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
/** Scroll-scrubbed DOM reveals. Rewinding scroll rewinds each reveal. */
export default function ScrollStory(){useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(el=>{gsap.fromTo(el,{y:60,opacity:.2},{y:0,opacity:1,ease:'none',scrollTrigger:{trigger:el,start:'top 92%',end:'top 54%',scrub:true,invalidateOnRefresh:true}})});gsap.utils.toArray<HTMLElement>('.capability').forEach(el=>gsap.fromTo(el,{y:22,opacity:.2},{y:0,opacity:1,ease:'none',scrollTrigger:{trigger:el,start:'top 94%',end:'top 75%',scrub:true}}))});const id=requestAnimationFrame(()=>ScrollTrigger.refresh());return()=>{cancelAnimationFrame(id);ctx.revert()}},[]);return null}

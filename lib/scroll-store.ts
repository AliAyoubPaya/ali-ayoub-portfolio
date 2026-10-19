// External store avoids rerendering DOM for every animation frame.
let progress = 0;
let chapterStops = [0,0.17,0.34,0.51,0.76,0.9,1];
export function setScrollProgress(value:number){progress=Math.max(0,Math.min(1,value));}
export function getScrollProgress(){return progress;}
export function setChapterStops(stops:number[]){if(stops.length===7)chapterStops=stops;}
export function getChapterStops(){return chapterStops;}

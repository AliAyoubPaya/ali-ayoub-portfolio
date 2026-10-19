import {ImageResponse} from 'next/og';
import {content} from '@/data/content';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',flexDirection:'column',justifyContent:'space-between',background:'#0c0b10',color:'#f7f4f4',padding:72}}><div style={{display:'flex',justifyContent:'space-between',fontSize:25,color:'#bda5ff'}}><span>✳ {content.brand}®</span><span>PORTFOLIO / 2026</span></div><div style={{display:'flex',flexDirection:'column'}}><div style={{fontSize:108,fontWeight:700,lineHeight:.95,letterSpacing:-6}}>I BUILD DIGITAL</div><div style={{fontSize:120,fontWeight:700,lineHeight:1,letterSpacing:-7,color:'#bda5ff'}}>THAT MOVES.</div></div><div style={{fontSize:29,color:'#cec4d8'}}>Senior Front-End Developer · Karachi, Pakistan</div></div>,size)}

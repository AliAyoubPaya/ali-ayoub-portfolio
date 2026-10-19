'use client';
import {useMemo,useRef,useEffect} from 'react';
import {useFrame} from '@react-three/fiber';
import {Environment,ContactShadows} from '@react-three/drei';
import * as THREE from 'three';
import {CHAPTER_TRANSFORMS,clamp} from '@/lib/constants';
import {getScrollProgress,getChapterStops} from '@/lib/scroll-store';

const ease=(x:number)=>x*x*(3-2*x);
function ScrollCamera({light}:{light:React.RefObject<THREE.DirectionalLight|null>}){
  const dest=useMemo(()=>new THREE.Vector3(),[]);
  useFrame(({camera})=>{
    const progress=getScrollProgress(), stops=getChapterStops();
    let index=0; while(index<5&&progress>stops[index+1]) index++;
    const t=ease(clamp((progress-stops[index])/Math.max(.0001,stops[index+1]-stops[index]),0,1));
    const a=CHAPTER_TRANSFORMS[index], b=CHAPTER_TRANSFORMS[Math.min(index+1,5)];
    dest.set(THREE.MathUtils.lerp(a.position[0],b.position[0],t),THREE.MathUtils.lerp(a.position[1],b.position[1],t),THREE.MathUtils.lerp(a.position[2],b.position[2],t));
    camera.position.copy(dest);
    camera.rotation.set(THREE.MathUtils.lerp(a.rotation[0],b.rotation[0],t),THREE.MathUtils.lerp(a.rotation[1],b.rotation[1],t),THREE.MathUtils.lerp(a.rotation[2],b.rotation[2],t));
    if(light.current) light.current.intensity=THREE.MathUtils.lerp(a.light,b.light,t);
  });
  return null;
}
function Satellite({position,rotation,shade}:{position:[number,number,number],rotation:[number,number,number],shade:string}){
  return <group position={position} rotation={rotation}>
    <mesh><boxGeometry args={[1.12,.72,.065]}/><meshPhysicalMaterial color={shade} roughness={.23} metalness={.36} transparent opacity={.85}/></mesh>
    <mesh position={[-.25,.18,.037]}><boxGeometry args={[.45,.035,.006]}/><meshBasicMaterial color="#fff8ef"/></mesh>
    <mesh position={[-.30,.055,.037]}><boxGeometry args={[.36,.024,.006]}/><meshBasicMaterial color="#fff8ef"/></mesh>
    <mesh position={[.26,-.16,.037]}><boxGeometry args={[.32,.20,.006]}/><meshBasicMaterial color="#d1b7ff"/></mesh>
  </group>;
}
function Particles({mobile}:{mobile:boolean}){
  const count=mobile?8:24;
  const inst=useRef<THREE.InstancedMesh>(null);
  const dummy=useMemo(()=>new THREE.Object3D(),[]);
  useEffect(()=>{
    if(!inst.current)return;
    for(let i=0;i<count;i++){
      const a=i*2.39996,r=2.15+(i%5)*.30;
      dummy.position.set(Math.cos(a)*r,Math.sin(a*1.08)*r*.67, (i%7-3)*.29);
      dummy.rotation.set(a*.5,a,0);dummy.scale.setScalar(.05+(i%3)*.035);
      dummy.updateMatrix();inst.current.setMatrixAt(i,dummy.matrix);
    }
    inst.current.instanceMatrix.needsUpdate=true;
  },[count,dummy]);
  return <instancedMesh ref={inst} args={[undefined,undefined,count]}><icosahedronGeometry args={[1,0]}/><meshStandardMaterial color="#a68cff" roughness={.18} metalness={.45}/></instancedMesh>;
}
function Sculpture({mobile}:{mobile:boolean}){
  const scene=useRef<THREE.Group>(null);
  const orbital=useRef<THREE.Group>(null);
  useFrame(({pointer},delta)=>{
    if(!scene.current||!orbital.current)return;
    const progress=getScrollProgress();
    const mouseY=mobile?0:clamp(pointer.y*.085,-.105,.105);
    const mouseX=mobile?0:clamp(pointer.x*.085,-.105,.105);
    scene.current.rotation.x=THREE.MathUtils.damp(scene.current.rotation.x,mouseY,2.4,delta);
    scene.current.rotation.y=THREE.MathUtils.damp(scene.current.rotation.y,mouseX+Math.sin(progress*5.4)*.16,2.4,delta);
    scene.current.position.y=-.22+Math.sin(progress*9)*.2;
    orbital.current.rotation.z=progress*4.8;
  });
  return <group ref={scene} position={[2.35,-.22,0]}>
    <mesh rotation={[.12,-.1,.35]}>
      <sphereGeometry args={[1.22,mobile?28:64,mobile?20:48]}/>
      {mobile?<meshStandardMaterial color="#795bda" metalness={.55} roughness={.17}/>:<meshPhysicalMaterial color="#9a72fb" metalness={.32} roughness={.09} transmission={.64} thickness={2.15} ior={1.3} clearcoat={1} clearcoatRoughness={.05}/>}</mesh>
    <mesh rotation={[1.0,.3,.6]}><torusGeometry args={[1.57,.1,12,mobile?54:90]}/><meshPhysicalMaterial color="#5a45e7" metalness={.72} roughness={.19}/></mesh>
    <mesh rotation={[.45,1.05,-.2]}><torusGeometry args={[1.74,.028,8,90]}/><meshBasicMaterial color="#ff85ab" transparent opacity={.78}/></mesh>
    {!mobile&&<mesh rotation={[1.35,.15,-.4]}><torusGeometry args={[1.97,.009,7,100]}/><meshBasicMaterial color="#c1b9ff" transparent opacity={.72}/></mesh>}
    <group ref={orbital}><Satellite position={[-1.85,1.05,.5]} rotation={[-.05,.23,.17]} shade="#4741a5"/><Satellite position={[1.55,-1.05,.75]} rotation={[.04,-.3,-.24]} shade="#6e338d"/>{!mobile&&<Satellite position={[.55,1.83,-.55]} rotation={[.22,-.1,-.09]} shade="#245dcc"/>}</group>
    <Particles mobile={mobile}/>
  </group>;
}
export default function Scene({mobile}:{mobile:boolean,reduced:boolean}){
  const light=useRef<THREE.DirectionalLight>(null);
  return <><ambientLight intensity={.7}/><directionalLight ref={light} position={[4,6,6]} color="#ffe9e9" intensity={1.6}/><pointLight position={[0,-4,3]} color="#875bff" intensity={12} distance={12}/><Environment preset="studio"/><ScrollCamera light={light}/><Sculpture mobile={mobile}/>{!mobile&&<ContactShadows position={[2,-2.75,0]} opacity={.16} blur={3} scale={10} far={8} resolution={256}/>}</>;
}

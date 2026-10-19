export const CHAPTERS = ['hero','about','skills','projects','experience','contact'] as const;
// One deterministic piecewise camera path across the six scroll chapters.
export const CHAPTER_TRANSFORMS = [
 {position:[0,0,9],rotation:[0,0,0],light:1.55},
 {position:[-1.15,-.65,8.8],rotation:[.04,-.09,0],light:1.05},
 {position:[-.3,.05,6.2],rotation:[0,.15,0],light:1.45},
 {position:[1.0,.3,7.4],rotation:[-.03,.22,0],light:1.65},
 {position:[-1,1.1,8.6],rotation:[-.08,-.12,0],light:1.2},
 {position:[0,0,11.7],rotation:[0,0,0],light:1.6},
] as const;
export const clamp=(x:number,a:number,b:number)=>Math.min(b,Math.max(a,x));

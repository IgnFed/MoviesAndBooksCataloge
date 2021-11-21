
export default function dynamicClassListForCss(CSSReference:CSSModuleClasses, classNameList:string[]):string{
  return !classNameList || !CSSReference ? '' : classNameList.map((el:string)=> CSSReference[el] ).join(' ');
} 

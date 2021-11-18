
export default function dynamicClassListForCss(CSSReference:CSSModuleClasses, classNameList:string[]):string{
  return classNameList.map((el:string)=> CSSReference[el] ).join(' ');
} 
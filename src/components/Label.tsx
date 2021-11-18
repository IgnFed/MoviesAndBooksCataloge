import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@/utils/types";
type TLabel = {
  labelFor?: string,
  labelValue?:string,
}

export default function Label<P extends TProps & TStyles & TLabel>({
  children,
  labelValue="",
  labelFor="",
  CSSReference={},
  stylesObject={},
  classNameList=[],
  id="",
  globalClassName="",
}:P){
  return(
    <>
        <label
            className={dynamicClassListForCss(CSSReference, classNameList) + " " + globalClassName} 
            style={stylesObject} 
            id={CSSReference?.[id]}
            htmlFor={labelFor}
        >
          
          { children || labelValue }
      
        </label>
    </>
  );
}
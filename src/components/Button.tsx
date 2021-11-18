import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@utils/types";
import { MouseEvent } from "react";

type TButtonEvents={
  onClick?:((e:MouseEvent<HTMLButtonElement>)=>void)
}

export default function Button<P extends TProps & TStyles & TButtonEvents>({
  children,
  CSSReference={},
  classNameList=[],
  globalClassName="",
  id="",
  stylesObject={},
  onClick=(e)=>{}
}:P){

  return(
    <div className="componentContainer">
      <button 
          className={dynamicClassListForCss(CSSReference, classNameList) + ` ${globalClassName}`} 
          id={CSSReference?.[id]} 
          onClick={(e)=>onClick(e)}
          style={stylesObject}
      >
        {children}
      </button>
    </div>
  );
}
import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@utils/types";
import { MouseEvent } from "react";

type TButtonEvent ={
  onClick?:((e?:MouseEvent<HTMLButtonElement>)=>void)
}

export default function Button<T extends TProps & TStyles & TButtonEvent>({
  children,
  CSSReference={},
  globalClassName='',
  classNameList=[],
  id="",
  stylesObject={},
  onClick = (e)=>{}
}:T){
  return(
    <div className={`componentContainer NavBarComponent${globalClassName? ' ' + globalClassName: '' }`}>
      <button
        className={`${dynamicClassListForCss(CSSReference, classNameList)}`}
        id={CSSReference[id]}
        style={stylesObject}
        onClick={onClick}
        >
        {children || "Click Me!"}
      </button>
    </div>
  );
}
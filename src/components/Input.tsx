import { dynamicClassListForCss } from "@utils/functions";
import { TProps,TStyles } from "@utils/types";
import { ChangeEvent, FocusEvent } from "react";

type TInput = {
  inputType?: string,
  inputName?: string,
  inputValue?: string,
  inputPlaceholder?:string,
  autoComplete?: "on"|"off",
  onChange?: ((e:ChangeEvent<HTMLInputElement>)=>void),
  onFocus?: ((e:FocusEvent<HTMLInputElement>)=>void),
}

export default function Input<P extends TProps & TStyles & TInput>({
  children,
  CSSReference={},
  classNameList=[],
  id="",
  stylesObject={},
  onChange=(e:ChangeEvent<HTMLInputElement>)=>{},
  onFocus=(e:FocusEvent<HTMLInputElement>)=>{},
  inputName,
  inputType = "text",
  inputValue,
  inputPlaceholder,
  autoComplete="off",
  globalClassName="",
}:P){
  return(
      <>
        {children}
        <input
              autoComplete={autoComplete}
              className={dynamicClassListForCss(CSSReference, classNameList) + " " + globalClassName}
              id={CSSReference?.[id]}
              type={inputType} 
              name={inputName} 
              style={stylesObject} 
              onChange={(e)=>onChange(e)}
              onFocus={(e)=>onFocus(e)}
              value={inputValue}
              placeholder={inputPlaceholder || ""}
              />
      </>
  );
}
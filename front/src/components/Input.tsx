import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@utils/types";
import { ChangeEvent, FocusEvent } from "react";

type TInputEvent ={
  handleChange?:((e:ChangeEvent<HTMLInputElement>)=>void),
  handleFocus?:((e:FocusEvent<HTMLInputElement>)=>void),
}
type TInputProps ={
  state?: string,
  placeholder?:string,
}

export default function Input<T extends TProps & TStyles & TInputEvent & TInputProps>({
  children,
  CSSReference={},
  globalClassName='',
  classNameList=[],
  id="",
  stylesObject={},
  handleChange = (e:ChangeEvent<HTMLInputElement>)=>{},
  handleFocus = (e:FocusEvent<HTMLInputElement>)=>{},
  state='',
  placeholder=''
}:T){
  return(
      <input
        className={`${dynamicClassListForCss(CSSReference, classNameList)}`}
        id={CSSReference[id]}
        style={stylesObject}
        onFocus = {handleFocus}
        onChange={handleChange}
        value={state}
        placeholder={placeholder}
        />
        
  );
}
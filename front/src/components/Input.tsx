import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@utils/types";
import { ChangeEvent } from "react";

type TInputEvent ={
  handleChange?:((e:ChangeEvent<HTMLInputElement>)=>void)
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
  state='',
  placeholder=''
}:T){
  return(
      <input
        className={`${dynamicClassListForCss(CSSReference, classNameList)}`}
        id={CSSReference[id]}
        style={stylesObject}
        onChange={handleChange}
        value={state}
        placeholder={placeholder}
        />
        
  );
}
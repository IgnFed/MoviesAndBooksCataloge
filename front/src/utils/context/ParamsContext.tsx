import {createContext, useContext, useState } from "react";
import { Location, useLocation } from "react-router-dom";

interface IParamsContext{
  params:string,
  updateLocation(newLocation:string):void,
}


export const paramsCtx = createContext<IParamsContext>({
  params:'',
  updateLocation:()=>{},
});

export function currentLocation(){return useLocation()}
export function useParamsCtx(){
  return useContext(paramsCtx);
}

export default function ParamsProvider({children}:any):any{
  const location = useLocation().pathname;
  const [params, setParams] = useState<string>(location);

  function updateLocation(newLocation:string){
    setParams( _ => newLocation)
    console.log(newLocation)
  }
  return(
    <paramsCtx.Provider 
    value={{params, updateLocation}}
    >
      {children}
    </paramsCtx.Provider>
  )
}
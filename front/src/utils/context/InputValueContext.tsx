import { useContext, createContext, useState, Dispatch, SetStateAction } from "react";

export interface IInputValue{
  inputValue:string,
  setInputValue: Dispatch<SetStateAction<string>>
}

const InputValueCtx = createContext<IInputValue>({
  inputValue:'',
  setInputValue: ()=>{},
})

export function useInputValueCtx(){return  useContext(InputValueCtx) }

export default function InputValueCtxProvider({children}:any):JSX.Element{
  const [inputValue, setInputValue] = useState('');
  
  return(
    <InputValueCtx.Provider value={{inputValue, setInputValue} as IInputValue}>
      {children}
    </InputValueCtx.Provider>
  )
}
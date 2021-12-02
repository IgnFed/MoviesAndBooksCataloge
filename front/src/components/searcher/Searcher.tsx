import { Input } from "@components/index";
import style from '@styles/Searcher.module.css';
import { useParamsCtx } from "@utils/context/ParamsContext";
import { ChangeEvent, FocusEvent} from "react";
import { useApiDataCtx } from "@utils/context/ApiDataContext";
import { useInputValueCtx } from "@utils/context/InputValueContext";

export default function Searcher(){
  const location = useParamsCtx().params;
  const InputValueCtx = useInputValueCtx();
  const apiDataCtx = useApiDataCtx();

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    InputValueCtx.setInputValue(e.currentTarget.value)
    apiDataCtx.fnFilteredData(InputValueCtx.inputValue);
  }

  return(
    <header id="searcher">
      <Input placeholder={`${location}`} CSSReference={style} handleChange={handleChange} classNameList={['input']} state={InputValueCtx.inputValue} />
    </header>
  );
}
import { Input } from "@components/index";
import style from '@styles/Searcher.module.css';
import { useParamsCtx } from "@utils/context/ParamsContext";
import { ChangeEvent, useState } from "react";
import { useApiDataCtx } from "@utils/context/ApiDataContext";

export default function Searcher(){
  const location = useParamsCtx().params;
  const [state, setState] = useState('');
  const apiDataCtx = useApiDataCtx();
  function handleChange(e:ChangeEvent<HTMLInputElement>){

    setState(e.currentTarget.value);
    const filter = apiDataCtx.dataFn.filterData(e.currentTarget.value);
    console.table(filter);
  }
  return(
    <header id="searcher">
      <Input placeholder={`${location}`} CSSReference={style} handleChange={handleChange} classNameList={['input']} state={state} />
    </header>
  );
}
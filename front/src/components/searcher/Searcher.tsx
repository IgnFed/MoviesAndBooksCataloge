import { Input } from "@components/index";
import style from '@styles/Searcher.module.css';
import { useParamsCtx } from "@utils/context/ParamsContext";

export default function Searcher(){
  const location = useParamsCtx().params 
  return(
    <header id="searcher">
      <Input placeholder={`${location}`} CSSReference={style} classNameList={['input']} />
    </header>
  );
}
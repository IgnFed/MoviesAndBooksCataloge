import { Input } from "@components/index";
import { useParamsCtx } from "@utils/context/ParamsContext";

export default function Searcher(){
  const location = useParamsCtx().params 
  return(
    <header id="searcher">
      <Input placeholder={`${location}`} />
    </header>
  );
}
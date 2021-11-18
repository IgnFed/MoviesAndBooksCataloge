import { useEffect, useState } from "react";
import IDataImage from "../utils/interfaces/IDataImage";
import { TImageData } from "../utils/types/TImageData";



export default function ProgressiveImage<I extends TImageData>({src="", placeholder=""}:I){
  
  const [state, setState] = useState<IDataImage>({currentSrc:placeholder, loading:true});

  useEffect(()=>{
    const img = new Image();
    img.src = src;
    img.onload = ()=>{
      setState({currentSrc: src, loading: false});
    } 
  },[])

  return(
    <div className={"imgContainer"}>
      <img src={state.currentSrc} alt="Image" style={{opacity: state.loading ? 0.7 : 1, transition: "opacity .15s linear"}} />
    </div>
  );
}
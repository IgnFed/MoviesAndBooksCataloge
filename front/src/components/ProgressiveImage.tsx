import { TImageData } from '@utils/types';
import { useEffect, useState } from 'react';

export default function ProgressiveImage<T extends TImageData >({
  src="",
  placeholder="",
}:T):JSX.Element{

  const [imgState , setImgState] = useState({currentSrc:placeholder, loading:true });

  useEffect(()=>{
    const newImg = new Image();
    newImg.src = src;
    newImg.onload = ()=>{setImgState(prev => ({...prev, currentSrc:src, loading:false}))}
  }, [])

  return(
    <img src={`${imgState.currentSrc}`} style={{opacity:imgState.loading ? .8 : 1, transition:"opacity .15s linear", width:"100%", height:"100%"}} alt={"image"} />
  );
}
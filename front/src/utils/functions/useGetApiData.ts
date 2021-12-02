import {useState, useMemo, useEffect, Dispatch, SetStateAction} from 'react';
import {IBook, IMovie} from '@interfaces/index';

type TUseApiProps = {
  url?: string,
  returnType?: string
}

export interface IRequestData{
  msg:string,
  msgStatus:string,
  type:string,

}

export interface IResponseData{
  data:Array<IBook | IMovie>,
  request: IRequestData
};

export interface IFnData{
  getData():void,
  setState:Dispatch<SetStateAction<IResponseData>>,
  filterData(q:string):Array<IBook>,
};

type TUseApiReturn = [IResponseData, IFnData];


export default function useApi<T extends TUseApiProps>({url="", returnType}:T): TUseApiReturn{
  
  if(!url && !returnType) return [{}as IResponseData , {} as IFnData] ;

  const [response, setResponse] = useState<IResponseData>({} as IResponseData);

  useEffect(()=>{
      console.log('memoized')
      fetch(url)
        .then(res => res.json())
        .then(res => {setResponse(prev => ( {...prev, ...res  } ) )});
    }, [url, returnType]);

  // const filterData = (q?:string):Array<IBook | IMovie> =>{
  //   if(!response || !q?.trim()) return [];

  //   return response.data.filter(({id, title="", authors=[], alternativeTitles=[], description="", tags=[]}:IBook | IMovie, idx:number)=>(        

  //     authors?.map(author=> author.toLowerCase() ).indexOf(q.toLowerCase()) > -1 ||
  //     title?.toLocaleLowerCase().indexOf(q.toLowerCase()) > -1 ||
  //     alternativeTitles?.map(altTitle=> altTitle.toLowerCase() ).indexOf(q.toLowerCase()) > -1 ||
  //     description?.indexOf(q.toLowerCase()) > -1 ||
  //     tags?.map(tag=> tag.toLowerCase() ).indexOf(q.toLowerCase()) > -1
  //   ))

  // }

  return [
    response as IResponseData,
    {
      setState:setResponse,
    } as IFnData,
  ];
}
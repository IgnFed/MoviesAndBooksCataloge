import {createContext, useContext, useState} from 'react';
import { useParamsCtx } from './ParamsContext';
import useApi, {IResponseData, IFnData, IRequestData} from '@utils/functions/useGetApiData';
import { IBook, IMovie } from '@utils/interfaces';

interface IApiDatCtx{
  data:{
    requestData:IRequestData,
    originalData:Array<IBook | IMovie>,
    filteredData:Array<IBook | IMovie>,
  },
  dataFn:IFnData,
  fnFilteredData: ((q?:string)=>void)
}

export const ApiDataCtx = createContext<IApiDatCtx>({
  data:{
    requestData: {} as IRequestData,
    originalData:[],
    filteredData:[]
  } ,
  dataFn: {} as IFnData,
  fnFilteredData:(q?:string):void => {}
})

export function useApiDataCtx(){ return useContext(ApiDataCtx); } 

export default function ApiDataContextProvider({children}:any):JSX.Element{  
  const paramsCtx = useParamsCtx();
  const param = paramsCtx.params.slice(1, paramsCtx.params.length);
  const [data, dataFn] = useApi({url:`http://localhost:3001/api/${param}`, returnType: param.slice(1, param.length-1)});
  const [filteredData, setFilteredData] = useState<Array<IBook | IMovie>>([]);

  function fnFilteredData(q?:string){
    if(!data || !q?.trim()) return [];
    console.log(q)
    const filter = data.data.filter(({id, title="", authors=[], alternativeTitles=[], description="", tags=[]}:IBook | IMovie, idx:number)=>(        

      authors?.map(author=> author.toLowerCase() ).indexOf(q.toLowerCase()) > -1 ||
      title?.toLocaleLowerCase().indexOf(q.toLowerCase()) > -1 ||
      alternativeTitles?.map(altTitle=> altTitle.toLowerCase() ).indexOf(q.toLowerCase()) > -1 ||
      description?.indexOf(q.toLowerCase()) > -1 ||
      tags?.map(tag=> tag.toLowerCase() ).indexOf(q.toLowerCase()) > -1
    ))

    setFilteredData(filter);
  }


  return (
    <ApiDataCtx.Provider value={{
      data:{
        requestData:data.request,
        originalData:data.data,
        filteredData,
      } ,
      dataFn: dataFn,
      fnFilteredData,
    }}>
      {children}
    </ApiDataCtx.Provider>
    )
}

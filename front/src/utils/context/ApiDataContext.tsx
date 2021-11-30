import {createContext, useContext} from 'react';
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
}

export const ApiDataCtx = createContext<IApiDatCtx>({
  data:{
    requestData: {} as IRequestData,
    originalData:[],
    filteredData:[]
  } ,
  dataFn: {} as IFnData,
})

export function useApiDataCtx(){ return useContext(ApiDataCtx); } 

export default function ApiDataContextProvider({children}:any):JSX.Element{  
  const paramsCtx = useParamsCtx();
  const param = paramsCtx.params.slice(1, paramsCtx.params.length);
  const [data, dataFn] = useApi({url:`http://localhost:3001/api/${param}`, returnType: param.slice(1, param.length-1)});



  return (
    <ApiDataCtx.Provider value={{
      data:{
        requestData:data.request,
        originalData:data.data,
        filteredData:[]
      } ,
      dataFn: dataFn,    
    }}>
      {children}
    </ApiDataCtx.Provider>
    )
}

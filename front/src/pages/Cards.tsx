import style from '@styles/Cards.module.css';
import { Fragment, useState} from 'react';
import { Card } from '@components/index';
import { IBook, IMovie } from '@utils/interfaces';
import { useApiDataCtx } from '@utils/context/ApiDataContext';
import { useInputValueCtx } from '@utils/context/InputValueContext';

export default function Cards(){
  const apiDataCtx = useApiDataCtx();
  const InputValueCtx = useInputValueCtx()
  return(
      <div className={`${style.flex}`} id={`${style.cardsContainer}`}>
        {
          InputValueCtx.inputValue.length > 0 && apiDataCtx.fnFilteredData.length > 0 ? 
          
          ( 
            apiDataCtx.data.filteredData.map(({title}:IBook | IMovie, idx:number)=>(
              <Fragment key={`${idx}__${title}`}>
                <Card CSSReference={style} bookObj={{title}} />
              </Fragment>
            ))
          )
          :
          (
            apiDataCtx.data.originalData.map(({title}:IBook | IMovie, idx:number)=>(
              <Fragment key={`${idx}__${title}`}>
                <Card CSSReference={style} bookObj={{title}} />
              </Fragment>
            ))

          )
        }

      </div>
  );
}
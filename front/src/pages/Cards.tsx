import style from '@styles/Cards.module.css';
import { Fragment, useState} from 'react';
import { Card } from '@components/index';
import { IBook } from '@utils/interfaces';
import { useApiDataCtx } from '@utils/context/ApiDataContext';

export default function Cards(){
  const {data, dataFn} = useApiDataCtx();
  return(
      <div className={`${style.flex}`} id={`${style.cardsContainer}`}>
        {
          (data.originalData && data.originalData.map(({title}:IBook, idx:number)=>(
            <Fragment key={`${idx}__${title}`}>
              <Card CSSReference={style} bookObj={{title}} />
            </Fragment>
          )))
        }
      </div>
  );
}
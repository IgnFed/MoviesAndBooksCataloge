import style from '@styles/Cards.module.css';
import { Fragment, useState} from 'react';
import { Card } from '@components/index';
import { IBook } from '@utils/interfaces';


export default function Cards(){

  const [cards, setCards] = useState<IBook[]>([]);

  

  return(
      <div className={`${style.flex}`} id={`${style.cardsContainer}`}>
        {
          cards.map(({title}, idx)=>(
            <Fragment key={`${idx}__${title}`}>
              <Card CSSReference={style} bookObj={{title}} />
            </Fragment>
          ))
        }
      </div>
  );
}
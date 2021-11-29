import { dynamicClassListForCss } from '@/utils/functions';
import { ProgressiveImage } from '@components/index'
import { TProps, TStyles } from '@utils/types';
import { IBook } from '@utils/interfaces';

import Paisaje from '@images/Paisaje.jpg'; 
import Paisaje_resized from '@images/Paisaje_resized.jpg';
import ItemLink from './ItemLink';

type TBook<IB = IBook> = {
  bookObj?:IB
}

export default function Card<P extends TProps & TStyles & TBook>({
  CSSReference={},
  bookObj = {} as IBook,
}:P):JSX.Element{

  return(
      <div id={CSSReference?.["card"]} className={`${CSSReference.flex}`}>
        <ItemLink  onClick={(e)=>{e.currentTarget.href}}>
          <div className={`${CSSReference.imgContainer}`}>
            <ProgressiveImage src={Paisaje} placeholder={Paisaje_resized}/>
          </div>
          <div className={`${CSSReference.titleContainer}`}>
            <h4>{bookObj.title}</h4>
          </div>
        </ItemLink>
      </div>
  );
}
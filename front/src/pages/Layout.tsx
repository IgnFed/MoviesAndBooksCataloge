import style from '@styles/Layout.module.css';
import { ItemLink } from '@components/index';
import {END_POINTS} from '@utils/others/Links';
import { useParamsCtx } from '@utils/context/ParamsContext';
import { MouseEvent } from 'react';

export default function Layout(){
  const location = useParamsCtx();
  function handleUpdateLocation(e:MouseEvent<HTMLAnchorElement>){
    const ref = e.currentTarget.getAttribute('href') || location.params;
    location.updateLocation(ref);
  }


  return(
    <div id={style.layout}>
      <div className={`${style.gridItem}`}>
        <h3>Seems Like You Don't have Nothing...Click Something.</h3>
      </div>
      <div className={`${style.gridItem}`}>
      {
        END_POINTS.map((point, idx)=>(
          <div className={`${style.flexItem}`}>
            <ItemLink
              key={`${idx}__${point.to}`}
              onClick={handleUpdateLocation}
              to={`${point.to}`}
              CSSReference={style}
              classNameList={['link']}
              icon={point.icon.default}
            >
              {point.to.toUpperCase()}
            </ItemLink>
          </div>
        ))
      }
      </div>
    </div>
  );
}
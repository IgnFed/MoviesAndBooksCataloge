import style from '@styles/Layout.module.css';
import { ItemLink } from '@components/index';
import {END_POINTS} from '@utils/others/Links';

export default function Layout(){

  return(
    <div id={style.layout}>
      <div className={`${style.title}`}>
        <h3>Seems Like You Don't have Nothing...Click Someone.</h3>
      </div>
      <div className={`${style.flex}`}>
      {
        END_POINTS.map((point, idx)=>(
          <div className={`${style.flexItem}`}>
            <ItemLink
              key={`${idx}__${point.to}`}
              CSSReference={style}
              classNameList={['link']}
              icon={point.icon.default}
            >
              {point.to}
            </ItemLink>
          </div>
        ))
      }
      </div>
    </div>
  );
}
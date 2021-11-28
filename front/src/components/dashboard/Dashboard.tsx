import { MouseEvent,  useRef } from 'react';
import style from '@styles/Dashboard.module.css';
import {END_POINTS} from '@utils/others/Links';
import {ItemLink} from '@components/index';
import { useParamsCtx } from '@utils/context/ParamsContext';
const {default:ToggleLogo} = await import('@images/ToggleLogo.svg')


export default function Dashboard():JSX.Element{

  const dashBoardRef = useRef<HTMLElement>({} as HTMLElement);
  const currentParams = useParamsCtx();

  function handleUpdateParamsCtx(e:MouseEvent<HTMLAnchorElement>):void{  
    const location = e.currentTarget.getAttribute('href') || '';
    currentParams.updateLocation(location);
  }

  const handleToggleDashboard =  (e:MouseEvent<HTMLAnchorElement>):void => {
    e.preventDefault();
    const m :HTMLElement = dashBoardRef.current;
    m.classList.contains('toggle') ? m.classList.remove('toggle') : m.classList.add('toggle') ;
  }
  return(
    <nav id="dashboard" ref={dashBoardRef}>
      <div className={`${style.container}`} >
        <div className={`${style.topContent}`}>
          <ItemLink 
            CSSReference={style}
            icon={ToggleLogo}
            alt={'Toggle'}
            globalClassName={"itemLink"}
            classNameList={['toggleButton']}
            onClick={handleToggleDashboard}
          >
            <span className={`${style.title}`}>CATALOGO</span>
          </ItemLink>
        </div>
        <hr />
        <div className={`${style.bottomContent}`}>
          <ul className={`${style.routeList}`}>
            {
              END_POINTS.map((obj, idx)=>(
                <li key={`${idx}__${obj.to}`}>
                  <ItemLink 
                    onClick={handleUpdateParamsCtx}
                    CSSReference={style}
                    icon={obj.icon.default}
                    alt={obj.to}
                    globalClassName={"itemLink"}
                    classNameList={['dashLink']}
                    to={obj.to}
                    hasIcon={true}
                  >
                    <span className={`${style.title}`}>{obj.to[0].toUpperCase() + obj.to.slice(1, obj.to.length)}</span>
                  </ItemLink>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </nav>
  );
}
import style from '@styles/Dashboard.module.css';
import {END_POINTS} from '@utils/others/Links';
import {ItemLink} from '@components/index';
import { EventHandler } from 'react';
const {default:ToggleLogo} = await import('@images/ToggleLogo.svg')

export default function Dashboard():JSX.Element{

  function handleToggleDashboard(e:any):void{
    e.preventDefault();
    const dashboardElement = document.querySelector("#dashboard")
    const hasToggleClass = dashboardElement?.classList.contains("toggle");
    hasToggleClass ?  dashboardElement?.classList.remove("toggle") : dashboardElement?.classList.add("toggle");  
    console.log(dashboardElement)
  }

  return(
    <div className={`${style.container}`}>

      <div className={`${style.topContent}`}>
        <ItemLink 
          CSSReference={style}
          icon={ToggleLogo}
          alt={'Toggle'}
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
                  CSSReference={style}
                  icon={obj.icon.default}
                  alt={obj.to}
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
  );
}
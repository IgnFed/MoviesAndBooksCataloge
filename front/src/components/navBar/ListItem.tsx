import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@utils/types";
import LinkItem  from "../LinkItem";

type ListItemProps ={
  icon?: string | SVGElement,
  alt?: string,
  iconId?:string,
  iconClass?:string,
  to?:string,
}

export default function ListItem<T extends TProps & TStyles & ListItemProps>({
  children,
  CSSReference={},
  globalClassName='',
  classNameList=[],
  id="",
  stylesObject={},
  icon="",
  alt="",
  iconId="",
  to='',
  iconClass="",
}:T){
  return(
    <li className={`${dynamicClassListForCss(CSSReference,classNameList)}`} id={CSSReference[id]}>
      <LinkItem to={to} CSSReference={CSSReference} classNameList={['link']}>
        <div className={`${CSSReference.imgContainer}`}>
        <img id={CSSReference[iconId]}  src={`${icon}`} alt={alt} />
        </div>
        {children}
      </LinkItem>
    </li>

  );
}
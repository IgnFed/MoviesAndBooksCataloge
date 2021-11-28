import {Link} from 'react-router-dom';
import {TProps} from '@utils/types';
import dynamicClassListForCss from '@utils/functions/dynamicClassForCss';
import {  MouseEvent } from 'react';

type TListItemLink = {
  to?:string,
  icon?:string,
  alt?:string,
  onClick?:((e:MouseEvent<HTMLAnchorElement>)=>void),
}

export default function ItemLink<P extends TProps & TListItemLink>({
  children,
  CSSReference={},
  globalClassName='',
  classNameList=[],
  id="",
  to="",
  icon="",
  alt="",
  onClick=(e)=>{}
}:P):JSX.Element{

  return(
    <Link
      onClick={onClick} 
      to={to}
      id={CSSReference?.[id] || id}
      className={`${dynamicClassListForCss(CSSReference, classNameList)} ${globalClassName} itemLink`}
    >
      {
        icon
        ? 
          <span id={`icon`} className={CSSReference?.['icon']}><img src={icon} alt={alt || 'icon'} /></span>
        :
          <></>
      }
      {children}
    </Link>
  );
}
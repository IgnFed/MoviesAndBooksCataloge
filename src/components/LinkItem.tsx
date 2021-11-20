import { dynamicClassListForCss } from "@utils/functions";
import { TProps, TStyles } from "@utils/types";
import { Link } from "react-router-dom";

type TLinkItem ={
  reactRouter?: boolean
  to?:string,
}

export default function LinkItem<T extends TProps & TStyles & TLinkItem>({
  children,
  CSSReference={},
  globalClassName='',
  classNameList=[],
  id="",
  stylesObject={},
  reactRouter=true,
  to='',
}:T){
  return(
    <>
      {
        
        reactRouter ? 
          <Link
            to={to}
            className={`${dynamicClassListForCss(CSSReference, classNameList)}`}
            id={id}
          >
            {children || 'Link'}
          </Link>

        :

          <a 
            href={to}
            className={`${dynamicClassListForCss(CSSReference, classNameList)}`}        
            id={id}
            style={stylesObject}
          >
            {children || 'Link'}
          </a>

      }
    </>
  );
}
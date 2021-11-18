import { TProps} from "@utils/types";
import { dynamicClassListForCss } from "@utils/functions";


export default function Form<P extends TProps>({
  children,
  CSSReference={},
  classNameList = [],
  id="",
  globalClassName="",
}:P):JSX.Element{

  return(
    <form className={dynamicClassListForCss(CSSReference, classNameList) + " " + globalClassName} id={CSSReference?.[id]}>
      {children}
    </form>
  )
}
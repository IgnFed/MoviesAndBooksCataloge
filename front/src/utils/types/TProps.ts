import { ReactNode } from "react";

export type TProps = {
  children?: JSX.Element | JSX.Element[] | string | ReactNode | ReactNode[],
  CSSReference?:CSSModuleClasses,
  classNameList?: string[],
  globalClassName?:string,
  id?:string,
}
export interface IMovie{
  id?:string |  Object,
  title:string,
  authors:Array<string>,
  alternativeTitles:Array<string>,
  description:string,
  duration:string,
  tags:Array<string>
}

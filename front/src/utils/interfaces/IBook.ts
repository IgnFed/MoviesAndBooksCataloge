export default interface IBook{
  id?: string | Object,
  authors?:Array<string>,
  title?:string,
  alternativeTitles?:Array<string>,
  description?: string,
  pages?: number,
  tags?: Array<string>,
};

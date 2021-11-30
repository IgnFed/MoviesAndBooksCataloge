import {model, Schema} from 'mongoose';

export interface IBook{
  id?: string | Object,
  authors:Array<string>,
  title:string,
  alternativeTitles:Array<string>,
  description: string,
  pages: number,
  tags: Array<string>,
};

const BookSchema = new Schema<IBook>({
  authors:{type:[String], required:true },
  title:{type:String, required:true},
  alternativeTitles:{type:[String], required:true},
  description:{type:String, required:true},
  pages:{type:Number, required:true},
  tags: {type:[String], required:true}
});

export default model<IBook>('Book', BookSchema);
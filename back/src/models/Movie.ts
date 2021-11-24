import {model, Schema} from 'mongoose';

export interface IMovie{
  id?:string |  Object,
  title:string,
  authors:Array<string>,
  alternativeTitles:Array<string>,
  description:string,
  duration:string,
  tags:Array<string>
}

const MovieSchema = new Schema<IMovie>({
  title:{type:String, required:true},
  authors:{type:[String], required:true},
  alternativeTitles:{type:[String], required:true},
  description:{type:String, required:true},
  duration:{type:String, required:true},
  tags:{type:[String], required:true}
})


export default model<IMovie>('Movie', MovieSchema);


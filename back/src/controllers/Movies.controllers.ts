import {Request, Response} from 'express';
import Movie, { IMovie } from '../models/Movie';

async function getAllMovies(req:Request, res:Response):Promise<Response>{
  try{
    const movieObj:Array<IMovie> =[];
    await Movie.find().exec()
      .then(docs => docs.forEach(({_id, title, authors, alternativeTitles, description, duration, tags})=>{
        movieObj.push({id:_id, title, authors, alternativeTitles, description, duration, tags});
      }))
      .catch(e => {throw e});

    return res.json({
      request:{
        type: 'GET',
        msg: 'Moives founded.',
        msgStatus: 'success',
      },
      data:[
        ...movieObj,
      ]
    }).status(200);
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type: 'GET',
        msg: 'Something has wrong. Movies not found.',
        msgStatus: 'error',
      },
    }).status(400);
  }

}


async function getMovieById(req:Request, res:Response):Promise<Response>{
  try{
    const {id} = req.params;
    const movieObject:IMovie | {} = {};
    await Movie.findById(id)
      .then(({title, authors, alternativeTitles, description, duration, tags}:any)=> Object.assign(movieObject, {id, title, authors, alternativeTitles, description, duration, tags} ))
      .catch(e => {throw e});
    return res.json({
      request:{
        type: 'GET',
        msg: 'Moive founded.',
        msgStatus: 'success',
      },
      data:movieObject
    }).status(200);
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type: 'GET',
        msg: 'Something has wrong. Movie not found.',
        msgStatus: 'error',
      },
    }).status(400);
  }

}

async function postMovie(req:Request, res:Response):Promise<Response>{
  try{
    const movieBody = req.body;
    const newMovie = new Movie(movieBody)
    await newMovie.save()
    .catch(e=>{throw e});
    return res.json({
      request:{
        type:'POST',
        msg:'Movie Created.',
        msgStauts: 'success'
      },
      data:{
        id:newMovie._id,
        ...movieBody,
      }
    })
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'POST',
        msg: 'Something has wrong. Movie not created',
        msgStatus: 'error'
      }
    }).status(400);
  }
}


async function updateMovie(req:Request, res:Response):Promise<Response>{
  try{
    const {id} = req.params;
    const updatedMovie = req.body;
    await Movie.findByIdAndUpdate(id, updatedMovie)
      .then(movie => movie?.save())
      .catch(e => {throw e});
    return res.json({
      request:{
        type:'JSON',
        msg:'Movie updated.',
        msgStatus: 'success',
      },
      data:{
        id,
        ...updatedMovie,
      }
      
    })
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'PUT',
        msg: 'Something has wrong. Movie not created',
        msgStatus: 'error'
      }
    }).status(400);
  }
}


async function deleteMovieById(req:Request, res:Response): Promise<Response>{
  try{
    const {id} = req.params;
    await Movie.findByIdAndDelete(id)
    .catch(e => {throw e});
    return res.json({
      request:{
        type:'DELETE',
        msg:'The movie has been deleted.',
        msgStatus: 'warning'
      },
      data:{
        id
      }
    }).status(200);
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'DELETE',
        msg: 'Something has wrong. Movie not deleted',
        msgStatus: 'error'
      }
    }).status(400);
  }
}


async function deleteAllMovies(req:Request, res:Response):Promise<Response>{
  try{
    await Movie.deleteMany()
      .catch(e=>{throw e});
    return res.json({
      request:{
        type:'DELETE',
        msg:'All movies has been deleted.',
        msgStatus: 'warning'
      }
    }).status(200);  
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'DELETE',
        msg:'Something has wrong. Movies not deleted',
        msgStatus:'error'
      }
    }).status(400);
  }
} 

export {getAllMovies, getMovieById, postMovie, updateMovie, deleteMovieById, deleteAllMovies};
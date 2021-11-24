import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';

import bookRouter from './routes/Books.routes';
import movieRouter from './routes/Movies.routes';

class Server{
  private app: Application;
  private port?: number | string;
  private paths = {
    books: '/api/books',
    movies: '/api/movies',
    all: '/api/'
  };

  constructor(port?:number){
    this.app = express();
    this.port = port || process.env.port || 3001;
    this.middlewares();
    this.routes()
  }

  routes(){
    this.app.use(this.paths.books, bookRouter);
    this.app.use(this.paths.movies, movieRouter);
  }

  middlewares(){
    this.app.use( cors() );
    this.app.use( morgan('dev') );
    this.app.use(express.json());
    this.app.use(express.static(__dirname + '/public'));
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`Listening on http://localhost:${this.port}`);
    })
  }
}

export default Server
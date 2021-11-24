import { Router } from "express";
import {deleteAllMovies, deleteMovieById, getAllMovies, getMovieById, postMovie, updateMovie} from '../controllers/Movies.controllers';
const router = Router();


router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', postMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovieById);
router.delete('/', deleteAllMovies);

export default router;

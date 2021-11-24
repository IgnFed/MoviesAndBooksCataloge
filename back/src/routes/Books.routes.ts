import { Router } from "express";
import {deleteAllBooks, deleteBookById, getBookById, getBooks, postBook, updateBook} from '../controllers/Books.controller';

const router = Router();


router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', postBook);
router.put('/:id', updateBook);
router.delete('/', deleteAllBooks);
router.delete('/:id', deleteBookById);




export default router;

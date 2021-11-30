import {Response, Request} from 'express';
import Book, {IBook} from '../models/Book';



async function getBooks(req:Request, res:Response):Promise<Response>{
  try{
    const booksArr:Array<IBook> = []; 
    await Book.find()
      .then(docs =>  docs.forEach( ({_id, authors, title, alternativeTitles, description, pages, tags}) => (
        booksArr.push({id:_id, authors, title, alternativeTitles, description, pages, tags}) ))
      );
    return res.json({
      request:{
        type:'GET',
        msg:'Books founded.',
        msgStatus:'success',
      },
      data:[
        ...booksArr,
      ]
    }).status(200);
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'GET',
        msg:'Something has wrong. Books not found.',
        msgStatus:'error',
      },
    }).status(400);
  }
}

async function getBookById(req:Request, res:Response){
  try{
    const bookObject:IBook | {} = {};
    const {id} = req.params;
    await Book.findById(id)
      .then(({authors, title, alternativeTitles, description, pages, tags}:any)=>(Object.assign(bookObject, {id, authors, title, alternativeTitles, description, pages, tags })))
  
    res.json({
      request:{
        type: 'GET',
        msg: 'Book founded.',
        msgStatu: 'success',
      },
      data:{
        ...bookObject,
      }
    }).status(200);
  }
  catch(e){
    console.error(e);
    res.json({
      request:{
        type:'GET',
        msg:'Something has wrong. Books not found.',
        msgStatus: 'error',
      },
    }).status(400);
  }
}


async function postBook(req:Request, res:Response):Promise<Response>{
  try{
    const {authors, title, alternativeTitles, description, pages, tags } = req.body;
    const book = new Book({authors, title, alternativeTitles, description, pages, tags})
    await book.save();
    return res.json({
      request:{
        type:'POST',
        msg:'Book created',
        msgStatus:'success',
      },
      data:{
        id:book._id,
        authors,
        title,
        alternativeTitles,
        description,
        pages,
        tags
      }
    }).status(200);
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'POST',
        msg:'Something has wrong. Book not created.',
        msgStatus:'error',
      },
    }).status(400);
  }
}


async function updateBook(req:Request, res:Response):Promise<Response>{
  try{
    const {id} = req.params;
    const updatedBook = req.body;
    await Book.findByIdAndUpdate(id, updatedBook )
    .then(doc => doc?.save())
    .catch(err => console.error(err));
    return res.json({
      request:{
        type:'POST',
        msg:'Book created',
        msgStatus:'success',
      },
      data:{
        id,
        ...updatedBook
      }
    }).status(200);  
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'POST',
        msg:'Something has wrong. Book not updated.',
        msgStatus:'error',
      },
    }).status(400);
  }
}


async function deleteBookById(req:Request, res:Response){
  try{
    const {id} = req.params;
    await Book.findByIdAndDelete(id)
    .then(_=>{
      res.json({
        request:{
          type:'DELETE',
          msg:'The book has been deleted.',
          msgStatus:'warning',
        },
        data:{
          id
        }
      })
    })
    .catch(e =>{throw e});
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'DELETE',
        msg:'Something has wrong. Book not deleted.',
        msgStatus:'error',
      },
    }).status(400);
  }

}

async function deleteAllBooks(req:Request, res:Response):Promise<Response>{
  try{
    await Book.deleteMany();
    return res.json({
      request:{
        type:'DELETE',
        msg:'All the books has been deleted.',
        msgStatus:'warning'
      }
    }).status(200);
    
  }
  catch(e){
    console.error(e);
    return res.json({
      request:{
        type:'DELETE',
        msg:'Something has wrong. Books not deleted.',
        msgStatus:'error',
      },
    }).status(400);
  }
}

export {getBooks, getBookById, postBook, updateBook, deleteBookById, deleteAllBooks}
import {connect} from 'mongoose';
import mongo from './configs/mongoose';

(async ()=>{
  connect(mongo.DB.URI)
    .then(db => console.log(`Connected: ${db.connection.name} `))
    .catch(err => console.log(err));
})()

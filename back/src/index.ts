import dotenv from 'dotenv';
import Server from "./server";
import './database';

dotenv.config();


const server = new Server();
server.listen();
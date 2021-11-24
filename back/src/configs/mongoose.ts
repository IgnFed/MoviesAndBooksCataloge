export default {
  DB:{
    URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/catalogo',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  }
}
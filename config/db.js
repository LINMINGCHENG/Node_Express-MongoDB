const mongoose = require('mongoose');

const connection = async () =>{
   const conn = await mongoose.connect();
}
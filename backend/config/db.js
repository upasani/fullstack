const mongoose =require('mongoose');

const connect=()=>{
  return mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.feck7.mongodb.net/fullstack?retryWrites=true&w=majority')
}
module.exports = connect;
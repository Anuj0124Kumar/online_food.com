const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://anuj0214:9etATX4KuQSyh72A@cluster0.6d7isjq.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async()=>{
    try {
        await mongoose.connect(mongoURL);
        console.log("connected");
      } catch (error) {
        handleError(error);
      }
}

module.exports = mongoDB;


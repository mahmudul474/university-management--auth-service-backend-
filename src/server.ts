import mongoose from "mongoose";
import app from "./app";
import confiuge from "./confiuge";


const bootstrap =async()=>{
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/auth');

    app.listen(confiuge.port, () => {
      console.log( ` 😊 sever is  listening on port  ${confiuge.port}`)
    })

  }catch(error){
    console.log(" failed to connect to MongoDB ",error )

  }

}



bootstrap()
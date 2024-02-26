import mongoose from "mongoose";


export interface ONqueries {
    name :string,
    email:string,
    subject:string,
    message:string,
}
const querySchema=new mongoose.Schema<ONqueries>({
    name:{
      type:String,
      required:true,
      unique:true
    },
    email:{
     type:String,
    },
    message: {
        type:String,
        required:false
    }
   
  },
  {timestamps:true}
  );
  export default    mongoose.model<ONqueries>('Message',querySchema)
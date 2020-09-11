const {Schema,model}=require('mongoose')

// interface Iuser{
//     name:string
//     age:number
// }:Iuser 

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
})
module.exports=model("User",UserSchema)
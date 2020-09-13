const userOperations=require('../services/userOperationServise')
const { validationResult } = require('express-validator');
// interface UserInterface{
//     name:string,
//     age:number
// }

// interface userCreateRequest extends Request{
//     name:string
//     age:number
// }

// made a type for req

module.exports=class UserControllers{
    
   static async user_controller_create(req,res){
        try{ 
            const errors=validationResult(req)  
            if(!errors.isEmpty()){
                throw new Error('invalid data')
            }

            const UserData={
                name:req.body.name,
                age:req.body.age
            }
            const response = await userOperations.userCreate(UserData.name,UserData.age)
            if(!response){
                throw new Error('error')
            }else 
            res.status(201).send('user was created') 
        }catch(e){
            res.status(400).send({message:e.message})
        }
    }
    
   static async user_controller_find(req,res){
        try{
            const errors=validationResult(req)  
            if(!errors.isEmpty()){
                throw new Error('invalid data')
            }
            UserName=req.query.name
            const response = await userOperations.userFind(UserName)
            if(response){
                throw new Error('error')
            }else res.status(201).json({user:response})
        }catch(e){
            res.send({message:e.message})
        }
    }
   static async user_controller_update(req,res){
        try{
            
            const errors=validationResult(req)  
            if(!errors.isEmpty()){
                throw new Error('invalid data')
            }
            
            const User={
                name:req.body.name,
                newName:req.body.updateName,
                newAge:req.body.updateAge
            }
            const response = await userOperations.userUpdate(User.name,User.newName,User.newAge)
            console.log(response)
            if(!response){
                throw new Error('error')
            }else res.status(201).send('user was updated')
        }catch(e){
            res.send({message:e.message})
        }
    }

   static async user_controller_delete(req,res){
        try{
            const errors=validationResult(req)  
            if(!errors.isEmpty()){
                throw new Error('invalid data')
            }
            const UserName={
                name:req.body.name
            }
            const response = await userOperations.userDelete(UserName.name)
            if(response){
                throw new Error('error')
            }else res.status(201).send('user was deleted')
        }catch(e){
            res.send({message:e.message})
        }
    }
}





const User=require('../schemas/user_model')

module.exports=class UserOperations{ 
    
    static async userCreate(name,age){
        const ExistUser = await User.findOne({name})
        if(ExistUser){
            return false
        }
        const newUser=new User({name,age})
        await newUser.save()
        return true
    }
    
   static async userFind(name){
        const ExistUser = await User.findOne({name})
        if(ExistUser){
            return ExistUser
        }
        return false
    }
    
   static async userDelete(name){
        const ExistUser = await User.findOneAndDelete({name})
        if(ExistUser){
            return true
        }
        return false
    }
    
   static async userUpdate(name,newname,newage){
        const ExistUser = await User.findOneAndUpdate({name},{name:newname,age:newage})
        if(!!ExistUser){
            return ExistUser
        }
        return false
    }
}
const { Types } = require('mongoose') ;

exports.mockUserCreate = jest.fn(
    
    async(name,age)=>{
            return true
    }
)

exports.mockUserFind=jest.fn(
    async(name)=>{
        return {
            _id: new Types.ObjectId(),
            name
        }
    }
    
)

exports.mockUserUpdate=jest.fn(
    async(name,newname,newage)=>{
        return true
    }
)
exports.mockUserDelete=jest.fn(
    async(name)=>{
        return true
    }
)

jest.mock('../services/userOperationServise',()=>({
    get userCreate(){
        return mockUserCreate
    }
}))

jest.mock('../services/userOperationServise',()=>({
    get userFind(){
        return mockUserFind
    }
}))
jest.mock('../services/userOperationServise',()=>({
    get userUpdate(){
        return mockUserUpdate
    }
}))
jest.mock('../services/userOperationServise',()=>({
    get userDelete(){
        return mockUserDelete
    }
}))
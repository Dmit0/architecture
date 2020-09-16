const UserModel=require('../schemas/user_model')
const userOperations=require('./userOperationServise')

describe('tests of services',()=>{
    describe('test with user services',()=>{
        
        const findUser={
                   _id:'ahdskajfhdskhfa',
                   name:'user1',
                   age:'17'
               }
        const MyUser={
            name:'user1',
            age:17
        }

        describe('user create service',()=>{

            describe('user is not created cause of such user is exist',()=>{
                jest.spyOn(UserModel, 'findOne').mockReturnValue(Promise.resolve(findUser))
                test('should create a user',()=>{
                    userOperations.userCreate(MyUser.name,MyUser.age)
                    .then(result=>expect(result).not.toBeTruthy())
                })
            })

            describe('user created',()=>{
                jest.spyOn(UserModel, 'findOne').mockReturnValue(Promise.resolve(false))
                test('should create a user',()=>{
                    userOperations.userCreate(MyUser.name,MyUser.age)
                    .then( result=>expect(result).toBeTruthy())
                })
            })
           
        })

        describe('user find',()=>{
            
            describe('user is not found ',()=>{
                jest.spyOn(UserModel, 'findOne').mockReturnValue(Promise.resolve(false))
                test('should create a user',()=>{
                    userOperations.userCreate(MyUser.name)
                    .then(result=>expect(result).toBeFalsy())
                })
            })

            describe('user created',()=>{
                jest.spyOn(UserModel, 'findOne').mockReturnValue(Promise.resolve(findUser))
                test('should find a user',()=>{
                    userOperations.userFind(MyUser.name)
                    .then(result=>expect(result).toBe(findUser))
                })
            })           
        })


        describe('delete service',()=>{

            describe('user is not found ',()=>{
                jest.spyOn(UserModel, 'findOneAndDelete').mockReturnValue(Promise.resolve(false))
                test('should create a user',()=>{
                    userOperations.userCreate(MyUser.name)
                    .then(result=>expect(result).toBeFalsy())
                })
            })

            describe('user is not deleted',()=>{
                jest.spyOn(UserModel, 'findOneAndDelete').mockReturnValue(Promise.resolve(true))

                test('should find a user',()=>{
                    userOperations.userFind(MyUser.name)
                    .then(result=>expect(result).toBeTruthy())
                })
            }) 

        })



        describe(' update service ',()=>{

            describe('user is not found ',()=>{
                jest.spyOn(UserModel, 'findOneAndDelete').mockReturnValue(Promise.resolve(false))
                test('should create a user',()=>{
                    userOperations.userCreate(MyUser.name)
                    .then(result=>expect(result).toBeFalsy())
                })
            })

            describe('user is updated',()=>{
                jest.spyOn(UserModel, 'findOneAndUpdate').mockReturnValue(Promise.resolve(findUser))
                test('should find a user',()=>{
                    userOperations.userFind(MyUser.name)
                    .then(result=>expect(result).toBe(findUser))
                })
            }) 

        })
    })
})
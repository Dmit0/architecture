const supertest =require('supertest');
const app=require('../app')
const UserOperations = require('../services/userOperationServise')



describe('controllers test',()=>{
    const request = supertest(app)
    
    describe('user controller',()=>{
        
        describe('create controller',()=>{

            jest.spyOn(UserOperations,'userCreate').mockImplementation(() => true);
            
            const route='/user/create'

            test('should send an error if send body is empty',()=>{  
                request.post(route).set({name:'',age:'12'})
                .then(response=>{
                    expect(response.status).toBe(400)
                    expect(response.body).toBe({message:'invalid data'})
                })              
            })

            test('should return a response from service',()=>{
                request.post(route).set({name:'sdas',age:'12'})
                .then(response=>{
                    //expect(response.status).toBe(201)
                    expect(response.body).toBe({message:'user was created'})
                })
                
            })

        })
        
        describe('find controller',()=>{

            const route='/user/find'
            
            jest.spyOn(UserOperations,'userFind').mockImplementation(() => {
                return{
                    _id: new Types.ObjectId(),
                    name:'abc',
                    age:12
                }
            });

            test('should validate input data',()=>{
                request.get(route).query({name:''})
                .then(response=>{
                    expect(response.body).toStrictEqual({message:'invalid data'}) 
                })               
            })
            
            test('should find user',()=>{
                 request.get(route).query({name:'qwerty'})
                .then(response=>{
                    expect(response.status).toBe(201) 
                    expect(request_data.name).toBe(response.user.name)
                })   
            })

        })
        
        describe('update controller',()=>{

            const route='/user/update'
            
            jest.spyOn(UserOperations,'userUpdate').mockImplementation(() => true);

            test('should validate input data',()=>{
                
                request.get(route).set({name:'qwert',newname:'',newage:'12'})
                .then(response=>{
                    expect(response.body).toStrictEqual({message:'invalid data'})
                    expect(mockUserUpdate).not.toBeCalled()
                })
                
            })

            test('should return a response from service',()=>{
                request.get(route).set({name:'qwert'})
                .then(response=>{
                    expect(mockUserUpdate).toBeCalled()
                    expect(response.status).toBe(201) 
                })
                
            })
        
        })
        
        describe('delete controller',()=>{
            const route='/user/delete'
            
            jest.spyOn(UserOperations,'userDelete').mockImplementation(() => true);

            test('should validate input data',()=>{
                request.get(route).set({name:'qwert'})
                .then(response=>{
                    expect(response.body).toStrictEqual({message:'invalid data'})
                    expect(mockUserDelete).not.toBeCalled()
                })
                
            })
            test('should return a response from service',()=>{
                request.get(route).set({name:'qwert',age:'12'})
                .then(response=>{
                    expect(mockUserDelete).toBeCalled()
                    expect(response.status).toBe(201)
                })
                
            })
        })
    })
})
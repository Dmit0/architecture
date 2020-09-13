const supertest =require('supertest');
const app=require('../app')
const {mockUserCreate,mockUserFind,mockUserUpdate,mockUserDelete}=require('./mock')




describe('controllers test',()=>{
    const request = supertest(app)
    
    describe('user controller',()=>{
        
        describe('create controller',()=>{

            beforeEach(()=>{
                mockUserCreate.mockClear()
            })
            
            const route='/user/create'
            
            const request_data={
                name:'qwerty',
                age:'123'
            }
            
            const error_request_data={
                name:'',
                age:'12'
            }
            
            it('should send an error if send body is empty',async()=>{              
                const response = await request.post(route).send(error_request_data).set('Content-Type', 'application/json')
                expect(response.status).toBe(400)
                expect(mockUserCreate).not.toBeCalled() 
                expect(response.body).toStrictEqual({message:'invalid data'})
            })

            it('should return a response from service',async()=>{
                const response = await request.post(route).send(request_data).set('Content-Type', 'application/json')
                expect(mockUserCreate).toBeCalled() 
                expect(response.status).toBe(201)
                expect(response.body).toStrictEqual('user was created')
            })

        })
        
        describe('find controller',()=>{

            const route='/user/find'
            
            beforeEach(()=>{
                mockUserFind.mockClear()
            })

            test('should validate input data',async()=>{
                const response = await request.get(route).query({name:''})
                expect(response.body).toStrictEqual({message:'invalid data'})
                expect(mockUserFind).not.toBeCalled()
            })
            
            test('should return a response from service',async()=>{
                const response = await request.get(route).query({name:'abc'})
                expect(mockUserFind).toBeCalled()
                expect(response.status).toBe(201)
                
            })
        })
        
        describe('update controller',async()=>{

            const route='/user/update'
            
            beforeEach(()=>{
                mockUserUpdate.mockClear()
            })

            test('should validate input data',async()=>{
                const response = await request.put(route).send({name:''})
                expect(response.body).toStrictEqual({message:'invalid data'})
                expect(mockUserUpdate).not.toBeCalled()
            })
            test('should return a response from service',async()=>{
                const response = await request.put(route).send({name:'abc'})
                expect(mockUserUpdate).toBeCalled()
                expect(response.status).toBe(201)
            })
        
        })
        
        describe('delete controller',()=>{


            const route='/user/delete'
            
            beforeEach(()=>{
                MockUserDelete.mockClear()
            })

            test('should validate input data',async()=>{
                const response = await request.delete(route).send({name:''})
                expect(response.body).toStrictEqual({message:'invalid data'})
                expect(mockUserDelete).not.toBeCalled()
            })
            test('should return a response from service',async()=>{
                const response = await request.delete(route).send({name:'abc'})
                expect(mockUserDelete).toBeCalled()
                expect(response.status).toBe(201)
            })
        })
    })
})

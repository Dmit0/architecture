const supertest =require('supertest');
const app=require('../app')


describe('controllers test',()=>{
    const request = supertest(app)
    
    describe('user controller',()=>{
        
        describe('create controller',()=>{
            
            const route='/user/create'
            
            const request_data={
                name:'qwerty',
                age:'123'
            }
            
            const error_request_data={
                name:'',
                age:'12'
            }
            
            test('should send an error if send body is empty',async()=>{
                //замокать метод из сервиса
                const response = await request.post(route).send(error_request_data).set('Content-Type', 'application/json')
                console.log('UGYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYK')
                console.log(response.status)
                expect(response.status).toBe(400)
            })
        })
    })
})
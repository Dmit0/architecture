const chai =require('chai');
const chaiHttp =require('chai-http') ;
const routes=require('../routes/user_router')


chai.use(chaiHttp);


describe('controllers test',()=>{
    describe('user controller',()=>{
        
        describe('create controller',()=>{
            request_data={
                name:'qwerty',
                age:'123'
            }
            error_request_data={
                name:'',
                age:'12'
            }
            it('should return a response from microservice',()=>{

                

            })
            it('should validate input data',()=>{
              
                chai.request(routes)
                .get('/find:qwerty}')
                .then(res=>{
                    console.log(res)
                })
            
            })
            it('should make a response cod',()=>{

            })
        })
        
        describe('find controller',()=>{
            it('should validate input data',()=>{

            })
            it('should return a response from microservice',()=>{

            })
            it('should make a response cod',()=>{

            })
        })
        
        describe('update controller',()=>{
            it('should validate input data',()=>{

            })
            it('should return a response from microservice',()=>{

            })
            it('should make a response cod',()=>{

            })
        })
        
        describe('delete controller',()=>{
            it('should validate input data',()=>{

            })
            it('should return a response from microservice',()=>{

            })
            it('should make a response cod',()=>{

            })
        })
    })
})
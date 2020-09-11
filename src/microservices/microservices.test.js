
const userOperations=require('./userOperationServise')

describe('tests of microservices',()=>{
    describe('test with user microservices',()=>{
        describe('user create microservice',()=>{
            it('should create a user',async(done)=>{
                const response = await userOperations.userCreate('qwert','23')
                console.log(response)
            })
            it('shouldnt create a user if such username exist',async(done)=>{
                await userOperations.userCreate('qwert','23')
                const response1=await userOperations.userCreate('qwert','24')
                console.log(response1)
            })
        })
    })
})
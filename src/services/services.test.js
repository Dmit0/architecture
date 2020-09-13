
const userOperations=require('./userOperationServise')

//const {MockUserSeviceCreate}=require('./mock')

jest.mock('findOne')

describe('tests of microservices',()=>{
    describe('test with user microservices',()=>{
        
        describe('user create microservice',()=>{
           beforeEach(()=>{
                MockUserSeviceCreate.mockClear()
           })
            test('should create a user',async()=>{
                //const response = await userOperations.userCreate('qwert','23')
                //console.log(response)
            })
            
            test('shouldnt create a user if such username exist',()=>{
                //await userOperations.userCreate('qwert','23')
                //const response1=await userOperations.userCreate('qwert','24')
                //console.log(response1)
            })
        })
    })
})
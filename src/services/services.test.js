const {MongoClient} = require('mongodb');
const userOperations=require('./userOperationServise')

//const {MockUserSeviceCreate}=require('./mock')

jest.mock('findOne')

describe('tests of services',()=>{
    describe('test with user services',()=>{
        
        // let connection;
        // let db;

        // beforeAll(async () => {
        //     connection = await MongoClient.connect(global.__MONGO_URI__, {
        //       useNewUrlParser: true,
        //     });
        //     db = await connection.db(global.__MONGO_DB_NAME__);
        //   });

        //   afterAll(async () => {
        //     await connection.close();
        //     await db.close();
        //   });

        describe('user createservice',()=>{
           
            test('should create a user',async()=>{
                //const response = await userOperations.userCreate('qwert','23')
                //console.log(response)
                // const users = db.collection('users');
                // const mockUser = {name: 'some-user-id', age: '123'};
                // const insertedUser = await users.findOne({_id: 'some-user-id'});
            
            })
            
            test('shouldnt create a user if such username exist',()=>{
                //await userOperations.userCreate('qwert','23')
                //const response1=await userOperations.userCreate('qwert','24')
                //console.log(response1)
            })
        })
    })
})
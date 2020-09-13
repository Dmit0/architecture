const express=require('express')
const user_routs=require('./routes/user_router')
const mongoose=require('mongoose')
const app=express()
const config=require('config')


app.use(express.json({extended:true}))
app.use('/user/',user_routs)

const PORT=config.get('PORT') || 3000
const url=config.get('mongoURL')


async function start(){
    try{
        await mongoose.connect(url),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:true
        }
        app.listen(PORT)
        console.log(`server was started ${PORT}`)
    }catch(e){
        console.log('server error',e.message)
    }
}
start()
module.exports=app


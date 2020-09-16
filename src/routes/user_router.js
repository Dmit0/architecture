const {Router}=require('express')
const user_router=Router()

const { body,query } = require('express-validator');

const UserControllers=require('../controllers/user_controllers')

user_router.post('/create',[
    body('name').notEmpty(),
    body('age').notEmpty()
],UserControllers.user_controller_create)

user_router.get('/find:name',[
    query('name').notEmpty()
],UserControllers.user_controller_find)

user_router.put('/update',[
    body('name').notEmpty(),
    body('updateName').notEmpty(),
    body('updateAge').notEmpty(),
],UserControllers.user_controller_update)

user_router.delete('/delete',[
    body('name').notEmpty()
],UserControllers.user_controller_delete)


module.exports=user_router
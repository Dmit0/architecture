const {Router}=require('express')
const user_router=Router()

const { body,query,check } = require('express-validator');

const UserControllers=require('../controllers/user_contollers')

user_router.post('/create',[
    body('name','should be non-emptry').notEmpty(),
    body('age','should be non-emptry').notEmpty()
],UserControllers.user_controller_create)

user_router.get('/find',[
    query('name').notEmpty()
],UserControllers.user_controller_find)

user_router.put('/update',[
    check('name','should be non-emptry').notEmpty(),
    check('updateName','should be non-emptry').notEmpty(),
    check('updateAge','should be non-emptry').notEmpty(),
],UserControllers.user_controller_update)

user_router.delete('/delete',[
    check('name','should be non-emptry').notEmpty()
],UserControllers.user_controller_delete)


module.exports=user_router
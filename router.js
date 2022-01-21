const { Router } = require('express');
const IndexController = require('./controllers/index');
const GetUsersController = require('./controllers/users/get');
const AddUserController = require('./controllers/users/add');
const UpdateUserController = require('./controllers/users/update');
const DeleteUserController = require('./controllers/users/delete');
const MultipleDeleteUserController = require('./controllers/users/multiple-delete');

const router = new Router();

router.get('/', IndexController);
router.get('/users', GetUsersController);
router.post('/users', AddUserController);
router.patch('/users/:id', UpdateUserController);
router.delete('/users/:id', DeleteUserController);
router.delete('/users', MultipleDeleteUserController);

module.exports = router;

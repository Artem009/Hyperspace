const { Router } = require('express');
const userControllers = require('./controllers');
const { wrap } = require('../../../base/controller');


const router = Router();
router.post('/', wrap(userControllers.createUser));
router.get('/', wrap(userControllers.listUser));
router.get('/:id', wrap(userControllers.findOneUser));
router.patch('/:id', wrap(userControllers.updateUser));
router.delete('/:id', wrap(userControllers.deleteUser));

module.exports = router;

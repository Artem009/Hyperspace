const { Router } = require('express');
const usersRouter = require('./users');

const router = Router();
router.use('/user', usersRouter);

module.exports = router;

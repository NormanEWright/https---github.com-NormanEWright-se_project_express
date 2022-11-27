const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');

router.get('/user', getUsers);
router.get('/user/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
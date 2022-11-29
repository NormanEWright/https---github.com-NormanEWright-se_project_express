const User = require('../models/user');

// Get all users
const getUsers = (req, res) => {
  console.log(req.body);

  User.find({})
    .then((users) => {
      console.log(users)
      res.status(200).send({ User: users })
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Error from getUsers' })
    });
}

// Get user by id
const getUserById = (req, res) => {
  const { _id } = req.user._id;
  console.log(_id);

  User.findById({ _id })
    .orFail()
    .then((user) => res.status(200).send({ User: user }))
    .catch((e) => res.status(500).send({ message: 'Error from getUserById' }));
}

// Create a user
const createUser = (req, res) => {
  const { name, avatar } = req.body;
  console.log(name, avatar);
  User.create({ name, avatar })
    .then((user) => {
      res.status(200).send({ User: user });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Error from createUser', e })
    });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
}
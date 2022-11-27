const User = require('../models/user');

// Get all users
const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      console.log(users)
      res.status(200).send({ data: users })
    })
    .catch((e) => res.status(500).send({ message: 'Error from getUsers' }));
}

// Get user by id
const getUserById = (req, res) => {
  const { userId } = req.body;
  console.log(userId);

  User.findById({ userId })
    .orFail()
    .then((user) => res.status(200).send({ data: user }))
    .catch((e) => res.status(500).send({ message: 'Error from getUserById' }));
}

// Create a user
const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => {
      console.log(user);
      res.status(201).send({ data: user });
    })
    .catch((e) => res.status(500).send({ message: 'Error from createItem', e }));
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
}
const User = require('../models/user');

// Get all users
const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      console.log(users)
      res.status(200).send({ User: users })
    })
    .catch((e) => res.status(500).send({ message: 'Error from getUsers' }));
}

// Get user by id
const getUserById = (req, res) => {
  const { userId } = req.body._id;
  console.log(userId);

  User.findById({ userId })
    .orFail()
    .then((user) => res.status(200).send({ User: user }))
    .catch((e) => res.status(500).send({ message: 'Error from getUserById' }));
}

// Create a user
const createUser = (req, res) => {
  console.log(1);
  const { name, avatar } = req.body;
  console.log(2)
  User.create({ name, avatar })
    .then((user) => {
      console.log(3);
      res.status(201).send({ User: user });
    })
    .catch((e) => res.status(500).send({ message: 'Error from createUser', e }));
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
}
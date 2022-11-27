const ClothingItem = require('../models/clothingItem');

// Create Clothing Item
const createItem = (req, res) => {
  console.log(req);
  console.log(req.body);

  const {name, weather, imageURL} = req.body;

  ClothingItem.create({name, weather, imageURL})
  .then((item) => {
    console.log(item);
    res.status(201).send({ ClothingItem: item });
  }).catch((e) => {
    res.status(500).send({message: 'Error from createItem', e});
  })
};

// Get Clothing Items
const getItems = (req, res) => {
  ClothingItem.find({})
  .then((items) => res.status(200).send({ items }))
  .catch((e) => {
    res.status(500).send({message: "Error from getItems", e});
  });
}

// Update Clothing Item
const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageURL } = req.body;
  console.log(itemId, imageURL);

  ClothingItem.findByIdAndUpdate(itemId, {$set: {imageURL}}).orFail()
  .then((item) => res.status(200).send({ data:item }))
  .catch((e) => {
    res.status(500).send({message: "Error from updateItem", e})
  })
}

// Delete Clothing Item
const deleteItem = (req, res) => {
  const { itemId } = req.params;
  console.log(itemId);

  ClothingItem.findByIdAndDelete(itemId).orFail()
  .then((item) => res.status(204).send({}))
  .catch((e) => {
    res.status(500).send({ message: "Error from deleteItem", e })
  })
}

module.exports = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
}
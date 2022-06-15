const { Pet } = require("../models/pet.model");

module.exports.test = (req, res) => {
  res.json("Hello World");
};

module.exports.create = (req, res) => {
  Pet.create(req.body)
    .then((newPet) => res.json(newPet))
    .catch((err) => res.status(400).json(err));
};

module.exports.allPets = (req, res) => {
  Pet.find()
    .then((allPets) => res.json(allPets))
    .catch((err) => res.status(400).json(err));
};

module.exports.onePet = (req, res) => {
  Pet.findOne({ _id: req.params.pet_id })
    .then((onePet) => res.json(onePet))
    .catch((err) => res.status(400).json(err));
};

module.exports.updatePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.pet_id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => res.json(updatedPet))
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.pet_id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json({ err }));
};

const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("api/pets/test", PetController.test)
  app.post("/api/pets/new", PetController.create);
  app.get("/api/pets", PetController.allPets);
  app.get("/api/pets/:pet_id", PetController.onePet);
  app.put("/api/pets/:pet_id", PetController.updatePet),
  app.delete("/api/pets/:pet_id", PetController.deletePet);
};

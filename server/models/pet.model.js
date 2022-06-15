const mongoose = require("mongoose");

const PetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be provided"],
      minLength: [3, "PET NAME MUST HAVE AT LEAST 2 CHARACTERS"],
    },
    type: {
      // type URL Fix
      type: String,
      required: [true, "Type must be provided"],
      minLength: [3, "PET TYPE MUST HAVE AT LEAST 3 CHARACTERS"],
    },
    description: {
      type: String,
      required: [true, "Description must be provided"],
      minLength: [3, "PET  DESCRIPTION MUST HAVE AT LEAST 3 CHARACTERS"],
    },
    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Pet = mongoose.model("Pet", PetSchema);

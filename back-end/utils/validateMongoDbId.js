const mongoose = require("mongoose");

const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error("O id do banco de dados MongoDb não é valido");
  }
};

module.exports = validateMongoDbId;
const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://jefsonoliveira:hmXesIDB770Z7uf6@cluster0.eh3hvqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado ao banco!")
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;

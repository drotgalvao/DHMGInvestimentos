const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log("Erro ao conectar com o banco de dados")
    }
}

module.exports = dbConnect
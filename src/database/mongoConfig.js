const mongoose = require("mongoose");

const connect = async () => {
    try {  
        await mongoose.connect(process.env.MONGODB_URI, {
             useNewUrlParser: true,
             useUnifiedTopology: true
        })
        console.log("Uhuuuuu, banco conectado, finalmente!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect
}
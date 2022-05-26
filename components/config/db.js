const mongoose = require('mongoose');


const connect = () => {

    return mongoose.connect(`mongodb+srv://aashish:kumar123@cluster0.s7nukda.mongodb.net/?retryWrites=true&w=majority`)
}

module.exports = connect;
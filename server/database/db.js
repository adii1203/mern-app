const mongoose = require('mongoose')

const db_url = 'mongodb+srv://aditya:aditya1203@cluster0.3zaujys.mongodb.net/?retryWrites=true&w=majority'

exports.connect = () => {
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('db connected');
    }).catch((error) => {
        console.log(error);
    })
}
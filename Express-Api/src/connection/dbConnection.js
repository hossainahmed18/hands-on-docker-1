let mongoose = require('mongoose');

const userName= 'joynal';
const passWord = 'Junayed12';
const database = 'first-db';
const dbUrl = `mongodb+srv://${userName}:${passWord}@cluster0.qfofi.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(dbUrl);

module.exports =  mongoose;


const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://breaney:betty@cluster0.7v0na.mongodb.net/taco-truck-app?retryWrites=true&w=majority';

mongoose.connect(connectionString, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
});
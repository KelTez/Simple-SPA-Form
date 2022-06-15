const mongoose = require('mongoose')
const config = require('./config')
var cosmos = require("@azure/cosmos")

//const dbConfig = new config();

//const client = new cosmos.CosmosClient("mongodb://spa:G9KCjyGSG1TACFa2s0GmOLxljrSK310VF973xf0UZdgdaS8pQycqoEkLJBNsbA93k6dPscJy99dntOFLf7nUJQ%3D%3D@spa.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@spa@");

// mongoose.connect("mongodb://spa:G9KCjyGSG1TACFa2s0GmOLxljrSK310VF973xf0UZdgdaS8pQycqoEkLJBNsbA93k6dPscJy99dntOFLf7nUJQ%3D%3D@spa.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@spa@")
// .then(() => console.log('Connection to CosmosDB successful'))
// .catch((err) => console.error(err));

mongoose.connect("mongodb://127.0.0.1:27017/spaUsers")
.then(() => console.log('Connection to Mongo successful'))
.catch((err) => console.error(err));

const db = mongoose.connection

module.exports = db
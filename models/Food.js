const mongoose = require('mongoose')

const Food = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    date:{type:Date,default:Date.now}
})

module.exports = mongoose.model('Food',Food)
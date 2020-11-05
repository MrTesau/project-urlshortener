const mongoose = require('mongoose');

//pull out schema
const { Schema } = mongoose;

// create new schema for url
const urlDataSchema = new Schema({
    urlLong: String,
    urlShort: String,
   
});

const UrlData = mongoose.model('urlData', urlDataSchema );
module.exports = UrlData;
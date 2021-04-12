// TODO: create a skill model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Skill model specs
const trackSchema = new Schema({
  title: String,
  url: String, 
  artist: String,
  image: String,
  playcount: String,
  artistURL: String
}, { timestamps: true});
// This model needs to have:
// Skill field set to String 
// Level field set to String 
// Validation are optional
// Timestamps set to true  
// Make sure to module.exports your call mongoose.model  
module.exports = mongoose.model('Track', trackSchema);
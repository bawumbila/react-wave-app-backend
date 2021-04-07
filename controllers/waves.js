//TODO: require the skill model
const Wave = require('../models/wave')
async function index(req, res) {
// TODO: finish index action
  try {  
    const wavess = await Wave.find({});
    res.status(200).json(waves); // send JSON data as an HTTP response
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'something went wrong'}); 
  }
}
async function create(req, res) {
  try {
      const wave = await Wave.create(req.body);
      res.status(201).json(wave);
      // index(req, res);
  } catch (error) {
      res.status(401).json({ error: 'something went wrong' });
  }
}
module.exports = {
  index,
  create,
}
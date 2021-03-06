//TODO: require the skill model
const Track = require('../models/track')
async function index(req, res) {
// TODO: finish index action
  try {  
    const tracks = await Track.find({}).sort({_id:-1});
    console.log(tracks)
    res.status(200).json(tracks); // send JSON data as an HTTP response
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'something went wrong'}); 
  }
}
async function create(req, res) {
  try {
      console.log(req.body);
      const track = await Track.create(req.body);
      res.status(201).json(track);
      // index(req, res);
  } catch (error) {
      res.status(401).json({ error: 'something went wrong' });
  }
}
async function deleteTrack(req, res) {
  try {
      const deletefTrack = await Track.findByIdAndDelete(req.params.id);
      req.query.uid = deletefTrack.uid;
      index(req, res);
  } catch (error) {
      res.status(401).json({ error: 'something went wrong' });
  }
}
module.exports = {
  index,
  create,
  delete: deleteTrack
}
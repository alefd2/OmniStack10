const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_userName: String,               //model é o como eu desejo que os dados sejam salvos
    bio: String,                            
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev',DevSchema);

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: false },
    scoialId: { type: String, required: false },
    socialType: {type: String, required: false},
    verified: { type: Boolean, required: true },
});

module.exports = mongoose.model('users', userSchema);

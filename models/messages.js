const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    senderId: Number,
    receiverId:Number,
    text:String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

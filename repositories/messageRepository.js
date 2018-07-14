const Message=require("../models/messages");
const mongoose=require("mongoose");
const model=Message;


function MessageRepository(){
    this.model=Message;
    this.getAll=getAll;
    this.getById=getById;
    this.addMessage=addMessage;
    this.deleteMessage=deleteMessage;
    this.updateMessage=updateMessage;
}

function getAll(callback){
    let query=model.find();
    query.exec(callback);
};
function getById(id,callback){  
    id=mongoose.Types.ObjectId(id.substr(10,24));
    let query=model.findOne({_id:id});
    query.exec(callback);
};
function addMessage(info,callback){
    let newMessage=new Message(info);
    newMessage.save(callback); 
};

function deleteMessage(id,callback){
    id=mongoose.Types.ObjectId(id.substr(10,24));
    model.deleteOne({_id:id},callback);
};
function updateMessage(id,info,callback){
    id=mongoose.Types.ObjectId(id.substr(10,24));
    model.updateOne({_id:id},info,callback);
};

module.exports=new MessageRepository();
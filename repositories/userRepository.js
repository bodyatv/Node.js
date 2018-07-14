const User=require("../models/user");
const mongoose=require("mongoose");
const model=User;

function UserRepository(){
    this.model=User;
    this.getAll=getAll;
    this.getById=getById;
    this.addUser=addUser;
    this.deleteUser=deleteUser;
    this.updateUser=updateUser;
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

function addUser(info,callback){
    let newUser=new User(info);
    newUser.save(callback); 
};

function deleteUser(id,callback){
    id=mongoose.Types.ObjectId(id.substr(10,24));
    model.deleteOne({_id:id},callback);
};

function updateUser(id,info,callback){
    id=mongoose.Types.ObjectId(id.substr(10,24));
    model.updateOne({_id:id},info,callback);
};

module.exports=new UserRepository();
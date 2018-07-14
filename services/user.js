const UserRepository=require("../repositories/userRepository");

module.exports={
    findAll: callback => {
        UserRepository.getAll((err,data)=>{
            callback(err,data);
        });
    },
    findOne: (id,callback) =>{
        UserRepository.getById(id,(err,data)=>{
            callback(err,data);
        });
       
    },
    addOne: (info,callback)=>{
        UserRepository.addUser(info,(err,data)=>{
            callback(err,data);
        });
    },
    deleteUser:(id,callback)=>{
        UserRepository.deleteUser(id,(err,data)=>{
            callback(err,data);
        });
    },
    updateUser:(id,info,callback)=>{
        UserRepository.updateUser(id,info,(err,data)=>{
            callback(err,data);
        });
    }
}
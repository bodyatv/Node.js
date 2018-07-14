const MessageRepository=require("../repositories/messageRepository");

module.exports={
    findAll: callback => {
        MessageRepository.getAll((err,data)=>{
            callback(err,data);
        });
    },

    findOne:(id,callback) =>{
        MessageRepository.getById(id,(err,data)=>{
            callback(err,data);
        });
       
    },
    addOne:(info,callback)=>{
        MessageRepository.addMessage(info,(err,data)=>{
            callback(err,data);
        });
    },
    deleteMessage:(id,callback)=>{
        MessageRepository.deleteMessage(id,(err,data)=>{
            callback(err,data);
        });
    },
    updateMessage:(id,info,callback)=>{
        MessageRepository.updateMessage(id,info,(err,data)=>{
            callback(err,data);
        });
    }
}

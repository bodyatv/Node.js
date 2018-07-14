const router=require("express").Router();
const messageService=require("../services/message");

router.get('/message',function(req,res,next){
    messageService.findAll(function(err,data){
        if(err){
            res.status(400).send('Bad request');
        }
        else{
            res.data = data;
            res.json(res.data);
        }
   });
});

router.get('/message/:id',function(req,res,next){
    let id=req.params.id;
    messageService.findOne(id,function(err,data){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });
});

router.post('/message',function(req,res,next){
    let info=req.body;
    messageService.addOne(info,function(err,data){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });
});

router.delete('/messages/:id',function(req,res,next){
    let id=req.params.id;
    messageService.deleteMessage(id,function(err,data){

        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });



});

router.put('/message/:id',function(req,res,next){
    let id=req.params.id;
    let info=req.body;
    messageService.updateMessage(id,info,function(err,data){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });

});









module.exports=router;
const userService=require("../services/user");
const router=require("express").Router();

router.get('/users',function(req,res,next){
   userService.findAll(function(err,data){
        if(err){
            res.status(400).send('Bad request');
        }
        else{
            res.data = data;
            res.json(res.data);
        }
   });
    
});

router.get('/users/:id',function(req,res,next){
    let id=req.params.id;
    userService.findOne(id,function(err,data){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });
});

router.post('/user',function(req,res,next){
    let info=req.body;
    userService.addOne(info,function(err,data){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });
});

router.delete('/users/:id',function(req,res,next){
    let id=req.params.id;
    userService.deleteUser(id,function(err,data){

        if(err){
            res.status(400).send(err);
        }
        else{
            res.data=data;
            res.json(res.data);
        }
    });



});


router.put('/users/:id',function(req,res,next){
    let id=req.params.id;
    let info=req.body;
    userService.updateUser(id,info,function(err,data){
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

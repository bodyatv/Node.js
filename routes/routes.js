const user=require("./user");
const meessage=require("./message");


//bind the app to userApi,messageApi
module.exports=function(app){
    app.use(user,meessage);
};

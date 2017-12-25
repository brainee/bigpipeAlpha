var fs = require('fs');
let pageBase=require('./pageBase');

module.exports = function(req , res){
    if(req.url){
        let index=req.url.indexOf('/public/');
        if(index>-1){//static server
            let pathToFile=req.url.substring(index);
            let content = fs.readFileSync(__dirname + pathToFile).toString();
                res.end(content);
        }else{
            pageBase(req , res);
        }

    }
}
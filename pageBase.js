var fs = require('fs');
module.exports = function(req , res){
    //bigpipe测试
    res.writeHead(200 , {'Content-Type': 'text/html;charset=utf-8'});

    var html = fs.readFileSync(__dirname + "/head.html").toString();

    var i = 0;
    res.write(html);

    setTimeout(function(){
        //先加载js文件
        res.write(fs.readFileSync(__dirname + "/script.html").toString());

        //然后开始加载各个page的内容
        flush();
    },200);

    function flush(){
        if(i >= 4){
            res.end("</body></html>");
            return;
        }

        setTimeout(function(){
            res.write("<script class='element' data-id='page"+i+"' type='text/template'>" + pageFactory(i)+"</script>");
            i++;
            flush();
        },1000)
    }

    function pageFactory(pageid) {
        var page='<div>page'+pageid+'</div>';
        return page;
    }
}
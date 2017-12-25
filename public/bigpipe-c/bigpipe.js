var now = 0;
var loop = setInterval(function(){
    
    $(".element").each(function(){
        if($(this).html()){
            var $eim = $("#" + $(this).attr("data-id"));
            console.log($eim)
            $eim.html($(this).html());
            document.body.removeChild(this);
            now++;
        }
    })

    if(now == $(".page").length){
        clearInterval(loop);
    }
},200);
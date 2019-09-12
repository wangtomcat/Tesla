(function(){
    // $('.w_left li a').eq(0).addClass('w_active');
    // console.log($('.w_left li a'));
    if(getCookie('w_pre')){
        $('.w_left li a').eq(getCookie('w_pre')).addClass('w_active');
    }else{
        setCookie('w_pre','0');
        $('.w_left li a').eq(getCookie('w_pre')).addClass('w_active');
    }  
    for(let i = 0;i<$('.w_left li a').length;i++){
        $('.w_left li a').eq(i).click(function(){
            console.log(i);
            $('.w_left li a').eq(getCookie('w_pre')).removeClass('w_active');
            console.log(getCookie('w_pre'));
            $('.w_left li a').eq(i).addClass('w_active');
            setCookie('w_pre',i);
        })
    }

    //获取cookie
    function getCookie(key){
        var arr1 = document.cookie.split('; ');
        for (var i = 0; i < arr1.length; i++){
            var arr2 = arr1[i].split('=');//["user1","xiaowang"]
            if (arr2[0] === key) {
                return unescape(arr2[1]);
            }
        }
        return null;
    }

    // 删除cookie
    function removeCookie(key){
        setCookie(key,'123',-10);
    }

    //设置cookie
    function setCookie(key,value,day){
        if (day) {
            var d = new Date();
            d.setDate(d.getDate()+day);
            document.cookie = key + '=' + escape(value) + '; expires='+d;
        } else {
            document.cookie = key + '=' + escape(value);
        }
    }

    
})();
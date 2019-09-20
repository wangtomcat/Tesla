// console.log(getCookie('index-show'));
//通过cookie获取点击页面的标题
let logflag = false;
if (!getCookie('index-show')) {
    setCookie('index-show', 'index');
    $('#index').addClass('show');
} else {
    $('#' + getCookie('index-show')).addClass('show');
}


$('#header ul li a').each(function(index, value) {
    $(value).click(function() {
        // console.log( getCookie('index-show'));
        $('#' + getCookie('index-show')).removeClass('show');
        $(value).addClass('show');
        setCookie('index-show', $(value).attr('id'));
    });
});


$('#login').css('display', 'block');
// 自动登陆功能

if (getCookie('logflag')=='1') {
    logflag = true;
    $('#login').text('你好，' + getCookie('orduser'));
    setTimeout(function(){
        $('#login').unbind();
        logoutstuff();
    },200);
}


//退出登陆功能
function logoutstuff() {

    if (logflag) {
        var unlogin = document.createElement('div');
        unlogin.innerHTML = `
   <a id="now-user"> ${getCookie('orduser')} </a>
   <a id="now-user-logout"> 退出 </a>
`;

        $(unlogin).css({
            "height": "100px",
            "width": "110px",
            "background": "#222222",
            "position": "absolute",
            "top": "60px",
            "right": "0",
            "display": "none",
            "text-align": "center"

        });

        $(unlogin).children().css({
            "line-height": "40px",
            "padding": "4px 0",
            "display": "block"
        })



        $('#login').append(unlogin);

        $('#login').parent().mouseenter(function() {
            $(unlogin).slideDown(200);

        });
        $('#login').parent().mouseleave(function() {
            $(unlogin).slideUp(200);
        });

        $('#now-user-logout').click(function() {
            logflag = false;
            setCookie('logflag', '0');
            setTimeout(function(){
                $('#login').click(function() {
                    $('#k_login').css('display', 'block');
                });
            },100);
            $('#login').text("登陆");
            $(unlogin).unbind();
            removeCookie('orduser');
        });

    }

}


function setCookie(key, value, day) {
    if (day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        document.cookie = key + '=' + escape(value) + '; expires=' + d;
    } else {
        document.cookie = key + '=' + escape(value);

    }
}

function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if (arr2[0] === key) {
            return unescape(arr2[1]);
        }
    }
    return null;
}

function removeCookie(key){
    setCookie(key,'123',-10);
}

//登录功能

$('#login').click(function() {
    $('#k_login').css('display', 'block');
});

$('.k_index_login_submit').click(function() {
    // console.log($('.k_index_login_name').val(), $('.k_index_login_pass').val());

    if (!$('.k_index_login_name').val()) {
        $('.k_wrong_info').text('用户名不能为空');
        $('.k_wrong_info').css('display', 'block')
    };
    if (!$('.k_index_login_pass').val()) {
        $('.k_wrong_info').text('密码不能为空');
        $('.k_wrong_info').css('display', 'block')
    };

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/ordlogin",
        data: {
            username: $('.k_index_login_name').val(),
            password: $('.k_index_login_pass').val()
        },
        success: function(data) {
            var res = data.results;
            if (res[0]) {
                setCookie('orduser', res[0].username);
                setCookie('logflag', '1');
                $('#k_login').css('display', 'none');
                $('#login').text("你好，" + res[0].username);
                logflag = true;
                $('#login').unbind();
                logoutstuff();
            } else {
                $('.k_wrong_info').text('登陆失败，您提供的信息不正确。请重试。');
                $('.k_wrong_info').css('display', 'block');
            }
        }
    });
});
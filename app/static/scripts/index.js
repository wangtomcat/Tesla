(function () {
    $('#wrap').scroll(function () {
        // console.log($(this).scrollTop());
        // console.log(this.scrollHeight);
        $('#k_img1').css('backgroundPosition', '0 ' + ($(this).scrollTop() / this.scrollHeight) * 60 +
            'px');
        $('#k_img2').css('backgroundPosition', '0 ' + ($(this).scrollTop() / this.scrollHeight) * 60 +
            'px');
        $('#k_img3').css('backgroundPosition', '0 ' + ($(this).scrollTop() / this.scrollHeight) * 60 +
            'px');

    });



    $('.k_carchange i').click(function () {
        $(this).css('background', '#f2f2f2');
        $(this).next().css('background', 'white');
        $('.k_img2intro img').attr('src',
            'https://www.tesla.cn/tesla_theme/assets/img/models/v1.0/chassis-explorer/chassis-motor-dual@2x.jpg?20170420'
        );
    });

    $('.k_carchange em').click(function () {
        $(this).css('background', '#f2f2f2');
        $(this).prev().css('background', 'white');
        $('.k_img2intro img').attr('src',
            'https://www.tesla.cn/tesla_theme/assets/img/models/v1.0/chassis-explorer/chassis-motor-p90d@2x.jpg?20170420'
        );

    });

    $('#login').click(function () {
        $('#k_login').css('display', 'block');
    });

    $('.k_index_login_submit').click(function () {
        // console.log($('.k_index_login_name').val(), $('.k_index_login_pass').val());

        if (!$('.k_index_login_name').val()) {
            $('.k_wrong_info').text('用户名不能为空');
            $('.k_wrong_info').css('display', 'block')
        };
        if (!$('.k_index_login_pass').val()) {
            $('.k_wrong_info').text('密码不能为空');
            $('.k_wrong_info').css('display', 'block');
        };

        $.ajax({
            type: "GET",
            url: "http://localhost:3000/ordlogin",
            data: {
                username: $('.k_index_login_name').val(),
                password: $('.k_index_login_pass').val()
            },
            success: function (data) {
                var res = data.results;
                if (res[0]) {
                    setCookie('orduser', res[0].username);
                    $('#k_login').css('display', 'none');
                    $('#login').text("你好，" + res[0].username);

                } else {
                    $('.k_wrong_info').text('登陆失败，您提供的信息不正确。请重试。');
                    $('.k_wrong_info').css('display', 'block');
                }
            }
        });
    });


    // console.log(getCookie('index-show'));
    $('#index').addClass('show');
    $('#' + getCookie('index-show')).removeClass('show');
    setCookie('index-show', 'index');

    function setCookie(key, value, day) {
        if (day) {
            var d = new Date();
            d.setDate(d.getDate() + day);
            document.cookie = key + '=' + escape(value) + '; expires=' + d;
        } else {
            document.cookie = key + '=' + escape(value);
            console.log(1);
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

})();
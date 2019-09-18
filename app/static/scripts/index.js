(function () {
    $('#wrap').scroll(function () {
        // console.log($(this).scrollTop());
        // console.log(this.scrollHeight);
        $('#k_img1').css('backgroundPosition', '0 ' + ($(this).scrollTop() / this.scrollHeight) * 120 +
            'px');
        $('#k_img2').css('backgroundPosition', '0 ' + ($(this).scrollTop() / this.scrollHeight) * 90 +
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
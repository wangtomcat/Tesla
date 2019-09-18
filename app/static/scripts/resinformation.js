(function(){
    var k_reg_info = document.createElement('p');
    $(k_reg_info).attr('id','k_reg_info');
    // $(k_reg_info).text('亲，请留下您的联系方式');
    console.log(k_reg_info);
    
    $('.k_name').before(k_reg_info);
    $(k_reg_info).css({
        "color":"#cc0000",
        "font-size":"12px",
        "margin-top":"-10px"
    });
    $('#k_submit').click(function(){
        $(k_reg_info).text('');

        // console.log($('.k_name').val());
        // console.log($('.k_sex').val());
        // console.log($('.k_phone').val());
        // console.log($('.k_address').val());
        var k_reg = /^1[3-8]{1}\d{9}$/;
        if(!$('.k_phone').val()){
            $(k_reg_info).text('亲，请留下您的联系方式');
            return;
        }
        if(!(k_reg.test( $('.k_phone').val() ) )){
            $(k_reg_info).text('亲输入正确的手机号码');
            return;
        }
        if(!$('.k_sex').val()){
            $(k_reg_info).text('亲问您是先生还是女士');
            return;
        }
        if(!$('.k_name').val()){
            $(k_reg_info).text('亲，请问尊姓大名');
            return;
        }
        if(!$('.k_address').val()){
            $(k_reg_info).text('亲，请留下您打算购车的城市');
            return;
        }
        $.ajax({
            type:"GET",
            url:"http://localhost:3000/information",
            data:{
                name:$('.k_name').val(),
                sex:$('.k_sex').val(),
                phone:$('.k_phone').val(),
                address:$('.k_address').val()
            },
            success:function(data){
                var rrrr =  confirm('预约成功');
                if(rrrr){
                    window.open('index.html');
                }
            }
        });
        
    });
    var k_info_of_tit = [
        '起点',
        '发展',
        '加入大家庭',
        '今日TESLA'
    ] ;
    var k_info_of_aboout = [
        '在世界各地，AMG三个字母都象征着汽车的高性能、独特气质以及纯粹的驾驭乐趣。梅赛德斯-AMG将打造颇具型格的高性能汽车作为自己的品牌特色：包含开发设计、空气学动力特性、内饰、传动系统、发动机、悬挂、制动器和电子设备，并最终进行AMG整车的生产。',
        'AMG不只是一台大马力的奔驰汽车——它实质上是一台身负颠覆性的汽车杰作。为了能整合AMG高性能技术，并将之与汽车的性能配置完美融合，AMG的工程师所提出颇具关键性的问题：我们对纵向动力学性能有何期望？对横向动力学性能有何期望？对运动性有何要求？对舒适性有何要求？这些问题的答案将决定汽车的铸造根基。',
        'AMG高性能汽车技术与其他汽车技术有着本质上的区别，这对AMG设计中心的工作人员来说也是无比巨大的挑战： 在设计出强健匀称的外观同时，还要将高性能技术加以整合，确保将技术要求转化为独立的设计语言，打造出真正的高性能汽车。这也正是AMG始终遵循的基本原则：形式遵从性能。',
        '发动机是每台AMG汽车跳动的心脏，为确保发动机能随时激发出澎湃能量，满足汽车漫长使用期内的苛刻需求，所有AMG发动机都是在AMG工厂通过严苛的标准精心打造。AMG坚持“一位工程师，一台发动机”的品牌哲学，每台发动机都由一名技艺精湛的AMG发动机工程师单独装配而成，并在发动机铭牌上亲笔署名。'
    ];

    $('.k_info_extend_li').each(function(index,value){
        // console.log(index,value);
        $(value).click(function(){
            $(value).siblings().css('color','white');
            $(value).css('color','#ff2a2a');
            $('.k_info_extend_tit').text(k_info_of_tit[index]);
            $('.k_info_extend_p').text(k_info_of_aboout[index]);
        });
        
    })

    
    // 百度地图API功能
    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("l-map");
    map.centerAndZoom("深圳", 12); // 初始化地图,设置城市和地图级别。

    var ac = new BMap.Autocomplete( //建立一个自动完成的对象
        {
            "input": "suggestId",
            "location": map
        });

    ac.addEventListener("onhighlight", function (e) { //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function (e) { //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " +
            myValue;

        setPlace();
    });

    function setPlace() {
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 13);
            map.addOverlay(new BMap.Marker(pp)); //添加标注
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }

})();
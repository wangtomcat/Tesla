(function(){
    
    $('#k_submit').click(function(){
        // console.log($('.k_name').val());
        // console.log($('.k_sex').val());
        // console.log($('.k_phone').val());
        // console.log($('.k_address').val());
        if(!$('.k_phone').val()){
            alert('亲，请留下您的联系方式');                
            return;
        }
        if(!$('.k_sex').val()){
            alert('亲问您是先生还是女士');                
            return;
        }
        if(!$('.k_name').val()){
            alert('亲，请留下您的尊姓大名');
            return;
        }
        if(!$('.k_address').val()){
            alert('亲，请留下您打算购车的城市');
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
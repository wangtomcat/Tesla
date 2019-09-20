function ajax(option) {
    // 1.创建ajax对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();//非IE5 IE6
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');//IE5 IE6
    }

    if (option.method == 'get' || option.method == 'GET') {
        // 2.连接服务器
        xhr.open(option.method,option.url+'?'+option.datas+'&_='+new Date().getTime(),true);//解决get缓冲问题
        // 3.将请求发送到服务器
        xhr.send(null);//get请求
    } else if (option.method == 'post' || option.method == 'POST'){
        // 2.连接服务器
        xhr.open(option.method,option.url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // 3.将请求发送到服务器
        xhr.send(option.datas);//post请求
    } else {
        alert('暂时只支持get与post请求.');
        return;
    }

    // 4.服务器响应情况
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {//请求完成
            if (xhr.status == 200) {//ok 成功
                option.succeed(xhr.responseText);
            }else {
                option.succeed(xhr.status);
            }
            
        }
    }
}

var ipt = document.querySelector('#_lxtuling  .ipt');
var list = document.querySelector('#_lxtuling .list');
var chart = document.querySelector('#_lxchart');
var tuling = document.querySelector('#_lxtuling');
var span = document.querySelector('#_lxtuling .wrap h3 span');
var register = document.querySelector('#_lxregister');
var em = document.querySelector('#_lxregister .block5 em');
var btns =document.querySelectorAll('#_lxcar1type .buy');
var ban = document.querySelector('#_lxregister .ban');
chart.onclick = function(){
    chart.children[0].style = 'display:none';
    tuling.style = 'display:block';
}
span.onclick = function(){
    tuling.style = 'display:none';
    chart.children[0].style = 'display:blocsk';
}

for(var i = 0; i < btns.length ; i++){
    btns[i].onclick = function(){
        register.style = 'display:block';
        ban.style = 'display:block';
    }
}
em.onclick = function(){
    register.style = 'display:none';
    ban.style = 'display:none';
}



function msgLeft(val){
    var msg = document.createElement('li');
    msg.className = 'left';
    msg.innerHTML = '<span>'+val+'</span>';
    list.appendChild(msg);
}

function msgRight(val){
    var msg = document.createElement('li');
    msg.className = 'right';
    msg.innerHTML = '<span>'+val+'</span>';
    list.appendChild(msg);
}


ipt.onkeyup = function(e){
    if(e.ctrlKey&&e.keyCode == 13 || e.keyCode == 13){
        msgRight(ipt.value);
        list.scrollTop = 100000000000;
        ajax({
            url: 'http://www.tuling123.com/openapi/api',
            method: 'get',
            datas: 'key=4670f9d766704929b7983312808cdfa7&userid=xiaocuo&info='+ipt.value,
            succeed:function(str){
                var json = JSON.parse(str);
                list.scrollTop = 10000000;
                console.log(json);
                
                msgLeft(json.text);
            },
            failed:function(msg) {
                console.log(msg);
                
            }
        });
        ipt.value = '';
    }
}



// console.log($('.man').prop('checked'));
console.log($('.man').val());
console.log($('.man').prop('checked'));

// console.log($('.lxtypecar option:selected').val());
// console.log($('.lxtypecar option:selected').val());



$('.button').click(function(){
    var username = $('.username').val();
    if($('.man').prop('checked')){
        var sex = $('.man').val();
        console.log($('.man').val());
    }else{
        var sex = $('.women').val();
        console.log($('.women').val());
    }
    var phone = $('.phone').val();
    var cartype = $('.lxtypecar').val();
    var money = $('.money').val();
    var address = $('.address').val();
    // console.log($('.lxtypecar').val());
      

    $.ajax({
        type:'GET',
        url:'http://localhost:3000/cars',
        data:{
            name : username,
            sex : sex,
            phone : phone,
            car : cartype,
            price : money,
            address : address
        },
        succeed:function(data){
            alert('您所购买的车辆已经下单，请等待工作人员与你联系');
        }
    });


    alert('亲，您所购买的车辆已经下单，请等待工作人员与你联系');

    register.style = 'display:none';
    ban.style = 'display:none';

});
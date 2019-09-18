$(function(){
   
    console.log($);
    var num=0;
    var arr=[];
    console.log($('.L-ipt').eq(0));
    console.log($('.L-ipt')[1]);
    console.log($('.L-ipt'));
    
    
    $('.L-ipt').eq(num ).on('blur', function () {
        var val = this.value.replace(/\s+/g, '');
    localStorage.setItem('username', val);
   
    })



   $('.L-ipt').eq(num+1).on('blur',function(){
    
       var val=this.value.replace(/\s+/g,'');
       var reg=/^[0-9a-z]{8,16}$/gi;
       if(reg.test(val)){
           arr[0]=1;
           $('.L-tip').eq(num).css('display','none');
           return arr[0];
       }
       else{
           arr[0] = 0;
           $('.L-tip').eq(num).css('display', 'inline-block');
           return arr[0];
       }
    })

      
    $('.L-ipt').eq(num + 2).on('blur', function () {

        var val = this.value.replace(/\s+/g, '');
        var reg = /^(1|[+861])[3-9]\d{9}$/g;
        if (reg.test(val)) {
            arr[1] = 1;
            $('.L-tip').eq(num+1).css('display', 'none');

        }
        else {
            arr[1] = 0;
            $('.L-tip').eq(num+1).css('display', 'inline-block');
        }
        return arr[1];
    }  )
  
    
    
    console.log($('.L-ipt').eq(num + 3));
/*---------------------------------------- 向服务器发送数据------------------------------------------------------ */
    var L_flag2 = 0;

    $('.L-ipt').eq(0).blur(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/reorduser",
            data: {
                username: $(this).val()
            },
            success: function (data) {
                var results = data.results;
                // console.log(results);
                if (results[0]) {
                    L_flag2 = 0;
                    alert('你输入的用户名已存在！！！');
                } else {
                    L_flag2 = 1;
                }
            }
        })
    });









    $('.L-ipt').eq(num + 3).eq(0).on('click',function(){
    if ($('.L-ipt').eq(0).val() == '' || $('.L-ipt').eq(num + 1).val() == '' ||
        $('.L-ipt').eq(2).val() == '') {
        alert('输入不能为空');
        return false;
    }

    for (var i = 0; i < 2; i++) {
        
        if (arr[i] == 0) {
            alert('请正确输入');
            return false;
        }
    }

       
    $.ajax({
        type:"GET",
        url:"http://localhost:3000/register",
       
        data: {
            username: $('.L-ipt').eq(0).val(),
            password: $('.L-ipt').eq( 1).val(),
            phone: $('.L-ipt').eq(2).val(),
        },
        success:function(data){
            
            alert('注册成功')
            window.open('../views/index.html', '_blank');
        }
    });

})


})
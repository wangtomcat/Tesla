var lis =document.querySelectorAll('#_lxcar .box li');
var ems =document.querySelectorAll('#_lxcar .box em');
for(var i = 0 ; i < lis.length ; i++){
    lis[i].onmouseenter = function(){
        // console.log(this.children[1].className);
        // console.log(this.children[0].children[0]);
        
        this.children[0].children[0].className = 'span';
        this.children[0].children[1].className = 'em'
        
    }
    lis[i].onmouseleave = function(){
        this.children[0].children[0].className = '';
        this.children[0].children[1].className = '';
    }

}



/* 运动 */

var lxb = document.querySelectorAll('.b');
var lxa = document.querySelectorAll('.a');

for(var i = 0 ; i < lxb.length ; i++){
    lxb[i].timer;
    lxa[i].onmouseover = function(){
        lxmove(this.parentNode.children[1],-200);
    }
    lxa[i].onmouseout = function(){
        lxmove(this.parentNode.children[1],50);
    }
}

function lxmove(dom,target){
    clearInterval(dom.timer);
    dom.timer = setInterval(function (){
        var speed = (target - dom.offsetLeft) / 10;//持续变好的速度

        // 浮点数计算，造成数据丢失，无法到达目的地  => 取整
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        
        // 剩余运动量 <= 每次运动的量5
        if (Math.abs(dom.offsetLeft - target) <= Math.abs(speed)) {
            clearInterval(dom.timer);
            dom.style.left = target + 'px';//手动设置终点
        } else{
            dom.style.left = dom.offsetLeft + speed + 'px';//每次的运动
        }
    },20);
}


/* begin */
var w1 = document.body.offsetWidth;
var h1 = document.body.offsetHeight;
$('.begin').css({
    'height':h1,
    'width':w1
})
var num = 3;
var timer = setInterval(function(){
    
    num = num - 1;
    if(num == 0){
        $('.begin').css('display','none','transition','1s');
        $('.myp').css('display','none');
        clearInterval(timer);
    }
    // $('.shuzi').text()='';
    // $('.shuzi').text()=num;
    console.log($('#_lxbegin '));
    console.log($('.myp'));
    console.log(num);
},1000);

// console.log(num);



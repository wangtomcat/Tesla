 var yourcommits=(function(){
 
 function $1(selector) {
    return document.querySelector(selector);
}
function $2(selector) {
    return document.querySelectorAll(selector);
}
 /* 轮播------------------------------------------------- */
var main = $1('.L-main');
var nav1 = $1('.L-nav1');
 var acts = $1('.L-act');
var spans = $2('.L-num span');
// var active = $1('.L-active');
var num = $1('.L-num');

var imgs = $2('.L-imgs img');
var left = $1('.L-left');
var right = $1('.L-right');
var img1w=imgs[1].clientWidth;
var timer1 ,timer2;
var imgIndex=1,numIndex=0;
// console.log(img1w);
// console.log(imgs.length);
main.scrollLeft = img1w * imgIndex ;

autoMove();


function autoMove(){
    clearInterval(timer2);
    timer1=setInterval(function(){
  imgIndex++;
  if(imgIndex>=imgs.length){
      imgIndex=2;
       main.scrollLeft = img1w * (imgIndex-1);
  }
        move();

  spans[numIndex].className='';
  numIndex++;
  if(numIndex>=spans.length){
      numIndex=0
  }
    spans[numIndex].className = 'L-active';
    
 }, 1900);
}
    //  console.log(num);
     
     
     for(var i=0;i<spans.length;i++ ){
        var prevIndex = 0;
        
     spans[i].index=i;
         spans[i].onmouseenter=function(){
        //  spans[i].onmouseenter = function () {
         clearInterval(timer1);
         clearInterval(timer2);
         spans[numIndex].className='';
         spans[prevIndex].className='';
         this.className ='L-active';
         prevIndex=this.index;
         imgIndex=this.index+1;
         move();
     }

         spans[i].onmouseleave = function () {

             autoMove();
         }
 }


function move(){
    var start=main.scrollLeft;
    var end=imgIndex * img1w;
    var minStep=0;
    var maxStep=20;
    var everyStep=(end-start)/maxStep;
    clearInterval(timer2);
    timer2 = setInterval(function(){
        // timer2 = setInterval(function () {
        minStep++;
        if(minStep>=maxStep){
            clearInterval(timer2);
        }
        start += everyStep;
        main.scrollLeft= start;
    }, 15);
}
    

/* 评论------------------------------------------------------- */
var jia = $1('.L-jia');
var conc = $1('.L-conc');
var btni = $1('.L-imp button');
var btnl = $1('.L-btnl');
var btng = $1('.L-btng');
var listu = $1('.L-list');
var shows = $2('.L-show');
var picks = $2('.L-show2');
var contents = $2('.L-content');
var  lists=$2('L-list li')


btni.onclick=function(){
    jia.style.display='block'
}
btng.onclick = function () {
    jia.style.display = 'none'
}
   
function getCookie(key) {
         var arr1 = document.cookie.split('; ');
         for (var i = 0; i < arr1.length; i++) {
             var arr2 = arr1[i].split('=');//["user1","xiaowang"]
             if (arr2[0] === key) {
                 return unescape(arr2[1]);
             }
         }
         return null;
     } 




btnl.onclick = function () {

    console.log(conc.value);
        if (conc.value=='') {
            alert('输入不能为空');
            return false;
        }





   var d=new Date();
   var years=d.getFullYear();
   var months=d.getMonth()+1;
   var days=d.getDate();
   var col=years+'年'+months+'月'+days+'日';
   console.log(col)
    var name1 = getCookie('orduser');
   
 

    function getCookie(key) {
        var arr1 = document.cookie.split('; ');
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split('=');//["user1","xiaowang"]
            if (arr2[0] === key) {
                return unescape(arr2[1]);
            }
        }
        return null;
    }


 $.ajax({
    type:"GET",
    url:"http://localhost:3000/forum",
    data:{
        username:name1,
        date:col,
        say: conc.value,
      
    },
    success:function(data){
        load();
        // alert('发表成功!!!!');
        conc.value='';
        console.log(conc.value)
        
       
    }
});

}



listu.onclick=function(ev){
    var e=ev||window.event;
    var tag=e.target||e.srcElement;
    console.log(e.target);
    if (tag.className=='L-show'
    
    &&tag.parentNode.parentNode.parentNode.className=='L-list')
    {
        tag.parentNode.parentNode.children[2].style.display='block'  
        console.log(tag.parentNode.parentNode.children[2]);
    }

    if (tag.className == 'L-show2'

        && tag.parentNode.parentNode.parentNode.className == 'L-list') {
        tag.parentNode.parentNode.children[2].style.display = ''
        console.log(tag.parentNode.parentNode.children[2]);
    }


}


     load();
     function load() {
         $.ajax({
             type: "GET",
             url: "http://localhost:3000/reforum",
             data: {},
             success: function (data) {
                 var results = data.results;
                 var i = results.length - 1;
                 var html = "";
                 for (; i >= 0; i--) {
                     html += `
               <li>
           	<h2>${results[i].username}</h2>
           	 <p>${results[i].date} <button class="L-show2">pick up</button><button class="L-show">show  all</button></p>
            <span class="L-content">
               ${results[i].say}
            </span>
         </li>
                `
                 }
                 $(".L-list").html(html);
             }
         });
     }


})();


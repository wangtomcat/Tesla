function ajax(e){if(window.XMLHttpRequest)var t=new XMLHttpRequest;else t=new ActiveXObject("Microsoft.XMLHTTP");if("get"==e.method||"GET"==e.method)t.open(e.method,e.url+"?"+e.datas+"&_="+(new Date).getTime(),!0),t.send(null);else{if("post"!=e.method&&"POST"!=e.method)return void alert("暂时只支持get与post请求.");t.open(e.method,e.url,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(e.datas)}t.onreadystatechange=function(){4==t.readyState&&(200==t.status?e.succeed(t.responseText):e.succeed(t.status))}}var ipt=document.querySelector("#_lxtuling  .ipt"),list=document.querySelector("#_lxtuling .list"),chart=document.querySelector("#_lxchart"),tuling=document.querySelector("#_lxtuling"),span=document.querySelector("#_lxtuling .wrap h3 span"),register=document.querySelector("#_lxregister"),em=document.querySelector("#_lxregister .block5 em"),btns=document.querySelectorAll("#_lxcar1type .buy"),ban=document.querySelector("#_lxregister .ban");chart.onclick=function(){chart.children[0].style="display:none",tuling.style="display:block"},span.onclick=function(){tuling.style="display:none",chart.children[0].style="display:blocsk"};for(var i=0;i<btns.length;i++)btns[i].onclick=function(){register.style="display:block",ban.style="display:block"};function msgLeft(e){var t=document.createElement("li");t.className="left",t.innerHTML="<span>"+e+"</span>",list.appendChild(t)}function msgRight(e){var t=document.createElement("li");t.className="right",t.innerHTML="<span>"+e+"</span>",list.appendChild(t)}em.onclick=function(){register.style="display:none",ban.style="display:none"},ipt.onkeyup=function(e){(e.ctrlKey&&13==e.keyCode||13==e.keyCode)&&(msgRight(ipt.value),list.scrollTop=1e11,ajax({url:"http://www.tuling123.com/openapi/api",method:"get",datas:"key=4670f9d766704929b7983312808cdfa7&userid=xiaocuo&info="+ipt.value,succeed:function(e){var t=JSON.parse(e);list.scrollTop=1e7,console.log(t),msgLeft(t.text)},failed:function(e){console.log(e)}}),ipt.value="")},console.log($(".man").val()),console.log($(".man").prop("checked")),$(".button").click(function(){var e=$(".username").val();if($(".man").prop("checked")){var t=$(".man").val();console.log($(".man").val())}else{t=$(".women").val();console.log($(".women").val())}var n=$(".phone").val(),l=$(".lxtypecar").val(),o=$(".money").val(),a=$(".address").val();$.ajax({type:"GET",url:"http://localhost:3000/cars",data:{name:e,sex:t,phone:n,car:l,price:o,address:a},succeed:function(e){alert("您所购买的车辆已经下单，请等待工作人员与你联系")}})});
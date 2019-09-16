(function(){
load();
function load(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/buycar",
        data: {},
        success: function (data) {
            var results = data.results
            // console.log(data);
            var i = 0;
            var length = results.length;
            var html = "";
            for (; i < length; i++) {
                html += `
                        <tr>
                        <td>${i+1}</td>
                        <td>${results[i].name}</td>
                        <td>${results[i].sex}</td>
                        <td>${results[i].phone}</td>
                        <td>${results[i].car}</td>
                        <td>${results[i].price}</td>
                        <td>${results[i].address}</td>
                        <td>${results[i].stuta}</td>
                        <td class="text-center">
                            <button id="buycar_edit" class="btn btn-primary btn-xs">
                            <span class="glyphicon glyphicon-ok"></span> 处理</button>
                            <button id="buycar_delete" class="btn btn-danger btn-xs">
                            <span class="glyphicon glyphicon-remove"></span> 删除</button>
                        </td>
                    </tr>
                `
            }
            $("#buycar_list").html(html)
        }
    });
}

$('#buycar_list').on('click','#buycar_edit',function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/buycarEdit",
        data: {
            name: $(this).parent().parent().children().eq(1).text(),
            stuta: "已处理",
        },
        success: function (data) {
            // console.log(data);
            alert('该购车订单已处理！');
            load();
        }
    });
});

$('#buycar_list').on('click','#buycar_delete',function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/buycarDelete",
        data: {
            name: $(this).parent().parent().children().eq(1).text()
        },
        success: function (data) {
            // console.log(data);
            alert('该用户已删除！');
            load();
        }
    });
    
});

})();
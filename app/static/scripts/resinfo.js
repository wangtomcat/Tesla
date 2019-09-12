(function(){
load();
function load(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/resinfo",
        data: {},
        success: function (data) {
            var results = data.results
            console.log(data);
            var i = 0;
            var length = results.length;
            var html = "";
            for (; i < length; i++) {
                html += `
                        <tr>
                        <td>${results[i].name}</td>
                        <td>${results[i].sex}</td>
                        <td>${results[i].phone}</td>
                        <td>${results[i].address}</td>
                        <td>${results[i].stuta}</td>
                        <td class="text-center">
                            <button id="resinfo_edit" class="btn btn-primary btn-xs">
                            <span class="glyphicon glyphicon-ok"></span> 处理</button>
                            <button class="btn btn-danger btn-xs">
                            <span id="resinfo_delete" class="glyphicon glyphicon-remove"></span> 删除</button>
                        </td>
                    </tr>
                `
            }
            $("#resinfo_list").html(html)
        }
    });
}

$('#resinfo_list').on('click','#resinfo_edit',function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/resinfoEdit",
        data: {
            name: $(this).parent().parent().children().eq(0).text(),
            stuta: "已处理",
        },
        success: function (data) {
            console.log(data);
            alert('预约信息已处理！');
            load();
        }
    })
});

$('#resinfo_list').on('click','#resinfo_delete',function(){
    alert('123');
    
});

})();
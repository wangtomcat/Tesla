(function(){

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/orduser",
        data: {},
        success: function (data) {
            var results = data.results
            console.log(results);
            var i = 0;
            var length = results.length;
            var html = "";
            for (; i < length; i++) {
                html += `
                    <tr>
                        <td>${results[i].username}</td>
                        <td>${results[i].password}</td>
                        <td>${results[i].phone}</td>
                        <td class="text-center">
                            <button id="w_edit" class="btn btn-success btn-xs">
                            <span class="glyphicon glyphicon-pencil"></span> 编辑</button>
                            <button class="btn btn-danger btn-xs">
                            <span id="w_delete" class="glyphicon glyphicon-remove"></span> 删除</button>
                        </td>
                    </tr>
                `
            }
            $("#orduser_list").html(html)
        }
    });


    
})();
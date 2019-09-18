(function(){
load();
function load(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/proposal",
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
                        <td>${results[i].username}</td>
                        <td>${results[i].date}</td>
                        <td>${results[i].say}</td>
                        <td class="text-center">
                            <button id="proposal_delete" class="btn btn-danger btn-xs">
                            <span class="glyphicon glyphicon-remove"></span> 删除</button>
                        </td>
                    </tr>
                `
            }
            $("#proposal_list").html(html)
        }
    });
}

$('#proposal_list').on('click','#proposal_delete',function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/proposalDelete",
        data: {
            username: $(this).parent().parent().children().eq(1).text()
        },
        success: function (data) {
            // console.log(data);
            alert('该条意见信息已删除！');
            load();
        }
    });
});

// $('#proposal_list').on('click','#proposal_delete',function(){
//     alert('123');
    
// });

})();
$(document).ready(function(){
    console.log("script loaded");
    var tableContent=$("#table-content-wrap");
   
   function renderTableData(data){
    // <tr class="order-row">
    // <td class="order-data">id</td>
    // <td class="order-data">customer</td>
    // <td class="order-data">date</td>
    // <td class="order-data">amount</td>
    // <td class="order-data">status</td>
    // </tr>
    var row=$("<tr>").addClass("order-row");
    row.append($("<td>").addClass("order-data").html(data.id));
    row.append($("<td>").addClass("order-data").html(data.customerName));
    row.append($("<td>").addClass("order-data").html(data.orderDate+"<br>"+data.orderTime));
    row.append($("<td>").addClass("order-data").html(data.amount));
    row.append($("<td>").addClass("order-data").html(data.orderStatus));
    return row;
   }
    
    
    
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",function(data){
        //  console.log(data);
         for(var i=0;i<data.length;i++){
            tableContent.append(renderTableData(data[i])) ;
         }
    });
    // api call ends here

    $(".checkboxes :checkbox").click(function() {
        $(".").hide();
        $(".checkboxes :checkbox:checked").each(function() {
            $("." + $(".checkbox-filters").val()).show();
        });
     });
})
$(document).ready(function(){
    console.log("script loaded");
    var productsData=$("#products-wrap");
   
   function renderTableData(data){
    // <tr class="order-row">
    // <td class="order-data">id</td>
    // <td class="order-data">customer</td>
    // <td class="order-data">date</td>
    // <td class="order-data">amount</td>
    // <td class="order-data">status</td>
    // <td class="order-data">status</td>
    // </tr>
    var row=$("<tr>").addClass("order-row");
    row.append($("<td>").addClass("order-data").html(data.id));
    row.append($("<td>").addClass("order-data").html(data.medicineName));
    row.append($("<td>").addClass("order-data").html(data.medicineBrand));
    row.append($("<td>").addClass("order-data").html(data.expiryDate));
    row.append($("<td>").addClass("order-data").html(data.unitPrice));
    row.append($("<td>").addClass("order-data").html(data.stock));
    return row;
   }
    
    
    
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",function(data){
         console.log(data);
         for(var i=0;i<data.length;i++){
            productsData.append(renderTableData(data[i])) ;
         }
    });
    // api call ends here
})
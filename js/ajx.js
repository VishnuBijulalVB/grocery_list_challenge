function ajax(){

    //Creating XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    
    //Event listener
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var Jgrocery = response.grocery;
            console.log(Jgrocery);
            var output="";
            output+=`<tr>`;
            output+=`<th> Sl No </th>`;
            output+=`<th> Item </th>`;
            output+=`<th> Quantity </th>`;
            output+=`<th> Unit </th>`;
            output+=`<th> Department </th>`;
            output+=`<th> Notes </th>`;
            output+=`<tr>`;

            for (i=0;i<Jgrocery.length;i++) {
              output+=`<tr>`;
              output+=`<td> ${Jgrocery[i].slno} </td>`;
              output += `<td> ${Jgrocery[i].item} </td>`;
              output += `<td> ${Jgrocery[i].quantity} </td>`;
              output += `<td> ${Jgrocery[i].unit} </td>`;
              output += `<td> ${Jgrocery[i].department} </td>`;
              output += `<td> ${Jgrocery[i].notes} </td>`;
              output+=`</tr>`;
            }

            document.getElementById("grocery_table").innerHTML = output;
            document.getElementById("grocery_table").style.border="2px solid black";
        }
    }

    xhttp.open("GET","tables.json",true);
    xhttp.send();
}

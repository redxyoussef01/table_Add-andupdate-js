var clients = [];

function add(){
    var clientName = document.getElementById('name').value;
    var clientEmail = document.getElementById('email').value;
    var clientPhone = document.getElementById('phone').value;
    var clientAdress = document.getElementById('address').value;

    var client={};
    client.Name=clientName;
    client.Email=clientEmail;
    client.Phone = clientPhone;
    client.Address = clientAdress;


var tr = document.createElement('tr');
        //create elements 
        var td1= document.createElement('td');
        var td2= document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var buttonC = document.createElement('div');

        var button1 = document.createElement("button");
        button1.classList.add("btn", "btn-outline-primary");
        button1.innerHTML = "modifier";
        button1.setAttribute("onclick", "UpdateRow(this)");
   
  
   

        var button2 = document.createElement("button");
        button2.classList.add("btn", "btn-outline-danger");
        button2.innerHTML = "supprimer";
        button2.setAttribute("onclick", "deleteRow(this)");
        

        buttonC.appendChild(button1);
        buttonC.appendChild(button2);


        //insert into  the cell 
        td1.append(client.Name);
        td2.append(client.Email);
        td3.append(client.Phone);
        td4.append(client.Address);
        td5.append(buttonC);

        //insert into row
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4); 
        tr.append(td5);

        var table = document.getElementById("table");

        table.append(tr);

  document.getElementById('name').value ="";
    document.getElementById('email').value ="";
    document.getElementById('phone').value = "";
     document.getElementById('address').value="";

}


 function deleteRow(button) {
      var row = button.parentNode.parentNode.parentNode; // Get the row that contains the button
      row.parentNode.removeChild(row); // Remove the row from the table
    }


  function UpdateRow(button){
    var  row = button.parentNode.parentNode.parentNode;
  row.cells[0].textContent =  window.prompt("Please enter your name:", row.cells[0].textContent);
  row.cells[1].textContent =  window.prompt("Please enter your email:", row.cells[1].textContent);
  row.cells[2].textContent =  window.prompt("Please enter your phone:", row.cells[2].textContent);
  row.cells[3].textContent =  window.prompt("Please enter your address:",row.cells[3].textContent);
  }
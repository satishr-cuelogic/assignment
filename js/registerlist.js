function todolist(){
    var uname= location.search;

   uname=retriveUrlParameter('uname',uname);
    window.open ('todolist.html?uname='+uname,'_self',false);
  }


function updateProfile(username){
window.open ('register.html?uname='+username,'_self',false);
}


function tableCreate() {
//body reference 
var body = document.getElementsByTagName("body")[0];

// create elements <table> and a <tbody>
var tbl = document.createElement("table");
tbl.setAttribute("class", "table table-striped");
var tblBody = document.createElement("tbody");
var trhead = document.createElement('tr');
var th = document.createElement('th');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
th.appendChild(document.createTextNode("First Name"));
th1.appendChild(document.createTextNode("Last Name"));
th2.appendChild(document.createTextNode("Address"));
th3.appendChild(document.createTextNode("Operation"));
trhead.appendChild(th);
trhead.appendChild(th1);
trhead.appendChild(th2);
trhead.appendChild(th3);
tblBody.appendChild(trhead);
// alert(localStorage.length);


for (var i = 0; i<localStorage.length; i++) {

let user =JSON.parse((localStorage.getItem(localStorage.key(i))));
var tr = document.createElement('tr');
var td = document.createElement('td');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var btn = document.createElement('input');
 btn.type = "button";
 btn.className = "btn";
 btn.value = "Edit";                    
 btn.onclick =function() {updateProfile(user.username)};
 td3.appendChild(btn);
td.appendChild(document.createTextNode(user.firstName));
td1.appendChild(document.createTextNode(user.lastName));
td2.appendChild(document.createTextNode(user.address));
tr.appendChild(td);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tblBody.appendChild(tr);

//tr.appendChild(td);
}

tbl.appendChild(tblBody);
body.appendChild(tbl);
}

var operation=(function(){

    function addNewTask()
       {
           var uname= location.search;
           uname=retriveUrlParameter('uname',uname);
           window.open ('todoapplication.html?uname='+uname,'_self',false);
       }

       function updateTodoList(username,id){
           id=id.match("[0-9]");
        window.open ('todoapplication.html?uname='+username+'&id='+id,'_self',false);
       }

        function deleteTask(uname,id)
        {
            id=id.match("[0-9]");
            var edituser=JSON.parse(localStorage.getItem(uname));
            console.log(edituser.todos);
            edituser.todos.splice(id,1);
            localStorage.setItem(edituser.username,JSON.stringify(edituser));
            window.open ('todolist.html?uname='+uname,'_self',false);
        }

return {
      newTask:function()
      {
        addNewTask();
      },
      deleteCurruntTask:function(uname,id)
      {
              deleteTask(uname,id)
      },
      updateTask:function(uname,id){
        updateTodoList(uname,id)
      }
    }
})();
var createBody=(function(){
      
      return function(uname,user,i,tblBody){
               var tr = document.createElement('tr');
               var td = document.createElement('td');
               var td1 = document.createElement('td');
               var td2 = document.createElement('td');
               var td3 = document.createElement('td');
               var btn = document.createElement('input');
                btn.type = "button";
                btn.className = "btn margin-right";
                btn.value = "Edit";   
                btn.id="b"+i;      
                btn.style="margin:5px;";           
                btn.onclick =function() { operation.updateTask(uname,this.id)};
                var delbtn = document.createElement('input');
                delbtn.type = "button";
                delbtn.className = "btn";
                delbtn.value = "Delete";   
                delbtn.id="d"+i;                 
                delbtn.onclick =function() {operation.deleteCurruntTask(uname,this.id)};
                td3.appendChild(btn);
                td3.appendChild(delbtn);
               td.appendChild(document.createTextNode(user.title));
               td1.appendChild(document.createTextNode(user.tododate));
               td2.appendChild(document.createTextNode(user.markdone));
               tr.appendChild(td);
               tr.appendChild(td1);
               tr.appendChild(td2);
               tr.appendChild(td3);
               tblBody.appendChild(tr);
       }
 })();
     
    function todotableCreate(fromdate,todate,ispending,isdone) {
      var Table = document.getElementById("tasktable");
      var body = document.getElementsByTagName("body")[0];
      var tblBody = document.createElement("tbody");
      var tbl = document.createElement("table");
      tbl.setAttribute("class", "table table-striped");
      tbl.setAttribute("id", "tasktable");  
    if(Table!=null)
      {
         Table.remove();
      }
      var trhead = document.createElement('tr');
      var th = document.createElement('th');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      var th3 = document.createElement('th');
      th.appendChild(document.createTextNode("Title"));
      th1.appendChild(document.createTextNode("Date"));
      th2.appendChild(document.createTextNode("Status"));
      th3.appendChild(document.createTextNode("Operation"));
      trhead.appendChild(th);
      trhead.appendChild(th1);
      trhead.appendChild(th2);
      trhead.appendChild(th3);
      tblBody.appendChild(trhead);
      if(location.search!="")
        {
            var uname= location.search;
            uname=retriveUrlParameter('uname',uname);
           var edituser=JSON.parse(localStorage.getItem(uname));
      for (var i = 0; i<edituser.todos.length; i++) {
            let user =JSON.parse(JSON.stringify(edituser.todos[i]));
            var frdate,tdate;
           if(fromdate!="")
           {
            frdate= Date.parse(fromdate);
           }

           if(todate!="")
           {
            tdate = Date.parse(todate);
           }
           var taskdate=Date.parse(user.tododate);
           var today=new Date();
          if(fromdate=="" && todate=="" && ispending=="No")
          {
            if(user.markdone==isdone )
            {
            createBody(uname,user,i,tblBody);
            }
         }
          else 
            {    
                if(isdone!="" && fromdate!="" && todate!="" && ispending=="Yes" )
                {
                    if(taskdate>=frdate && taskdate <= tdate && user.markdone==isdone && taskdate>= today )
                    {  
                      createBody(uname,user,i,tblBody);
                    }
                }
                else if(ispending=="Yes" && isdone=="No")
               {
                   if(taskdate>= today && user.markdone==isdone)
                   {
                    createBody(uname,user,i,tblBody);
                   }
               }
               else if(isdone!="" && fromdate!="" && todate!="" )
               {   
                   if( taskdate>=frdate && taskdate <= tdate && user.markdone==isdone  )
                   {
                    createBody(uname,user,i,tblBody);
                   }
               }
               
            }

         }
          tbl.appendChild(tblBody);
          body.appendChild(tbl);
        
        }
         
      }
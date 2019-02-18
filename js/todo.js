var todo={ title:'',tododate:'',categories:'',markdone:'',attachment:'',remainderdate:'',ispublic:'' };

function todoSubmit(){
    var uname= location.search;
    uname=retriveUrlParameter('uname',uname);
    var check=validateToDoForm();
    if(check==true)
    {

    if(uname!="")
    {
        todo.title=document.getElementById("title").value;
        todo.tododate=document.getElementById("tododate").value;
        todo.remainderdate=document.getElementById("remainderdate").value;
        var category="";
        if(document.getElementById("markasdone").checked==true)
        {
            todo.markdone="Yes";
        }
        else
        {
            todo.markdone="No";
        }
        if(document.getElementById("ispublic").checked==true)
        {
            todo.ispublic="Yes";
        }
        else
        {
            todo.ispublic="No";
        }
        if(document.getElementById("done").checked==true)
        {
          category+="Done ";
        }
        if(document.getElementById("pending").checked==true)
        {
          category+=" Pending";
        }
        todo.categories= category;
        var preview = document.querySelector('img');  
        if(preview.src!="")
        {
            todo.attachment=preview.src;
        }
        else
        {
            todo.attachment="";
        }

        var edituser=JSON.parse(localStorage.getItem(uname));  
        console.log(edituser);
        var id=location.search;
        uname=retriveUrlParameter('uname',uname);
        id=retriveUrlParameter('id',id);
        if(id==null)
          {
            edituser.todos.push((todo));
          }
          else
          {
              edituser.todos[id]=todo;
          }
           console.log(edituser);
        localStorage.setItem(edituser.username,JSON.stringify(edituser));
        window.open ('todolist.html?uname='+edituser.username,'_self',false);
    }
}
    
}


function isRemainDate()
{
  if(document.getElementById("isremainder").checked)
  {
      document.getElementById("remainderdate").disabled=false;    
  }
  else
  {
    document.getElementById("remainderdate").disabled=true;  
  }

}

function fillToDoForm()
{

   
   if(location.search!="")
   {

    var uname= location.search;
    var id=location.search;
    uname=retriveUrlParameter('uname',uname);
    id=retriveUrlParameter('id',id);
    if(id!=null)
      {
        var edituser=JSON.parse(localStorage.getItem(uname));
        //console.log(edituser);
        var task=edituser.todos[id];
     //   console.log(task);
        document.getElementById("title").value=task.title;
       // document.getElementById("markasdone").value=task.markdone;
        document.getElementById("remainderdate").value=task.remainderdate;
        document.getElementById("tododate").value=task.tododate;
        if(task.ispublic=="Yes")
        {
            document.getElementById("ispublic").checked=true;
        }
        if(task.markdone=="Yes")
        {
            document.getElementById("markasdone").checked=true;
        }
        if(task.categories.search("Done")>=0)
        {
            document.getElementById("done").checked=true;
        }

        if(task.categories.search("Pending")>=0)
        {
            document.getElementById("pending").checked=true;
        }
        //document.register.gender.value=edituser.gender;
        var preview = document.querySelector('img');
        preview.src = task.attachment;
    }
   }
}
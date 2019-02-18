var user={ username:'',password:'',firstName:'',lastName:'',address:'',gender:'',image:'',todos:[],isauthinticate:0};


function registerSubmit(){
    var valid= validateForm();
    if(valid===true)
    {
        user.username=document.getElementById("usr").value;
        user.password=document.getElementById("password").value;
        user.firstName=document.getElementById("firstname").value;
        user.lastName=document.getElementById("lastname").value;
        user.address=document.getElementById("address").value;
        user.gender=document.querySelector("input[name=gender]:checked").value;
		user.isauthinticate=1; 
        var edituser=JSON.parse(localStorage.getItem(document.getElementById("usr").value));
        if(edituser!=undefined || edituser !=null)
        {
            if(edituser.todos==undefined)
            {
                user.todos=[];
            }
            else
            {
                user.todos=edituser.todos;
            }
          
            //user.isauthinticate=edituser.isauthinticate; 
			user.isauthinticate=1; 
        }
        else
        {
            user.todos=[];
        }
        var preview = document.querySelector('img');  
        if(preview.src!="")
        {
            user.image=preview.src;
        }
        
        localStorage.setItem(user.username,JSON.stringify(user));
        window.open ('registerList.html?uname='+user.username,'_self',false);
  }
}



function previewFile(){  
    var preview = document.querySelector('img');   
    var file    = document.querySelector('input[type=file]').files[0];   
    var reader  = new FileReader();  

    reader.onloadend = function () {  
        preview.src = reader.result;  
        user.image=reader.result;   
    }  

    if (file) {  
        reader.readAsDataURL(file);   
    } else {  
        preview.src = "";  
    }  
}  

function getPhoto() {
    var base64 =  window.localStorage.getItem("file");
       return base64;
    }

function fillForm()
{
   if(location.search!="")
   {

       var uname= location.search;
       uname=uname.substr(7,uname.length);
        var edituser=JSON.parse(localStorage.getItem(uname));
        console.log(edituser);
        document.getElementById("usr").value=edituser.username;
        document.getElementById("usr").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("password").value=edituser.password;
        document.getElementById("firstname").value=edituser.firstName;
        document.getElementById("lastname").value=edituser.lastName;
        document.getElementById("address").value=edituser.address;
        document.register.gender.value=edituser.gender;
        var preview = document.querySelector('img');
        preview.src = edituser.image;
   }
}

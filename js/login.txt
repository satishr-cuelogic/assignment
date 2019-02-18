function checklogin()
{
   var username=document.getElementById("usr").value;
   var password=document.getElementById("pwd").value;
  if(localStorage.getItem(username)!=null)
  {
    var edituser=JSON.parse(localStorage.getItem(username));
    
     if(edituser.username==username && edituser.password==password)
     {
         edituser.isauthinticate=1;
         localStorage.setItem(edituser.username,JSON.stringify(edituser));
         console.log(JSON.parse(localStorage.getItem(edituser.username)));
         window.open ('registerList.html?uname='+edituser.username,'_self',false);
     }
     else
     {
        alert("wrong user ame and password");
     }
  }
  else
  {
    alert("user not found");
  }

}

function openRegistrationForm(){
    window.open ('register.html','_self',false);
}
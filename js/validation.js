function onlyCharacter(id){
    var field=document.getElementById(id);
    if(field.value.match('[0-9]'))
    {
       document.getElementById(id+"_err").innerHTML="please dont use numeric value";
        field.value="";  
        field.focus();
    }
    else
    {
     document.getElementById(id+"_err").innerHTML="";
    }
}

function checklength(id){
   var field=document.getElementById(id);
   if(field.value.length<=5)
   {
      document.getElementById(id+"_err").innerHTML="please use more than 5 character ";
       field.value="";  
       field.focus();
   }
   else
   {
    document.getElementById(id+"_err").innerHTML="";
   }
}
function validateEmail(id) { 

   var field=document.getElementById(id);
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(field.value)===false)
   {
       document.getElementById(id+"_err").innerHTML="please enter valid mail id ";
       field.value="";  
       field.focus();
   }
   else
   {
    document.getElementById(id+"_err").innerHTML="";
   }
} 


function validateToDoForm()
{
    var title=document.getElementById("title").value;
    var tododate=document.getElementById("tododate").value;
    var done=document.getElementById("done");;
    var pending=document.getElementById("pending");
    if(title=="")
    {
       document.getElementById("title_err").innerHTML="please enter title";
       return false;
    }
    else
    {
     document.getElementById("title_err").innerHTML="";
    }

    if(tododate=="")
    {
       document.getElementById("tododate_err").innerHTML="please select date";
       return false;
    }
    else
    {
     document.getElementById("tododate_err").innerHTML="";
    } 

    if(done.checked==false && pending.checked==false)
    {
        document.getElementById("categories_err").innerHTML="please select category";
        return false;
    }
    else
    {
        document.getElementById("categories_err").innerHTML="";
    }
   
    return true;
}


function validateForm(){
   var username=document.getElementById("usr").value;
   var password=document.getElementById("password").value;
   var firstName=document.getElementById("firstname").value;
   var lastName=document.getElementById("lastname").value;
   var address=document.getElementById("address").value;
   var gender=document.querySelector("input[name=gender]:checked");
 //  var profile=document.getElementById("profile");
 var preview = document.querySelector('img');  
      if(username=="")
      {
         document.getElementById("usr_err").innerHTML="please enter username";
         return false;
      }
      else
      {
       document.getElementById("usr_err").innerHTML="";
      }
       if(password=="")
      { 
       document.getElementById("password_err").innerHTML="please enter password";
       return false;
      } 
      else
      {
       document.getElementById("password_err").innerHTML="";
      }
       if(firstName=="")
      {
       document.getElementById("firstname_err").innerHTML="please enter first name";
       return false;
      }
      else
      {
       document.getElementById("firstname_err").innerHTML="";
      }
       if(lastName=="")
      {
       document.getElementById("lastname_err").innerHTML="please enter last name";
       return false;
      }
      else
      {
       document.getElementById("lastname_err").innerHTML="";
      }
       if(address=="")
      {
       document.getElementById("address_err").innerHTML="please enter address";
       return false;
      }
      else
      {
       document.getElementById("address_err").innerHTML="";
      }
       if(gender===null)
      { document.getElementById("gender_err").innerHTML="please select gender";
       return false;
      }
      else
      {
       document.getElementById("gender_err").innerHTML="";
      } 

      if(preview.src=="")
      {
        document.getElementById("profile_err").innerHTML="please select profile picture";
        return false;
      }
      else
      {
       document.getElementById("profile_err").innerHTML="";
      }
     
       return true;
}



function retriveUrlParameter(key,url)
{
    if (typeof(url) === 'undefined')
        url = window.location.href;
    var match = url.match('[?&]' + key + '=([^&]+)');
    return match ? match[1] : null;
}




function userAuthinticated()
{ 
    if(location.search!="")
    {
      
        var uname= location.search;
        
        uname=retriveUrlParameter('uname',uname);
       
      
        if(uname!="")
        {
            var edituser=JSON.parse(localStorage.getItem(uname));
            console.log(edituser);
             
           if(edituser.isauthinticate==0)
           {
               alert("not authinticated user");
            window.open ('index.html','_self',false);
           } 
        }
        else
        {
            alert("not authinticated user");
            window.open ('index.html','_self',false);
        }

       
    }
    else
    {
        alert("not authinticated user");
        window.open ('index.html','_self',false);
    }
    

}

function logout()
{
    if(location.search!="")
    {

        var uname= location.search;
        
        uname=retriveUrlParameter('uname',uname);
        if(uname!="")
        {
            var edituser=JSON.parse(localStorage.getItem(uname));
            console.log(edituser);
            edituser.isauthinticate=0;
            localStorage.setItem(edituser.username,JSON.stringify(edituser)); 
            window.open ('index.html','_self',false);
        }  
    }
}
// name validation
function hello()
{
    var name=document.getElementById("name").value;
    {
    if(name=="")
    {
        document.getElementById("err1").innerHTML="please enter the user name";
        return false;
    } 
    
    var pattern=/^[a-zA-Z]/;
     if(!name.match(pattern))
     {
        document.getElementById("err1").innerHTML="*Enter only charechter";
         return false;  
 }
 if(name.length<4 || name.length>22)
    {
        document.getElementById("err1").innerHTML="*Length must be in between 4 to 22";
        return false;
    }
}
// father validation

    var fname=document.getElementById("fname").value;
    {
    if(fname=="")
    {
        document.getElementById("err2").innerHTML="please enter your father's name";
        return false;
    }
    var pattern=/^[a-zA-Z]/;
     if(!fname.match(pattern))
     {
        document.getElementById("err2").innerHTML="*Enter only charechter";
         return false;  
 }
}

// mother validation
var mname=document.getElementById("mname").value;
    {
    if(mname=="")
    {
        document.getElementById("err3").innerHTML="please enter your mother's name";
        return false;
    }
    var pattern=/^[a-zA-Z]/;
     if(!mname.match(pattern))
     {
        document.getElementById("err3").innerHTML="*Enter only charechter";
         return false;  
 }
}

// email validation


var email=document.getElementById("email").value;
    {
    if(email=="")
    {
        document.getElementById("err4").innerHTML="please enter your email address name";
        return false;
    }
    if(email.indexOf('@')<=0)
          {
             document.getElementById("err4").innerHTML="*Enter valid email";
           return false;  
         
         }
         if(email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.')
        {
            document.getElementById("err4").innerHTML="*Enter valid email";
         return false;  
        }
    }

// contact validation


var contact=document.getElementById("contact").value;
    {
    if(contact=="")
    {
        document.getElementById("err5").innerHTML="please enter your  contact number";
        return false;
    }
    if(contact.length!=10){
        document.getElementById("err5").innerHTML="please enter only ten digit of number";
        return false;

    }
}

// city validation

var city=document.getElementById("city").value;
    {
    if(city=="")
    {
        document.getElementById("err6").innerHTML="please select you city";
        return false;
    }
}


// selct validation


var State=document.getElementById("State").value;
    {
    if(State=="")
    {
        document.getElementById("err7").innerHTML="please select you state";
        return false;
    }
}

// country validation


var country=document.getElementById("country").value;
    {
    if(country=="")
    {
        document.getElementById("err8").innerHTML="please select you country";
        return false;
    }
}

// Present Address

var paddress=document.getElementById("paddress").value;
    {
    if(paddress=="")
    {
        document.getElementById("err9").innerHTML="please enter your Present address";
        return false;
    }
}
// Permanent address



var ppaddress=document.getElementById("ppaddress").value;
    {
    if(ppaddress=="")
    {
        document.getElementById("err10").innerHTML="please enter your Permanent address";
        return false;
    }
}
// religion validation

var Religion=document.getElementById("Religion").value;
    {
    if(Religion=="")
    {
        document.getElementById("err11").innerHTML="please select your relision";
        return false;
    }
}
// class validation

var classs=document.getElementById("classs").value;
    {
    if(classs=="")
    {
        document.getElementById("err12").innerHTML="please select your class";
        return false;
    }
}
// Date off birth validation
var birth=document.getElementById("birth").value;
    {
    if(birth=="")
    {
        document.getElementById("err13").innerHTML="please enter your DOB";
        return false;
    }
}
// photo validation
var photo=document.getElementById("photo").value;
    {
    if(photo=="")
    {
        document.getElementById("err14").innerHTML="please choose your photo";
        return false;
    }
}

// sports validation

var Sports=document.getElementById("Sports").value;
    {
    if(Sports=="")
    {
        document.getElementById("err15").innerHTML="please enter your Permanent address";
        return false;
    }
}

}


// function hello()
// {
//     var uname=document.getElementById("uname").value;
//     {
//     if(uname=="")
//     {
//         document.getElementById("err").innerHTML="please enter the user name";
//         return false;
//     } 
//     if(uname.length<4 || uname.length>8)
//     {
//         document.getElementById("err").innerHTML="*Length must be in between 4 to 8";
//         return false;
//     }
//     // if(uname.length>8)
//     // {
//     //     document.getElementById("err").innerHTML="*Length must be in between 4 to 8";
//     //     return false;
//     // }
//      var pattern=/^[a-zA-Z]/;
//      if(!uname.match(pattern))
//      {
//         document.getElementById("err2").innerHTML="*Enter the collection charecter and numbers";
//          return false;  
//  }
// }
//     var email=document.myform.email.value;
//     {
//         if(email=="")
//         {
//             document.getElementById("err1").innerHTML="*Please enter the value";
//             return false;
//         }
//         if(email.indexOf('@')<=0)
//          {
//             document.getElementById("err1").innerHTML="*Enter valid email";
//           return false;  
//          }

//         //  if(email.charAt(email.length-3)!='.')
//         //  {
//         //     document.getElementById("err1").innerHTML="*Enter valid email";
//         //     return false;
//         //  } 

//          if(email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.')
//         {
//             document.getElementById("err1").innerHTML="*Enter valid email";
//          return false;  
//         }
//     }
//     var password=document.getElementById("password").value;
//     var cpassword=document.getElementById("cpassword").value;
//     if(password=="")
//     {
//         document.getElementById("err2").innerHTML="please enter the user your password";
//         return false;
//     }
//     if(password.length<8 || password.length>20)
//     {
//         document.getElementById("err2").innerHTML="*Length must be in between 8 to 20";
//         return false;
//     }
//     //  var pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}";
//     // var pattern="/^[A-Za-z]\w{7,14}$/"
//     // if(!password.match(pattern))
//     // {
//     //     document.getElementById("err2").innerHTML="*Must contain at least one number and one uppercase and lowercase letter,and at least 8 or more charrecter";
//     //     return false;  
//     // }
    
//     if(cpassword=="")
//     {
//         document.getElementById("err3").innerHTML="please enter the user your cpassword";
//         return false;
//     }

//     if(password!=cpassword)
//     {
//         document.getElementById("err3").innerHTML="*password are not match";
//          return false;
//     }
// }
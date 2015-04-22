/*function phonenumber(inputtxt)  
{  
  confirm("here---->");
  var phoneno = /^\d{10}$/;  
  if((inputtxt.value.match(phoneno))  
        {  
      return true;  
        }  
      else  
        {  
        alert("please provide correct phone number");  
        return false;  
        }  
}*/

function validateMe(form_elm)
	{
	var full = form_elm.full_name.value;
	// clear any spaces in front
	while (full.charAt(0) == " ") full = full.substr(1);
	// split and check for two names - dual purpose of also retrieving first and last name for future use
	full = full.split(" ");
	var first_name = full[0];
	var last_name = full[1];
	if (full.length < 2) alert("Please enter both your first and last name.");
	return false;
	}
	
function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }

function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.mail.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}   
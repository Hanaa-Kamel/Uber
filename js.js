function setLocalStorage()
{
    if(typeof(Storage) !== "undefined") 
	{
		localStorage.fn = document.getElementById("fn").value;
        localStorage.ln=document.getElementById("ln").value;
        localStorage.mail=document.getElementById("mail").value;
        localStorage.phone=document.getElementById("phone").value;
        localStorage.city=document.getElementById("city").value;
        localStorage.code=document.getElementById("code").value;
        localStorage.pass = document.getElementById("pass").value;
      
        alert("Data saved");
        window.location.href="file:///E:/ITI/uber/index.html";
    }
    else{
        alert("Sorry! No Web Storage support..");
    }
}

function getfrom()
{
     document.getElementById("fn").value=localStorage.fn;
        document.getElementById("ln").value=localStorage.ln;
        document.getElementById("mail").value=localStorage.mail;
        document.getElementById("phone").value=localStorage.phone;
        document.getElementById("city").value=localStorage.city;
        document.getElementById("code").value=localStorage.code;
        document.getElementById("pass").value=localStorage.pass;
}


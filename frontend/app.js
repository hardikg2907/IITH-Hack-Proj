// alert("hello");
let login=document.getElementById("login");
let signup=document.getElementById("signup");

login.addEventListener('click',()=>{
    document.getElementById("sigupbox").style="display:none";
    document.getElementById("loginbox").style.display="block";
})

signup.addEventListener('click',function handleclick()
{
    document.getElementById("sigupbox").style="display:block";
    document.getElementById("loginbox").style="display:none";
})
// alert("hello");
let login=document.getElementById("login");
let signup=document.getElementById("signup");

signup.addEventListener('click',function handleclick()
{
    document.getElementById("sigupbox").style.display="block";
    document.getElementById("login-box").style.display="none";
})
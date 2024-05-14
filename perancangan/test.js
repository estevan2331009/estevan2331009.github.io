function gantitext(){
    var paragraph=document.getElementById("gantitext")
    paragraph.textContent="Selamat sudah diganti"
}
function validateform(){
    var nama= document.getElementById("nama").value;
    var email= document.getElementById("email").value;
    var telp= document.getElementById("telp").value;
    var errormessage= document.getElementById("errormessage");
    errormessage.innerHTML="";

    if(nama.trim()==='')
        errormessage.innerHTML += "<p>Please enter your name</p>";
    if(email.trim()==='')
        errormessage.innerHTML += "<p>Please enter your email</p>";
    else if (!validateemail(email)){
        errormessage.innerHTML += "<p>Please enter a valid email address</p>";
    }
    if(telp.trim()==='')
        errormessage.innerHTML += "<p>Please enter your phone number</p>";
}

function validateemail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

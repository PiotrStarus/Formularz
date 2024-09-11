function red(vr){
    if(vr.value===""){
        vr.style.border = "2px solid red";
    }
    else{
        vr.style.border = "2px solid #1C2841"
    }
}

function wys(){
    imie=document.getElementById('imie');
    nazwisko=document.getElementById('nazwisko');
    email=document.getElementById('email');
    tel=document.getElementById('tel');
    dev=document.getElementById('dev');
    red(imie);
    red(nazwisko);
    red(email);
    red(tel);
    red(dev);
}
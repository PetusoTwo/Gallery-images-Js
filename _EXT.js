
foto = 1; 
function cambia(mas, total){
    foto = foto + mas; 
    if(foto > total){
        foto = 1 
    }if(foto < 1){
        foto = total;
    }
    document.kkk.src = "0" + foto + ".jpg"
}

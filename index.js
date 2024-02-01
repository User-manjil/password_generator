const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const special_symbol="!@#$%^&*()_+{}[]|'<>?,./"
const allchra= uppercase + lowercase + number + special_symbol;

const passwd_box= document.getElementById("display");

function generate(){
    var len=document.getElementById("length").value;

    let password=""
    password +=uppercase[Math.floor( Math.random()*uppercase.length)];
    password +=lowercase[Math.floor( Math.random()*lowercase.length)];
    password +=number[Math.floor( Math.random()*number.length)];
    password +=special_symbol[Math.floor( Math.random()*special_symbol.length)];

    while (len > password.length){
        password +=allchra[Math.floor( Math.random()*allchra.length)];
    }
   
    passwd_box.value=password;

  
}

function copy(){

    passwd_box.select();
    document.execCommand("copy");



}



   
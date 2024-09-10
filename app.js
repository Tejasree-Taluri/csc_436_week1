'use strict'
const swithcher = document.querySelector('.btn-changeTheme');
swithcher.addEventListener('click', function(){
    document.body.classList.toggle('lightTheme');
    document.body.classList.toggle('darkTheme');
    document.body.classList.toggle('neonTheme');
    const className = document.body.className;
    if(className = lightTheme){
        this.textContent = "darkTheme";
    }
    else if(className = darkTheme){
        this.textContent = "neonTheme";
    }
    else{
        this.textContent = "lightTheme";
    }
});
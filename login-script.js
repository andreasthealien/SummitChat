const passwordLock = document.querySelector(".password-icon");
const passwordInput = document.querySelector(".password-input");
let status = true;
/*
passwordLock.classList.toggle("bxs-lock-open-alt")
passwordLock.classList.toggle("bxs-lock-alt")
*/
passwordLock.addEventListener("click", ()=>{
    if(status){
        passwordLock.classList.toggle("bx-lock-open-alt");
        passwordLock.classList.toggle("bxs-lock-alt");

        passwordInput.setAttribute("type", "text");

        status = false;
    } else {
        passwordLock.classList.toggle("bxs-lock-alt");
        passwordLock.classList.toggle("bx-lock-open-alt");

        passwordInput.setAttribute("type", "password");

        status = true;
    }
});
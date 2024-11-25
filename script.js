const popup = document.getElementById("popup")
const accept = document.getElementById("accept")
const deny = document.getElementById("deny")

window.addEventListener("DOMContentLoaded" , ()=>{
    if(localStorage.getItem("cookieConsent")){
        popup.style.display="none";
    }
    else{
        popup.style.display="block";
    }
})


accept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    popup.style.display = "none";
});

deny.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "denied");
    popup.style.display = "none";
});
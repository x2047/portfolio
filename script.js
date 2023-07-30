const popup = document.querySelectorAll(".popup");
const popupback = document.getElementById("popupback");
const popupimg = document.getElementById("popupimg");
popup.forEach(function(value){
    value.addEventListener("click",kakudai);
});
function kakudai(e){
    popupback.style.display = "flex";
    popupimg.setAttribute("src",e.target.getAttribute("src"));
    popupimg.classList.add("transparent");
}
popupback.addEventListener("click",modosu);
function modosu(){
    popupback.style.display = "none";
    popupimg.classList.remove("transparent");
}
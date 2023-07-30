const popup = document.querySelectorAll(".popup");
const popupback = document.getElementById("popupback");
const popupimg = document.getElementById("popupimg");
popup.forEach(function (value) {
  value.addEventListener("click", kakudai);
});
function kakudai(e) {
  popupback.style.display = "flex";
  popupimg.setAttribute("src", e.target.getAttribute("src"));
  popupimg.classList.add("transparent");
}
popupback.addEventListener("click", modosu);
function modosu() {
  popupback.style.display = "none";
  popupimg.classList.remove("transparent");
}

const popup_v = document.querySelectorAll(".popup_v");
const popupback_v = document.getElementById("popupback_v");
const popupimg_v = document.getElementById("popupimg_v");
popup_v.forEach(function (value) {
  value.addEventListener("click", kakudai_v);
});
function kakudai_v(e) {
  popupback_v.style.display = "flex";
  popupimg_v.setAttribute("src", e.target.getAttribute("src"));
  popupimg_v.classList.add("transparent");
}
popupback_v.addEventListener("click", modosu_v);
function modosu_v() {
  popupback_v.style.display = "none";
  popupimg_v.classList.remove("transparent");
}


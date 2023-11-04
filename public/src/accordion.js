var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var acpanel = this.nextElementSibling;
    if (acpanel.style.maxHeight) {
      acpanel.style.maxHeight = null;
    } else {
      acpanel.style.maxHeight = acpanel.scrollHeight + "px";
    } 
  });
}
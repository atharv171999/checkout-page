let acc = document.querySelector(".accordion");
let hide = document.querySelector(".hide-summary");
let show = document.querySelector(".show-summary");

acc.addEventListener("click", function () {
  var panel = document.querySelector(".panel");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    hide.style.display = "none";
    show.style.display = "block";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    show.style.display = "none";
    hide.style.display = "block";
  }
});

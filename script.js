let acc = document.querySelector(".accordian");
let hide = document.querySelector(".hide-summary")
let show = document.querySelector(".show-summary")

  acc.addEventListener("click", function() {
    var panel = document.querySelector(".panel");
    if (panel.classList.contains("close")) {
        panel.classList.remove("close");
        panel.classList.add("active")
        show.style.display= "none"
        hide.style.display= "block"

        
    } else {
        panel.classList.remove("active")
        panel.classList.add("close")

        hide.style.display= "none"
        show.style.display= "block"
    }
  });
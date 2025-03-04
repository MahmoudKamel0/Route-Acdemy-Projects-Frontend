const btnMenu = document.querySelector(".btn-menu") ,
      body = document.querySelector("body") ,
      menu    = document.querySelector("menu") ;

// show navigation menu bar
btnMenu.addEventListener("click",function() {
    menu.classList.toggle("show-menu")
    // btnMenu.innerHTML = "<h2>hi</h2>";
})

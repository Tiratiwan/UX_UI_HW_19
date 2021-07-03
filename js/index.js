console.log("Your index.js file is loaded correctly!");
/** hover, projects */
function bigImg(x) {
    x.style.height = "80%";
    x.style.width = "80%";
  }
  
  function normalImg(x) {
    x.style.height = "70%";
    x.style.width = "70%";
  }
/** prelaoding */
  function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
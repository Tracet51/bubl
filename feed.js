

// gray out body
// add 
/* Set the width of the side navigation to 250px */
function openNav() {
    console.log('worked!')
    var grayDiv = document.body.querySelector(".gray-out-background")
    grayDiv.style.display = "block"
    
    document.getElementById("mySidenav").style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
    
    
    // var cards = document.getElementsByClassName("card")
    // cardArray = Array.prototype.slice.call(cards)
    // cardArray.forEach(element => {
    //   element.setAttribute("class")
    // });
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    var grayDiv = document.body.querySelector(".gray-out-background")
    grayDiv.style.display = "none"

    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";

  }
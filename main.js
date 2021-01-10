
let toggleNaveStatus = false;
let toggleNav = function(){
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul li a");
  //let getSidebarIMG = document.querySelectorAll(".nav-sidebar img");

  if (toggleNaveStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "150px";

    let arrayLength = getSidebarLinks.length;
    for (var i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNaveStatus = true;
  }else if (toggleNaveStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length;
    for (var i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNaveStatus = false;
  }
}

const mySideBar = document.querySelector("#my-side-bar");
const sideBarButton = document.querySelector(".nav-bar-opening-button");
const sideBarNavLinks = document.querySelectorAll(".nav-link-item");
    
sideBarButton.addEventListener("click", ()=>{
    mySideBar.classList.toggle("sidebar-active");
})
sideBarNavLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        mySideBar.classList.toggle("sidebar-active"); 
    })
})
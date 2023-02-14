const burger_btn=document.querySelector("#burger_btn")
const animationNavigation=document.querySelector(".animatedNavigation")





function showNav(){
console.dir(animationNavigation)

animationNavigation.classList.add("active") 
}

burger_btn.addEventListener("click",showNav)










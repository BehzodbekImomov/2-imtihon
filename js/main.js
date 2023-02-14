const burger_btn=document.querySelector("#burger_btn")
const close_btn=document.querySelector(".close_btn img")
const animationNavigation=document.querySelector(".animatedNavigation")





function showNav(){
    if(animationNavigation.classList.contains("active")){

        animationNavigation.classList.remove("active") 
    }else{
        animationNavigation.classList.add("active") 
    }
console.dir(animationNavigation)


}

burger_btn.addEventListener("click",showNav)
close_btn.addEventListener("click",showNav)










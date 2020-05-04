burger.addEventListener("click", ()=> {
    
    myUl.style.transition = ""
        
    if (!burger.classList.contains("open"))
    {
        burger.classList.toggle("open")

        myUl.classList.toggle("anim-ul")

        body.classList.toggle("anim-ul")

        myUlWrapper.classList.toggle("anim-ul")
    }
    else
    {
        burger.classList.toggle("open")

        myUl.classList.toggle("anim-ul")

        body.classList.toggle("anim-ul")

        myUlWrapper.classList.toggle("anim-ul")
    }
})

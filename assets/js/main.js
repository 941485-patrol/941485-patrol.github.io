let burger = document.getElementById("burger")

let myUl = document.getElementsByTagName("ul")[0]

let myUlWrapper = document.getElementsByClassName("ul-wrapper")[0]

let linkHome = document.getElementById("link-home")

let linkAbout = document.getElementById("link-about")

let contentAbout = document.querySelector(".about")

let linkWorks = document.getElementById("link-works")

let contentWorks = document.querySelector(".works")

let contentWorksTitle = document.querySelector(".works-title")

let linkContact = document.getElementById("link-contact")

let contentContact = document.querySelector(".contact")

let imagess = document.getElementsByClassName("img")

let customModal = document.getElementById("custom-modal")

let customModalContent = document.getElementById("custom-modal-content")

let customModalImage = document.getElementById("custom-modal-image")

let modalClose = document.getElementById("modal-close")

let toTop = document.getElementById("to-top")

let body = document.body

let footer = document.getElementsByTagName("footer")[0]

window.addEventListener("resize", ()=> {

    burger.classList.remove("open")

    myUl.classList.remove("anim-ul")
    
    myUlWrapper.classList.remove("anim-ul")

})

window.onclick = (event)=>{
    if(event.target == myUlWrapper && body.offsetWidth <= 850)
    {
        burger.click()

    }

    if(event.target == customModalContent)
    {
        customModal.style.display = "none"
    }
}

for(var i = 0; i<imagess.length; i++)
{
    imagess[i].addEventListener('click', function() {

        customModal.style.display = "block"

        customModalImage.setAttribute("src", this.getAttribute("src"))

    })
}

toTop.addEventListener("click", (event)=> {

    scrollToDiv(0,"top")
    
})

window.addEventListener("scroll", ()=> {

    fadeIt(contentAbout)

    fadeIt(contentWorksTitle)

    fadeIt(contentContact)

    fadeIt(footer)

    for(var i = 0; i<imagess.length; i++)
    {
        fadeIt(imagess[i])
    }

    if(scrollY > 100) 
    {
        toTop.style.display = "block"
    }
    else
    {
        toTop.style.display = ""
    }
})

const fadeIt = (content)=>{

    if (scrollY > content.offsetTop-200)
    {
        if (!content.classList.contains("is-visible"))
        {
            content.classList.toggle("is-visible")
        }
    }
}

const scrollToDiv = (position, direction)=>{

    let scroll_position = scrollY;

    let smooth_scroll = setInterval(() => {

        scrollTo(0,scroll_position)

        if (direction == "top")
        {
            scroll_position-=20

            if (scroll_position < 0)
            {
                clearInterval(smooth_scroll)
            }
        }
        else if (direction == "bottom")
        {
            scroll_position+=20

            if (scroll_position > position)
            {
                clearInterval(smooth_scroll)
            }
        }

    },1);
}

let toTop = document.getElementById("to-top");
let slideDiv = document.getElementsByClassName("slide-div");

toTop.addEventListener("click", (event)=> {

    scrollToDiv(0,"top")
    
})

window.addEventListener("scroll", ()=> {

    for(var i = 0; i<slideDiv.length; i++)
    {
        fadeIt(slideDiv[i])
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

    if (scrollY > content.offsetTop-410)
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
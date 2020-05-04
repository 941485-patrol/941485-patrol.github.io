const mobileClick = () => {
    if (body.offsetWidth < 768)
    {
        burger.click()

        myUl.style.transition = "none"
    }
}

linkHome.addEventListener("click", ()=> {

    mobileClick()
 
})

linkAbout.addEventListener("click", (event)=> {

    mobileClick()

    scrollToDiv(contentAbout.offsetTop,"bottom")

})

linkWorks.addEventListener("click", ()=> {

    mobileClick()

    scrollToDiv(contentWorksTitle.offsetTop,"bottom")

})

linkContact.addEventListener("click", ()=> {

    mobileClick()

    scrollToDiv(contentContact.offsetTop,"bottom")

})
let btn = document.getElementById("seans");
let scrollElem = document.getElementById("section_seans")

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: "smooth",
    });
}

btn.addEventListener("click", () => {
    scrollTo(scrollElem)
})

let reviewsScroll = document.querySelector(".reviews");
let el = document.getElementById("review");
el.addEventListener("click", () => {
    scrollTo(reviewsScroll);
})


let btnContacts = document.getElementById("contacts");
let ContactsSection = document.querySelector(".our_place_section");
btnContacts.addEventListener("click", () => {
    scrollTo(ContactsSection);
})


let btnAboutME = document.getElementById("aboutMe")
let scrollToElem = document.querySelector(".about_prodact_list");
btnAboutME.addEventListener("click", () => {
    scrollTo(scrollToElem);
})
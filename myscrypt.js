document.addEventListener("DOMContentLoaded", function() {
    const animatedElement = document.getElementById("animatedElement");
    animatedElement.classList.add("show");
});
const indexLinks = document.querySelectorAll(".index a");

indexLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const offset = targetElement.getBoundingClientRect().top;
    
    window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth"
    });
}

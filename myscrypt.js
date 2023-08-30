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

// function scrollToPage(pageId) {
//     var page = document.getElementById(pageId);
//     page.scrollIntoView({
//       behavior: "smooth",
//     });
//   }
  
//   // When a link is clicked, scroll to the appropriate page.
//   document.querySelectorAll("a").forEach(function(link) {
//     link.addEventListener("click", function() {
//       scrollToPage(link.getAttribute("href"));
//     });
//   });

// function openPage2() {
//     window.open("page-2.html");
//   }
  
//   // Adicionar um botão ao menu de navegação.
//   document.querySelector("#index ul").appendChild(
//     document.createElement("li")
//       .appendChild(document.createElement("a")
//         .setAttribute("href", "page-2.html")
//         .textContent("Descrição Informal"))
//   );
  
//   // Quando o botão for clicado, abra a segunda página.
//   document.querySelector("#index ul li a").addEventListener("click", openPage2);

// document.querySelector("#index ul li a").addEventListener("click", function(event) {
//     // Desce para a seção #group-members.
//     document.querySelector("#group-members").scrollIntoView({
//       behavior: "smooth",
//     });
  
//     // Desativa o evento de clique padrão.
//     event.preventDefault();
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.section');

//     sections.forEach(section => {
//         section.addEventListener('click', () => {
//             window.scrollTo({
//                 top: section.offsetTop,
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
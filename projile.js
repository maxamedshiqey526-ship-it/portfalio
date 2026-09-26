const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".nav-link a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`)
            
            {
                 link.classList.add("active");

        }

           
    });


})

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = document.querySelector(
           link.getAttribute('href')
        );
        if (taget) {
            event.preventDefault();

            target.scrollIntoView({ behavior: "smooth" });
        }
    }) 

});

const year = new Date ().getFullYear();
const footerText = document.querySelector(".footer p");

    if (footerText) {
        footerText.textContent = `© ${year} MOHAMED HUSSIEM. All rights reserved.`;
    }
console.log("welcome to my portfoloio!");

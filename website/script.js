/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-btn");


const navLinks =
    document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

        }
    );

}



/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (navLinks) {

                navLinks.classList.remove(
                    "active"
                );

            }

        }
    );

});

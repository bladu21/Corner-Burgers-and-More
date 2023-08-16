window.onload = function() {
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__menu");

    function hamMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    };
    hamburger.addEventListener("click", hamMenu);

    const acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            let panel = this.nextElementSibling;
            
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    };
};

function openMenu() {
    window.location.href = "html/Corner_burger_MenuPage.html";
};

function myForm() {
    alert("Съобщението Ви е изпратено успешно!");
};
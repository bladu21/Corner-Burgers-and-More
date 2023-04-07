window.onload = function() {
    
    function hamMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      };
      
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav__menu");

      hamburger.addEventListener("click", hamMenu);

    };

    function openMenu() {
        window.location.href = "html/Corner_burger_MenuPage.html";
    };
    
    
    function myForm() {
        alert("Съобщението Ви е изпратено успешно!");
    };
  
window.onload = function() {
    
    function hamMenu() {
        
        const navMenu = document.querySelector(".nav__menu");
      
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      };
      
      const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", hamMenu);

    };

    function openMenu() {
        window.location.href = "Corner_burger_MenuPage.html";
    };
    
    
    function myForm() {
        alert("Съобщението Ви е изпратено успешно!");
    };
  
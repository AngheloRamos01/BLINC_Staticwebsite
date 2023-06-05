 /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
          document.getElementById("shopDropdown").classList.toggle("show");
        }
        
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(e) {
          if (!e.target.matches('.dropbtn')) {
          var shopDropdown = document.getElementById("shopDropdown");
            if (shopDropdown.classList.contains('show')) {
              shopDropdown.classList.remove('show');
            }
          }
        }
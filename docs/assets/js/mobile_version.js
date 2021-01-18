


	function myFunction() {
        var x = document.getElementById("mySidenav");
        if (x.className === "sidenav") {
          x.className += " responsive";
        } else {
          x.className = "sidenav";
        }
      }  

    function openNav() {
        document.getElementById("mySidenav").style.width = "426px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
(jQuery);
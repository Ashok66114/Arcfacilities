
        //Get the button
        var mybutton = document.getElementById("myBtn");
        
        // When the user scrolls down 1000px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 1000 || document.documentElement.scrollTop >1000) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

        $(document).ready(function(){
          $('.customer-logos').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1500,
              arrows: false,
              dots: false,
              pauseOnHover:false,
              responsive: [{
                  breakpoint: 768,
                  setting: {
                      slidesToShow:4
                  }
              }, {
                  breakpoint: 520,
                  setting: {
                      slidesToShow: 3
                  }
              }]
          });
      });
  
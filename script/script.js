/**
 *
 * Version Control Block
 * Project name: Sample_Wizad_of_PRIDE 5.0
 * Version: 0.1V
 * Revised on:20-Oct-2023
 *
 * IMPORTANT NOTICE:
 *
 * If you are not authorized, Do not modify the content of this file.
 * Any unauthorized use or reproduction of this code is strictly prohibited.
 *
 * For inquiries or permissions, please contact the original author(s)
 * Developer(s): S. Sobhana susil <aashiksusil@planystech.com>
 * 
 */
   $(document).ready(function () {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({ 'opacity': opacity });
        },
        duration: 500
      });
      setProgressBar(++current);
    });

    $(".previous").click(function () {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;
          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({ 'opacity': opacity });
        },
        duration: 500
      });
      setProgressBar(--current);
    });

    function setProgressBar(curStep) {
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar").css("width", percent + "%")
    }
    
  });
  $(document).ready(function () {
     var currentCard = 0;
     var cards = $(".card");

     // Show the initial card
     $(cards[currentCard]).addClass("active");

     $(".next").click(function () {
       $(cards[currentCard]).removeClass("active");
       currentCard = (currentCard + 1) % cards.length;
       $(cards[currentCard]).addClass("active");
     });

     $(".previous").click(function () {
       $(cards[currentCard]).removeClass("active");
       currentCard = (currentCard - 1 + cards.length) % cards.length;
       $(cards[currentCard]).addClass("active");
     });
  });


  //- End Dropdown Menu

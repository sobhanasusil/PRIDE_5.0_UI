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
 //- Dropdown Menu
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  });
  // function to dropdown selectedValue
$('.dropdown-menu li').click(function () {
    //let input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
   // msg = '<span class="msg">You have selected: ';
   // $('.msg').html(msg + input + '</span>');
   
    selOptn= $(this).parents('.dropdown').find('input').val();
 });
 //Golbal variable has dropdown selected value
  let selOptn;

 //Function to show and hide cards based of dropdown
  document.getElementById("showNavButton").addEventListener("click", function() {

      
    switch (selOptn) 
      {
        case "Bathymetry":
           // Show the navigation bar and other elements
          document.getElementById("navbar-container").style.display = "block";
          document.getElementById("gridbox").style.display = "none";
          document.getElementById("head-image").style.display = "none";
          document.getElementById("help").style.display = "none";
          document.getElementById("utid").style.display = "none";
          document.getElementById("markers").style.display = "none";
          document.getElementById("crack").style.display = "none";
          document.getElementById("thumb").style.display = "none";
          break;
        case "UT":
          // Show the navigation bar and other elements
          document.getElementById("navbar-container").style.display = "block";
          document.getElementById("gridbox").style.display = "none";
          document.getElementById("head-image").style.display = "none";
          document.getElementById("help").style.display = "none";
          document.getElementById("bathyid").style.display = "none";
          break;
        case "BathyUT":
             // Show the navigation bar and other elements
          document.getElementById("navbar-container").style.display = "block";
          document.getElementById("gridbox").style.display = "none";
          document.getElementById("head-image").style.display = "none";
          document.getElementById("help").style.display = "none";
          break;
        case "BathyUTPDF":
           // Show the navigation bar and other elements
          document.getElementById("navbar-container").style.display = "block";
          document.getElementById("gridbox").style.display = "none";
          document.getElementById("head-image").style.display = "none";
          document.getElementById("help").style.display = "none";
          break;
        case "UTPDF":
           // Show the navigation bar and other elements
          document.getElementById("navbar-container").style.display = "block";
          document.getElementById("gridbox").style.display = "none";
          document.getElementById("head-image").style.display = "none";
          document.getElementById("help").style.display = "none";
          document.getElementById("bathyid").style.display = "none";
          break;
        case "VisualBathyUTPDF":
           // Show the navigation bar and other elements
          document.getElementById("navbar-container").style.display = "block";
          document.getElementById("gridbox").style.display = "none";
          document.getElementById("head-image").style.display = "none";
          document.getElementById("help").style.display = "none";;
          break;
        default:
          // Handle the default case
          alert("Select the PAD Type");
          break;
      }
    });
  
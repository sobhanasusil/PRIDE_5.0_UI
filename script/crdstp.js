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
$(".submit").click(function () {
    return false;
  })
  //Function to card steps 
  $(".Upload").click(function () {
      document.getElementById("box-text").style.display = "none";
      document.getElementById("upload-files").style.display = "block";
  })
   $(".clear").click(function () {
      document.getElementById("box-text1").style.display = "none";
      document.getElementById("clear-files").style.display = "block";
  })
    $(".Convert").click(function () {
      document.getElementById("box-text2").style.display = "none";
      document.getElementById("Convert-files").style.display = "block";
  })
  $(".Export").click(function () {
    document.getElementById("box-text3").style.display = "none";
    document.getElementById("Export-files").style.display = "block";
  })
  $(".valcsv").click(function () {
    document.getElementById("box-text4").style.display = "none";
    document.getElementById("valcsv-files").style.display = "block";
  })
  $(".genut").click(function () {
    document.getElementById("box-text5").style.display = "none";
    document.getElementById("genut-files").style.display = "block";
  })
  $(".genjs").click(function () {
    document.getElementById("box-text6").style.display = "none";
    document.getElementById("genjs-files").style.display = "block";
  })
  $(".gencss").click(function () {
    document.getElementById("box-text7").style.display = "none";
    document.getElementById("gencss-files").style.display = "block";
  })
  $(".genbathy").click(function () {
    document.getElementById("box-text8").style.display = "none";
    document.getElementById("genbathy-files").style.display = "block";
  })
  $(".imgresize").click(function () {
    document.getElementById("box-text9").style.display = "none";
    document.getElementById("imgresize-files").style.display = "block";
  })
  $(".editmark").click(function () {
    document.getElementById("box-text10").style.display = "none";
    document.getElementById("editmark-files").style.display = "block";
  })
  $(".ceakmeasur").click(function () {
    document.getElementById("box-text11").style.display = "none";
    document.getElementById("ceakmeasur-files").style.display = "block";
  })
  $(".prevland").click(function () {
    document.getElementById("box-text12").style.display = "none";
    document.getElementById("prevland-files").style.display = "block";
  })
  $(".premain").click(function () {
    document.getElementById("box-text13").style.display = "none";
    document.getElementById("premain-files").style.display = "block";
  })
  $(".genthumb").click(function () {
    document.getElementById("box-text14").style.display = "none";
    document.getElementById("genthumb-files").style.display = "block";
  })
  $(".genland").click(function () {
    document.getElementById("box-text15").style.display = "none";
    document.getElementById("genland-files").style.display = "block";
  })
  $(".genmain").click(function () {
    document.getElementById("box-text16").style.display = "none";
    document.getElementById("genmain-files").style.display = "block";
  })
  $(".dwnldrep").click(function () {
    document.getElementById("box-text17").style.display = "none";
    document.getElementById("dwnldrep-files").style.display = "block";
  })
  $(".genelect").click(function () {
    document.getElementById("box-text18").style.display = "none";
    document.getElementById("genelect-files").style.display = "block";
    document.getElementById("navbar-container").style.display = "none";
    document.getElementById("sucess").style.display = "none";
    document.getElementById("completed").style.display = "block";
    // Get the element by its ID
    const element = document.getElementById("completed");

    // Set the width style
   element.style.width = "1100px"; // Replace "100px" with your desired width

    
  })
  $(".genjson").click(function () {
    document.getElementById("box-text19").style.display = "none";
    document.getElementById("genjson-files").style.display = "block";
  })

  
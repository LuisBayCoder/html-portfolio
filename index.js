$(document).ready(function(){
    $('#linkedin').hover(
      function() {
        // This function is called when the mouse enters the image area
        $('body').css('background-color', 'blue');
      }, 
      function() {
        // This function is called when the mouse leaves the image area
        $('body').css('background-color', 'originalBackgroundColor');
      }
    );
  });
$(document).ready(function(){
    // Handle active nav link based on hash/section
    function updateActiveLink() {
      const hash = window.location.hash || '#First-featurette';
      
      // Remove active class from all nav links
      $('.navbar-nav .nav-link').removeClass('active');
      $('.navbar-nav .nav-link').removeAttr('aria-current');
      
      // Add active class to the clicked link
      if (hash === '#Contact') {
        $('a[href="#Contact"]').addClass('active').attr('aria-current', 'page');
      } else {
        $('a[href="#First-featurette"]').addClass('active').attr('aria-current', 'page');
      }
    }
    
    // Update active link on page load
    updateActiveLink();
    
    // Update active link when hash changes
    $(window).on('hashchange', updateActiveLink);
    
    // Update active link when nav links are clicked
    $('.navbar-nav .nav-link').on('click', function() {
      updateActiveLink();
    });
    
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
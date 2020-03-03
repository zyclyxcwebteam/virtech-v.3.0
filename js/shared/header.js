$(function() { 
  // $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
  // console.log($('#masterNavbar').find('a[href="' + location.pathname + '"]'));
    // ! Navbar dropdown menu toggle
    $("ul.dropdown-menu [data-toggle='dropdown']").on("mouseenter", function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show')             
      $('.dropdown-submenu a').removeClass('active') 
      $(this).addClass("active")             
      $(this).siblings().toggleClass("show");           

    // TODO - CHECK this logic
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
    });
  
    $("ul.dropdown-menu li:last-child").on("mouseenter", function(event) {
      event.preventDefault();
      event.stopPropagation(); 
     $(this).parents('.dropdown-menu').first().find('.show').removeClass('show') 
    })         
});
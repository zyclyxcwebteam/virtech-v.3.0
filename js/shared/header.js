$(function() {
  // $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
  // console.log($('#masterNavbar').find('a[href="' + location.pathname + '"]'));
  $(".dropdown")
    .siblings()
    .on("mouseenter", function(event) {
      if ($("#masterNavbar .dropdown .service-dropdown").hasClass("show")) {
        $("#masterNavbar .dropdown .service-dropdown").removeClass("show");
      }
    });

  // ! Navbar dropdown menu toggle
  $("ul.dropdown-menu [data-toggle='dropdown']").on("mouseenter", function(
    event
  ) {
    event.preventDefault();
    event.stopPropagation();
    $(this)
      .parents(".dropdown-menu")
      .first()
      .find(".show")
      .removeClass("show");

    $(".dropdown-submenu a").removeClass("active");

    $(this).addClass("active");
    $(this)
      .siblings()
      .toggleClass("show");

    // TODO - CHECK this logic
    if (
      !$(this)
        .next()
        .hasClass("show")
    ) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function(e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  });

  $("ul.dropdown-menu li:last-child").on("mouseenter", function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this)
      .parents(".dropdown-menu")
      .first()
      .find(".show")
      .removeClass("show");

    $(this)
      .parents(".dropdown-menu")
      .first()
      .find(".active")
      .removeClass("active");
  });

  // show dropdown on hover
  $("#masterNavbar .dropdown").on("mouseenter", function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this)
      .find(".service-dropdown")
      .addClass("show");
  });

  $(document).on("click", function() {
    $("#masterNavbar .dropdown .service-dropdown").removeClass("show");
  });

  $("#masterNavbar .dropdown .service-dropdown").on("mouseleave", function() {
    $("#masterNavbar .dropdown .service-dropdown").removeClass("show");
  });
});

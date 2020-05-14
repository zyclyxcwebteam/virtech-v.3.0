$(document).ready(function () {
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    var $el = $(this);
    $el.toggleClass("active-dropdown");
    var $parent = $(this).offsetParent(".dropdown-menu");
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this).parent("li").toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-menu .show").removeClass("show");
        $el.removeClass("active-dropdown");
      });

    if (!$parent.parent().hasClass("navbar-nav")) {
      $el.next().css({ top: $el[0].offsetTop, left: $parent.outerWidth() - 4 });
    }

    return false;
  });

  $("#contactLink").on("click", function () {
    if ($("#navbarContent").hasClass("show")) {
      $("#navbarContent").removeClass("show");
      $(".navbar-toggler").attr("aria-expanded", "false");
    }
  });

  // NAVBAR ADD/REMOVE SHADOW CHANGE ON SCROLL
  const navbar = document.querySelector(".navbar");
  const homeContainer = document.querySelector(".hero-banner");
  const sectionOneOptions = {
    rootMargin: "-60px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("navbar-shadow");
      } else {
        navbar.classList.remove("navbar-shadow");
      }
    });
  }, sectionOneOptions);
  sectionOneObserver.observe(homeContainer);
});

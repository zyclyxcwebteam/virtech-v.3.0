        $(document).ready(function () {
            $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
                var $el = $(this);
                $el.toggleClass('active-dropdown');
                var $parent = $(this).offsetParent(".dropdown-menu");
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');

                $(this).parent("li").toggleClass('show');

                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-menu .show').removeClass("show");
                    $el.removeClass('active-dropdown');
                });

                if (!$parent.parent().hasClass('navbar-nav')) {
                    $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
                }

                return false;
            });
        });  


// $(function() {
//   $(".dropdown")
//     .siblings()
//     .on("mouseenter", function(event) {
//       if ($("#masterNavbar .dropdown .service-dropdown").hasClass("show")) {
//         $("#masterNavbar .dropdown .service-dropdown").removeClass("show");
//       }
//     });
   
//   $("ul.dropdown-menu [data-toggle='dropdown']").on("mouseenter", function(
//     event
//   ) {
//     event.preventDefault();
//     event.stopPropagation();
//     $(this)
//       .parents(".dropdown-menu")
//       .first()
//       .find(".show")
//       .removeClass("show");

//     $(".dropdown-submenu a").removeClass("active");

//     $(this).addClass("active");
//     $(this)
//       .siblings()
//       .toggleClass("show");

//     if (
//       !$(this)
//         .next()
//         .hasClass("show")
//     ) {
//       $(this)
//         .parents(".dropdown-menu")
//         .first()
//         .find(".show")
//         .removeClass("show");
//     }
//     $(this)
//       .parents("li.nav-item.dropdown.show")
//       .on("hidden.bs.dropdown", function(e) {
//         $(".dropdown-submenu .show").removeClass("show");
//       });
//   });

//   $("ul.dropdown-menu li:last-child").on("mouseenter", function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     $(this)
//       .parents(".dropdown-menu")
//       .first()
//       .find(".show")
//       .removeClass("show");

//     $(this)
//       .parents(".dropdown-menu")
//       .first()
//       .find(".active")
//       .removeClass("active");
//   });

//   $("#masterNavbar .dropdown").on("mouseenter", function(event) {
//     event.stopPropagation();
//     event.preventDefault();
//     $(this)
//       .find(".service-dropdown")
//       .addClass("show");
//   });

//   $(document).on("click", function() {
//     $("#masterNavbar .dropdown .service-dropdown").removeClass("show");
//   });

//   $("#masterNavbar .dropdown .service-dropdown").on("mouseleave", function() {
//     $("#masterNavbar .dropdown .service-dropdown").removeClass("show");
//   });

//   $("#contactLink").on('click',function(){
//   console.log('clicked on contact link');
//   if($("#navbarContent").hasClass('show')){
//     $("#navbarContent").removeClass('show')
//     $(".navbar-toggler").attr("aria-expanded","false");
//   }
   
// })
// });

$(function () {
  let logoLeft = "38px";
  if (screen.width < 993) {
    logoLeft = "25px";
  }
  let controller = new ScrollMagic.Controller();
  let homeTitleCarousel = gsap.timeline({ repeat: -1 });

  //  logo animation
  let homePageLoad = gsap.timeline({ onComplete: startTitleCarousel });
  homePageLoad.to("body", { overflow: "hidden" });
  homePageLoad.fromTo(
    ".loading-wrapper img",
    {
      left: "50%",
      top: "50%",
      transform: "translate(-53%,-50%)",
      maxWidth: "250px",
    },
    {
      left: logoLeft,
      top: "9px",
      transform: "translate(0,0)",
      maxWidth: "150px",
      ease: "linear",
      duration: 2,
    }
  );

  homePageLoad.to("#masterNavbar", { opacity: 1, duration: 0.4, delay: 0.1 });
  homePageLoad.fromTo(
    "#page-loader",
    {
      opacity: 1,
      backgroundColor: "#ffffff",
    },
    {
      backgroundColor: "#16213d",
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 0.8,
    }
  );
  homePageLoad.to("#page-loader", { display: "none", duration: "0.001" });
  homePageLoad.to(".home-banner", { opacity: 1, duration: 0.1 });
  homePageLoad.to("body", { overflow: "visible", duration: 0.1 });

  //  Home page titles
  function startTitleCarousel() {
    homeTitleCarousel.fromTo(
      "#title-1",
      { display: "none", opacity: 0.7, y: 80 },
      { display: "block", opacity: 1, y: 0, duration: 2 }
    );
    homeTitleCarousel.to("#title-1", {
      y: -700,
      display: "none",
      opacity: 0,
      duration: 1,
      delay: 5,
    });

    homeTitleCarousel.fromTo(
      "#title-2",
      { display: "none", opacity: 0.7, y: 80 },
      { display: "block", opacity: 1, y: 0, duration: 2 }
    );
    homeTitleCarousel.to("#title-2", {
      y: -700,
      display: "none",
      opacity: 0,
      duration: 1,
      delay: 5,
    });

    homeTitleCarousel.fromTo(
      "#title-3",
      { display: "none", opacity: 0.7, y: 80 },
      { display: "block", opacity: 1, y: 0, duration: 2 }
    );
    homeTitleCarousel.to("#title-3", {
      y: -700,
      display: "none",
      opacity: 0,
      duration: 1,
      delay: 5,
    });

    homeTitleCarousel.fromTo(
      "#title-4",
      { display: "none", opacity: 0.7, y: 80 },
      { display: "block", opacity: 1, y: 0, duration: 2 }
    );
    homeTitleCarousel.to("#title-4", {
      y: -700,
      display: "none",
      opacity: 0,
      duration: 1,
      delay: 5,
    });

    homeTitleCarousel.fromTo(
      "#title-5",
      { display: "none", opacity: 0.7, y: 80 },
      { display: "block", opacity: 1, y: 0, duration: 2 }
    );
    homeTitleCarousel.to("#title-5", {
      y: -700,
      display: "none",
      opacity: 0,
      duration: 1,
      delay: 5,
    });
  }

  // Industries section

  // $(".industry").each(function () {
  //   setInterval(function () {
  //     $(this).toggleClass("active");
  //   }, 1000);
  // });

  $(".industry").on("mouseenter", function () {
    $(".industry").each(function () {
      $(this).removeClass("active");
    });
    $(".ind-content").each(function () {
      $(this).removeClass("active");
    });

    $(this).toggleClass("active");
    let indID = $(this).attr("id");
    let index = $(this).attr("data-index");
    $(`#ind-content-${index}`).addClass("active");
    gsap.from(`#ind-content-${index}`, { duration: 1, opacity: 0.5, y: 100 });
  });

  $("#industryInner .card").each(createIndHover);

  $("#servicesOuter .card").each(createIndHover);
  //$("#masterContainer .card").each(reverseBorder);

  function createIndHover(i, element) {
    let border = gsap.timeline();
    border.to($(this).find(".top-line"), { width: "97%", duration: 0.15 });
    border.to($(this).find(".right-line"), { height: "97%", duration: 0.15 });
    border.to($(this).find(".bottom-line"), { width: "97%", duration: 0.15 });
    border.to($(this).find(".left-line"), { height: "97%", duration: 0.15 });
    $(element).hover(doIt);
    function doIt() {
      border.reversed() ? border.play() : border.reverse();
    }
    border.reverse();
  }

  //
  // our clients/partners
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    center: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      900: { items: 3 },
    },
  });

  // NAVBAR BACKGROUND CHANGE ON SCROLL
  const navbar = document.querySelector(".navbar");
  const homeContainer = document.querySelector("#home");
  const bannerVideo = document.getElementById("bannerVideo");

  const sectionOneOptions = {
    rootMargin: "-60px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        bannerVideo.pause();
        homeTitleCarousel.pause();
        navbar.classList.add("navbar-shadow");
      } else {
        bannerVideo.play();
        homeTitleCarousel.resume();
        navbar.classList.remove("navbar-shadow");
      }
    });
  }, sectionOneOptions);
  sectionOneObserver.observe(homeContainer);
});

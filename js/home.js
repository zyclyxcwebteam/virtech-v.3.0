$(function() {
  let controller = new ScrollMagic.Controller();

  //  logo animation

  let homePageLoad = gsap.timeline({ onComplete: startTitleCarousel });
  homePageLoad.fromTo(
    "#logoCenter",
    {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      maxWidth: "350px"
    },
    {
      top: "9px",
      left: "38px",
      transform: "translate(0,0)",
      maxWidth: "150px",
      ease: "linear",
      duration: 2,
      delay: 1
    }
  );
  homePageLoad.to("#masterNavbar", { opacity: 1, duration: 0.4, delay: 0.1 });
  homePageLoad.fromTo(
    "#page-loader",
    {
      opacity: 1,
      backgroundColor: "#ffffff"
    },
    {
      backgroundColor: "#16213d",
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 0.8
    }
  );
  homePageLoad.to("#page-loader", { display: "none", duration: "0.001" });
  homePageLoad.to("body", { overflow: "visible", duration: 0.01 });
  homePageLoad.to(".home-banner", { opacity: 1, duration: 0.1 });

  //  Home page titles
  function startTitleCarousel() {
    let homeTitleCarousel = gsap.timeline({ repeat: -1 });
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
      delay: 5
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
      delay: 5
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
      delay: 5
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
      delay: 5
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
      delay: 5
    });
  }

  //  Services section

  //     new ScrollMagic.Scene({
  //         triggerElement: "#servicesOuter",
  //         triggerHook: 0.092,
  //         duration: '200%',
  //       })
  //         .setClassToggle(".side-nav", "light")
  //         .addIndicators({name:"services"})
  //         .setPin("#servicesOuter")
  //         .addTo(controller);

  // function startServiceCarousel(){
  //   $('.carousel').carousel('cycle');
  //   $('.carousel').carousel({
  //   interval: 5000,
  // })
  // }

  // Working Code

  // let bgColor = gsap.timeline({ onComplete: startServiceCarousel });
  //   bgColor.to('.services-wrapper', { '--service-bg': '#0c1b33', duration: 0.8,delay:0.2 })
  //   bgColor.to('.section-title-1', { color: '#f4f4f4', duration: 0.8,delay:0.3 },"-=0.7")
  //   bgColor.to('.section-title-1', { fontSize: '3rem',marginTop:'3rem', duration: 0.8,delay:0.2 })
  //   bgColor.fromTo('#servicesInner',{height:'0%'}, {  height:'100%',duration: 0.8,delay:0.2 },"-=1")
  //   bgColor.fromTo('#servicesInner',{opacity:0}, {  opacity:1,duration:0.5 })
  //   new ScrollMagic.Scene({
  //     triggerElement: "#servicesOuter",
  //     triggerHook: 0.09,
  //   })
  //     .setTween(bgColor)
  //     .addTo(controller);

  // end - working code

  //   let serviceCards = gsap.timeline();
  //   serviceCards.fromTo('.title-card-2',{opacity:0,display:'none',y:80}, { opacity: 1,display:'flex',y:0, duration:0.8 });
  //   serviceCards.fromTo('.service-cards .col-12',{opacity:0,y:60},{stagger:0.1,opacity:1,y:0,duration:0.8},"-=1")

  //   new ScrollMagic.Scene({
  //   triggerElement: "#serviceCards",
  //   triggerHook: 0.2,
  //   reverse:false
  // })
  //   .addIndicators({name:"servcie-cards"})
  //   .setTween(serviceCards)
  //   .addTo(controller);

  /* === OUR INDUSTRIES === */

  // let indColor = gsap.timeline();
  // indColor.to('#industryInner', { autoAlpha: 0, duration: 0.001 });
  // indColor.to('.industry-wrapper', { '--ind-bg': '#f4f4f4', duration: 1 })
  // indColor.to('.ind-hero-title', { color: '#0c1b33', duration: 1 }, "-=1")
  // indColor.to('.ind-hero-title', { top: '80px', fontSize: '3rem', duration: 1 })
  // indColor.to('#industryInner', { autoAlpha: 1, duration: 0.001 });

  // new ScrollMagic.Scene({
  //   triggerElement: "#industryMaster",
  //   triggerHook: 0.17,
  //   reverse: false
  // })
  //   .setTween(indColor)
  //   .addTo(controller);

  // new ScrollMagic.Scene({
  //   triggerElement: "#industryMaster",
  //   triggerHook: 0.07,
  //   duration: '150%',
  // })
  //   .setClassToggle(".side-nav", "light")
  //   .setPin("#industryMaster")
  //   .addTo(controller);

  // Clients scroll change side nav color
  // new ScrollMagic.Scene({
  //   triggerElement: "#clients",
  //   triggerHook: 0.02,
  //   duration: '100%',
  // })
  //   .setClassToggle(".side-nav", "light")
  //   .addTo(controller);

  // Industries section

  let industryCards = gsap.timeline();
  $(".industry").each(function() {
    // $(this).removeClass('active');
    //console.log('update class')
    setInterval(function() {
      $(this).toggleClass("active");
    }, 1000);
  });

  $(".industry").on("mouseenter", function() {
    $(".industry").each(function() {
      $(this).removeClass("active");
    });
    $(".ind-content").each(function() {
      $(this).removeClass("active");
    });

    $(this).toggleClass("active");
    let indID = $(this).attr("id");
    let index = $(this).attr("data-index");
    $(`#ind-content-${index}`).addClass("active");
    gsap.from(`#ind-content-${index}`, { duration: 1, opacity: 0.5, y: 100 });
  });

  $("#industryInner .card").each(createIndHover);

  $("#servicesOuter .card").each(playBorder);
  //$("#masterContainer .card").each(reverseBorder);

  function playBorder(i, element) {
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
      900: { items: 3 }
    }
  });

  // Who we are

  // Title animation

  // WORKING CODE
  // let introColor = gsap.timeline();
  // introColor.to('#introSlides', { autoAlpha: 0, duration: 0.001 });
  // introColor.to('#introContainer', { '--weare-bg': '#0c1b33', duration: 1 })
  // introColor.to('.intro-hero-title', { color: '#f4f4f4', duration: 1 }, "-=1")
  // introColor.to('.intro-hero-title', { top: '80px', fontSize: '3rem', duration: 1 })
  // introColor.to('#introSlides', { autoAlpha: 1, duration: 0.001 });

  // new ScrollMagic.Scene({
  //   triggerElement: "#introContainer",
  //   triggerHook: 0.15,
  // })
  //   .setTween(introColor)
  //   .setClassToggle(".side-nav", "light")
  //   .addTo(controller);

  // new ScrollMagic.Scene({
  //   triggerElement: "#introContainer",
  //   triggerHook: 0.08,
  //   duration: '200%',
  // })
  //   .setClassToggle(".side-nav", "light")
  //   .setPin("#introContainer", { pushfollowers: false })
  //   .addTo(controller);

  //let companyIntroAnimation = gsap.timeline()
  //.to("#introSlides", { x: "-33.333%", ease: Linear.easeNone, duration: 4, delay: 2 })
  //.to("#introSlides", { x: "-66.666%", ease: Linear.easeNone, duration: 4, delay: 2 })

  // create scene to pin and link animation
  // new ScrollMagic.Scene({
  //   triggerElement: "#introContainer",
  //   triggerHook: 0.25,
  //   duration: "100%",
  // })
  //   .setPin("#introContainer")
  //   .setTween(companyIntroAnimation)
  //   .addIndicators({name:'about',indent:5})
  //   .addTo(controller);

  // core values

  let coreValues = gsap.timeline();
  //coreValues.fromTo('#coreValues .core-values .card-body',{autoAlpha:0,y:30},{stagger:0.5,autoAlpha:1,duration:4,y:0,delay:2})

  // new ScrollMagic.Scene({
  //     triggerElement:'#coreValues',
  //     triggerHook:0.5,
  // })
  // .setTween(coreValues)
  // .addIndicators({name:'cvalues',colorStart:'orange',colorEnd:'orange'})
  // .addTo(controller)

  // testimonial-wrapper
  // let testimonials = gsap.timeline();
  // testimonials.fromTo('#testimonials .t-left', { autoAlpha: 0, x: -200 }, { stagger: 0.2, autoAlpha: 1, duration: 1, x: 0, delay: 1 })
  // testimonials.fromTo('#testimonials .t-right', { autoAlpha: 0, x: 250 }, { stagger: 0.2, autoAlpha: 1, duration: 1, x: 0 }, "-=1")
  // new ScrollMagic.Scene({
  //   vertical: false,
  //   triggerElement: '#testimonials',
  //   triggerHook: 0.3,
  // })
  //   .setTween(testimonials)

  //   .addTo(controller)

  //  Contact us banner

  // let contactButton = document.getElementById('contactButton');
  // let contactLink = document.getElementById('contactLink');
  let pocContactButton = document.getElementById("pocContact");
  // let contactClose = document.getElementById('contactClose');

  // contactLink.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   gsap.to('.contact-wrapper', { display: 'flex', minHeight: '100%',top:0,bottom:'unset', duration: 0.5 })
  // })

  // contactButton.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   gsap.to('.contact-wrapper', { display: 'flex', minHeight: '100%',top:0,bottom:'unset', duration: 0.5 })
  // })

  pocContactButton.addEventListener("click", function(event) {
    gsap.to(".contact-wrapper", {
      display: "flex",
      minHeight: "100%",
      top: 0,
      bottom: "unset",
      duration: 0.5
    });
  });

  // contactClose.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   gsap.to('.contact-wrapper', { display: 'none', paddingTop: '0px',bottom:'0',top:'unset' ,minHeight: '0px', duration: 0.5 })
  // })

  // services slides dot navigation

  // function removeActiveClass() {
  //   $('.s-slide-nav a').each(function () {
  //     $(this).removeClass('active');
  //   })
  // }

  // function addActiveClass(indicator) {
  //   $(indicator).toggleClass('active');
  // }

  // document.getElementById('s-slide-1').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   gsap.to("#slidesContainer", { x: "-0.01%", ease: Linear.easeNone, duration: 1, })
  //   removeActiveClass();
  //   addActiveClass('#s-slide-1');
  // })

  // document.getElementById('s-slide-2').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   gsap.to("#slidesContainer", { x: "-25%", ease: Linear.easeNone, duration: 1, })
  //   removeActiveClass();
  //   addActiveClass('#s-slide-2');
  // })

  // document.getElementById('s-slide-3').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   gsap.to("#slidesContainer", { x: "-50%", ease: Linear.easeNone, duration: 1, })
  //   removeActiveClass();
  //   addActiveClass('#s-slide-3');
  // })

  // document.getElementById('s-slide-4').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   gsap.to("#slidesContainer", { x: "-75%", ease: Linear.easeNone, duration: 1, })
  //   removeActiveClass();
  //   addActiveClass('#s-slide-4');
  // })

  // end services slides dot navigation
  //  side navigation links
  //let controller = new ScrollMagic.Controller();
  // controller.scrollTo(function (newpos) {
  //     TweenMax.to(window, 1, {scrollTo: {y: newpos},duration:4, ease:Power4.easeInOut});
  // });
  /*
      // side navigation part
      $(document).on("click", ".side-nav a[href^='#']", function (e) {
          var id = $(this).attr("href");
          if ($(id).length > 0) {
              e.preventDefault();       
            slideAnimation.pause();
            companyIntroAnimation.pause();
              // trigger scroll
              controller.scrollTo(id);       
              // if supported by the browser we can even update the URL.
              if (window.history && window.history.pushState) {
                  //history.pushState("", document.title, id);
              }
          }
      });
      */
  // NAVBAR BACKGROUND CHANGE ON SCROLL
  const navbar = document.querySelector(".navbar");
  const homeContainer = document.querySelector("#home");
  const bannerVideo = document.getElementById("bannerVideo");

  const sectionOneOptions = {
    rootMargin: "-60px 0px 0px 0px"
  };

  const sectionOneObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        //navbar.classList.remove("navbar-dark")
        //navbar.classList.add("navbar-light");
        document.querySelector(".side-nav").classList.remove("hide");
        bannerVideo.pause();
      } else {
        //navbar.classList.remove("navbar-light");
        //navbar.classList.add("navbar-dark");
        document.querySelector(".side-nav").classList.add("hide");
        bannerVideo.play();
      }
    });
  }, sectionOneOptions);
  sectionOneObserver.observe(homeContainer);
  // END - NAVBAR BACKGROUND COLOR TOGGLE ON SCROLL
});

let imageOne = document.getElementById("cimg1");
let imageTwo = document.getElementById("cimg2");
imageOne.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
  document.querySelector(".contact-banner").style.backgroundImage =
    "url(./img/contact/saudi-1.jpg)";
  document.querySelector(".contact-banner").style.backgroundColor = "#01004c";
});
imageTwo.addEventListener("click", function(e) {
  event.preventDefault();
  event.stopPropagation();
  document.querySelector(".contact-banner").style.backgroundImage =
    "url(./img/contact/rsz_saudi-2.jpg)";
  document.querySelector(".contact-banner").style.backgroundColor = "#000f1e";
});

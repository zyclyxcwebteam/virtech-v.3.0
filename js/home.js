$(function () {
  let controller = new ScrollMagic.Controller();
  let homeTitleCarousel = gsap.timeline({ repeat: -1 });

  //  logo animation

  let homePageLoad = gsap.timeline({ onComplete: startTitleCarousel });
  homePageLoad.to('body',{overflow:'hidden'})
  homePageLoad.fromTo(
    "#logoCenter",
    {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      maxWidth: "300px"
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
  homePageLoad.to(".home-banner", { opacity: 1, duration: 0.1 });
  homePageLoad.to('body',{overflow:'visible',duration:0.1})

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


  function startServiceCarousel() {
    $(".carousel").carousel("cycle");
    $(".carousel").carousel({
      interval: 5000
    });
  }

  //Working Code
  // new ScrollMagic.Scene({
  //   triggerElement: "#servicesOuter",
  //   triggerHook: 0.08,
  //   duration: "50%"
  // })
  //   .setPin('#servicesOuter')
  //  .addIndicators({ name: "service" })
  //   .addTo(controller);

  let bgColor = gsap.timeline({ onComplete: startServiceCarousel });
  bgColor.fromTo(
    ".services-wrapper",
    { "--service-bg": "#ffffff" },
    {
      "--service-bg": "#16213d",
      duration: 0.6       
    }
  );
  bgColor.fromTo('.services-wrapper .section-title-bg',{autoAlpha:1},{autoAlpha:0,duration:0.1},'-=0.5')     
  bgColor.fromTo(
    "#servicesInner",
    { opacity: 0 },
    { opacity: 1, duration: 0.5 }
  );
  bgColor.fromTo(".services-wrapper .title-1",{opacity:0},{opacity:1,duration:0.5})
  new ScrollMagic.Scene({
    triggerElement: "#servicesOuter",
    triggerHook: 0.1,
    duration: "0px"
  })
    .setTween(bgColor)
    .reverse(false)    
    .addTo(controller);

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

  let indColor = gsap.timeline();   
  indColor.fromTo('.industry-wrapper',{'--ind-bg':'#16213d'} ,{ '--ind-bg': '#f4f4f4', duration: 0.6 })
  indColor.fromTo('.spacer',{'--ind-bg':'#16213d'} ,{ '--ind-bg': '#f4f4f4', duration: 1 },'-=1')
  indColor.fromTo('.industry-wrapper .section-title-bg',{autoAlpha:1},{autoAlpha:0,duration:0.1},'-=0.5')     
  indColor.fromTo('.industry-inner',{autoAlpha:0}, { autoAlpha: 1, duration: 0.001 });
  indColor.fromTo('.industry',{y:80,opacity:0},{y:0,opacity:1,stagger:0.2,duration:1});
  indColor.fromTo('.ind-content',{y:80,opacity:0},{y:0,opacity:1,duration:0.5},'-=2')

  new ScrollMagic.Scene({
    triggerElement: "#industryMaster",
    triggerHook: 0.17,
    reverse: false
  })
    .setTween(indColor)
    .addTo(controller);

  // new ScrollMagic.Scene({
  //   triggerElement: "#industryMaster",
  //   triggerHook: 0.08,
  //   duration: '50%',
  // })
  //  .addIndicators({name:'industry'})
  //   .setPin("#industryMaster")
  //   .addTo(controller);

 

  // Industries section

  let industryCards = gsap.timeline();
  $(".industry").each(function () {
    // $(this).removeClass('active');
    //console.log('update class')
    setInterval(function () {
      $(this).toggleClass("active");
    }, 1000);
  });

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
      900: { items: 3 }
    }
  });

   
  // core values
let coreValues = gsap.timeline();
  coreValues.fromTo('.core-values',{'--core-value':'#ffffff'} ,{ '--core-value': '#16213d', duration: 0.6 })   
  coreValues.fromTo('.core-values .section-title-bg',{autoAlpha:1},{autoAlpha:0,duration:0.1},'-=0.5')     
  coreValues.fromTo('.core-values .wrapper',{autoAlpha:0}, { autoAlpha: 1, duration: 0.001 });
  coreValues.fromTo(".core-values .title-1",{opacity:0},{opacity:1,duration:0.5})
  coreValues.fromTo('.core-values .c-val',{autoAlpha:0,y:30},{stagger:0.1,autoAlpha:1,duration:1,y:0}) 
  // coreValues.fromTo('.industry',{y:80,opacity:0},{y:0,opacity:1,stagger:0.2,duration:1});
  // coreValues.fromTo('.ind-content',{y:80,opacity:0},{y:0,opacity:1,duration:0.5},'-=2')

  new ScrollMagic.Scene({
    triggerElement: ".core-values",
    triggerHook: 0.17,
    reverse: false
  })
    .setTween(coreValues)
    .addTo(controller);

  // new ScrollMagic.Scene({
  //   triggerElement: ".core-values",
  //   triggerHook: 0.08,
  //   duration: '50%',
  // })
  //  .addIndicators({name:'core value'})
  //   .setPin(".core-values")
  //   .addTo(controller);
  
  
  
  // NAVBAR BACKGROUND CHANGE ON SCROLL
  const navbar = document.querySelector(".navbar");
  const homeContainer = document.querySelector("#home");
  const bannerVideo = document.getElementById("bannerVideo");

  const sectionOneOptions = {
    rootMargin: "-60px 0px 0px 0px"
  };

  const sectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        bannerVideo.pause();
        homeTitleCarousel.pause();
      } else { 
        bannerVideo.play();
        homeTitleCarousel.resume();
      }
    });
  }, sectionOneOptions);
  sectionOneObserver.observe(homeContainer);
  // END - NAVBAR BACKGROUND COLOR TOGGLE ON SCROLL
});

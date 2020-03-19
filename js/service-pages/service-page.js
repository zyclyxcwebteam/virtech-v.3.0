  let cardAnimation = gsap.timeline();
    cardAnimation.fromTo(
      ".service-content-cards .col-12",
      { y: 60, autoAlpha: 0 },
      { stagger: 0.7, y: 0, autoAlpha: 1, duration: 2 }
    );

    let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "#serviceOverview",
      triggerHook: 0.13,
      reverse: false
    })
      .setTween(cardAnimation)
      .addTo(controller);

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
gsap.registerPlugin(CSSPlugin);

let controller = new ScrollMagic.Controller();

let titleReveal = gsap.timeline();
titleReveal.from('.service-content .service-section-title', { duration: 0.7, autoAlpha: 0, y: 80, ease: "power1.out" })
new ScrollMagic.Scene({
  triggerElement: '.service-content',
  triggerHook: 0.6
})
   
  .setTween(titleReveal)
  .reverse(false)
  .addTo(controller)



$('.content-card').each(function () {
  let icon = $(this).find('.content-card-icon img');
  let title = $(this).find('.content-card-title');
  let text = $(this).find('.content-card-text');

  revealContent = gsap.timeline();

  revealContent.from(title, { duration: 0.6, autoAlpha: 0, y: 40, ease: "power1.out" })
  revealContent.from(text, { duration: 0.6, autoAlpha: 0, y: 40, ease: "power1.out" }, "-=0.6")
  revealContent.from(icon, { duration: 0.6, autoAlpha: 0, y: 40, ease: "power1.out" }, "-=0.6")

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7
  })     
    .setTween(revealContent)
    .reverse(false)
    .addTo(controller)
})




let clientsSlider = gsap.timeline();
clientsSlider.from('.service-partners .service-section-title', { duration: 0.6, autoAlpha: 0, y: 40, ease: "power1.out" })
clientsSlider.from('.clients-carousel', { duration: 0.5, y: 30, autoAlpha: 0, scaleY: 0, transformOrigin: "bottom", ease: "power1.out" }, '-=0.5')

new ScrollMagic.Scene({
  triggerElement: '.clients-carousel',
  triggerHook: 'onEnter'
})   
  .setTween(clientsSlider)
  .reverse(false)
  .addTo(controller)


let contactBanner = gsap.timeline();
contactBanner.from('.contact-banner', { duration: 0.6, scaleY: 0, autoAlpha: 0, transformOrigin: "bottom", ease: "power1.out" })
contactBanner.from('.contact-banner .contact-title', { duration: 0.5, y: 20, autoAlpha: 0, ease: "power1.out" })
contactBanner.from('.service-contact', { duration: 0.5, y: 20, autoAlpha: 0, ease: "power1.out" }, "-=0.5")
new ScrollMagic.Scene({
  triggerElement: '.contact-banner',
  triggerHook: 'onEnter'
})   
  .setTween(contactBanner)
  .reverse(false)
  .addTo(controller)


// our clients/partners
$(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  autoplaySpeed: 2000,
  dots: false,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    900: { items: 3 }
  }
});
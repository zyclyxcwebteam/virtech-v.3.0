 
//   horizontal scroll for our services
  $(function () {
    // init
		let controller = new ScrollMagic.Controller();
		// define movement of panels
		let wipeAnimation = gsap.timeline()
			// animate to second panel			 
			.to("#slideContainer", 1,   {x: "-50%",ease: "power1.out"})	// move in to first panel			 		 			 
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#serviceContainer",
				triggerHook: "onLeave",
				duration: "800%"
			})
			.setPin("#serviceContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
    });
    
    // services page reveal animation on scroll
    let revealPage = gsap.timeline();
    revealPage.from('.back-title',{duration:1,opacity:1})
    revealPage.to('.service-panel',{duration:1,opacity:1})
    revealPage.from('.card',{duration:1,opacity:0,y:100})


   // let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#serviceContainer",
        triggerHook: "onLeave",
        reverse:false
        
    })
    //.setPin("#serviceContainer")
    .setTween(revealPage)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
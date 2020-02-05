$(function () {
            // init Scroll Magic    
            let controller = new ScrollMagic.Controller();

            // define movement of panels
            let slideAnimation = gsap.timeline()
                .from(".bg-title", { opacity: 1, duration: 2 })
                .from(".slide-1",{opacity:0,duration:2,delay:1,ease: "power1.out"})
                .to("#slidesContainer", 4, { x: "-25%",delay:4 })
                .from("#advantages .card",{stagger:2,duration:2,opacity:0.8,x:25,y:50,ease: "power1.out",delay:4})                 
                .to("#slidesContainer", 4, { x: "-50%" })
                .from("#capabilities .card",{stagger:2,duration:2,opacity:0.8,x:25,y:50,ease: "power1.out",delay:4})
                .to("#slidesContainer", 4, { x: "-75%" })
                .from("#partners img",{stagger:2,duration:2,opacity:0.8,x:25,y:50,ease: "power1.out",delay:4})
            // create scene to pin and link animation
            new ScrollMagic.Scene({
                triggerElement: "#masterContainer",
                triggerHook: "onLeave",
                duration: "800%",
                // reverse:false          
            })
                .setPin("#masterContainer")
                .setTween(slideAnimation)
                .addIndicators() // Indicators - remove on production
                .addTo(controller);             
        });
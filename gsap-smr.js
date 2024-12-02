 window.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
     
    gsap.utils.toArray("[gsap-text-animation='small-trigger']").forEach((trigger) => {
      let animateElements = trigger.querySelectorAll("[gsap-text-animation='small-animate']");

      gsap.set(animateElements, {
        opacity: 0,
        transform: "translateY(50px) scale(0.9)"
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top 70%",
          end: "bottom 25%",
          toggleActions: "play pause play pause",
        }
      });

      tl.to(animateElements, {
          opacity: 1,
          transform: "translateY(0) scale(1)",
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1 
      });
    });
  });

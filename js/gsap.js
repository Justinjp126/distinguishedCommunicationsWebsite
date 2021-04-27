document.addEventListener("DOMContentLoaded", function (event) {
  // wait until window is loaded - meaning all images, style-sheets, and assets
  window.onload = function () {
    var timeline = gsap.timeline({ defaults: { duration: 1 } });

    gsap.registerPlugin(ScrollTrigger);

    timeline.from(".homeImg__title_items", {
      opacity: 0,
      x: -50,
      duration: 0.9,
      stagger: 0.1,
    });

    gsap.from(".quote", {
      opacity: 0.1,
      x: -25,
      scrollTrigger: {
        trigger: ".homeImg__button",
        start: "bottom bottom-=100",
        markers: true,
        scrub: true,
      },
    });

    gsap.from(".featured__title", {
      opacity: 0.7,
      scrollTrigger: {
        trigger: ".featured__title",
        start: "bottom bottom",
        end: "+=100px",
        markers: true,
        scrub: true,
      },
    });

    gsap.from(".card-title", {
      opacity: 0.1,
      y: -10,
      scrollTrigger: {
        trigger: ".card-title",
        start: "bottom bottom",
        end: "+=100px",
        markers: true,
        scrub: true,
      },
    });

    gsap.from(".card-text", {
      opacity: 0.1,
      y: -10,
      scrollTrigger: {
        trigger: ".card-title",
        start: "bottom bottom",
        end: "+=100px",
        markers: true,
        scrub: true,
      },
    });
  };
});

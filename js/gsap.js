document.addEventListener("DOMContentLoaded", function (event) {
  // wait until window is loaded - meaning all images, style-sheets, and assets
  window.onload = function () {
    var timeline = gsap.timeline({ defaults: { duration: 1 } });

    timeline.from(".homeImg__title_items", {
      opacity: 0,
      x: -50,
      duration: 0.9,
      stagger: 0.1,
    });
  };
});

var owl = $(".owl-carousel");
owl.owlCarousel({
 items: 1,
 loop: true,
 margin: 10,
 autoplay: true,
 autoplayTimeout: 5000,
 autoplayHoverPause: false,
 mouseDrag: false,
 touchDrag: false,
 pullDrag: false,
 freeDrag: false,
 animateOut: "fadeOut",
 animateIn: "fadeIn",
 dots: true,
 nav: false,
});
function startTypedEffect(id, strings) {
 new Typed(id, {
  strings: strings,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 3000,
  loop: true,
 });
}
startTypedEffect("#typed-text", [
 "With a masterpiece of the skyline of Canary Wharf",
 "By crafting narrative and reflection,<br>weaving spatial experiences",
 "Inspired by the heartbeat of London",
 "In which every detail reflects a unique aspect",
 "To creating visions in the sands of Saudi Arabia",
]);

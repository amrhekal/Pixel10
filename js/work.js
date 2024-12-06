new VenoBox({
 selector: ".my-image-links",
 numeration: true,
 infinigall: true,
 share: true,
 spinner: "rotating-plane",
});

const arrowUp = document.getElementById("arrow-up");
window.addEventListener("scroll", function () {
 const scrollDistance = 300;

 if (window.scrollY > scrollDistance) {
  arrowUp.style.display = "block";
 } else {
  arrowUp.style.display = "none";
 }
});

arrowUp.addEventListener("click", () => {
 window.scrollTo({
  top: 0,
  behavior: "smooth",
 });
});

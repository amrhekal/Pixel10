const bars = document.getElementById("bars");
const list = document.querySelector(".app nav ul");

bars.addEventListener("click", () => {
 if (list.clientHeight == 0) {
  list.style.height = `${list.scrollHeight}px`;
  bars.style.transform = "rotate(-45deg)";
 } else {
  list.style.height = "";
  bars.style.transform = "";
 }
});

const bars = document.getElementById("bars");
const list = document.querySelector(".app nav ul");

bars.addEventListener("click", () => {
 if (list.clientHeight == 0) {
  list.style.height = `${list.scrollHeight}px`;
 } else {
  list.style.height = "";
 }
});

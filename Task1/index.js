const input = document.querySelectorAll("input")
.forEach(el => el.addEventListener("click", (event) => console.log("Нажата " + event.target.value)))

const input = document.querySelector(".input");
const body = document.getElementsByTagName("body");
input.addEventListener("click", () => {
    const randomBackground = Math.round(Math.random() * 1000000);
    console.log(randomBackground)
    document.body.style.backgroundColor = `#${randomBackground}`;
})
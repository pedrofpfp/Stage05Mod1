const imgClick = document.querySelector("#imgClose");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const button = document.querySelector("#button");
const textLuck = document.querySelector("#textLuck");
randomNumber = Math.round(Math.random() * 5);
const luckText = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
];

imgClick.addEventListener("click", showLuck);
button.addEventListener("click", toggleScreen);

document.addEventListener("keydown", function enterPress(e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    showLuck();
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
});

function showLuck() {
  toggleScreen();
  textLuck.innerHTML = luckText[randomNumber];
  randomNumber = Math.round(Math.random() * 5);
}
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

const canvas = document.getElementById("canvas");
const score = document.getElementById("score");
const days = document.getElementById("days");
const endScreen = document.getElementById("endScreen");

virusPop();

function virusPop() {
  let virus = new Image();

  virus.src = "./Assets/Mail_(Apple)_logo.png";

  virus.classList.add("virus");
  virus.style.top = Math.random() * 500 + "px";
  virus.style.left = Math.random() * 500 + "px";

  let x, y;
  x = y = Math.random() * 45 + 30;
  virus.style.setProperty(`--x`, `${x}px`);
  virus.style.setProperty(`"--x`, `${y}px`);

  let plusMinus = Math.random() < 0.5 ? -1 : 1;
  let trX = Math.random() * 500 * plusMinus;
  let trY = Math.random() * 500 * plusMinus;
  virus.style.setProperty(`--trX`, `${trX}%`);
  virus.style.setProperty(`--trY`, `${trY}%`);

  canvas.appendChild(virus);
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#form .nameInput");
const cancelBtn = document.querySelector("#cancel");
const submitBtn = document.querySelector("#submit");
const result = document.createElement("div");
document.body.appendChild(result);
result.classList.add("result");

function onSubmit(event) {
  event.preventDefault();
  const playerName = nameInput.value;
  paintGreetings(playerName);
}

function onClick(event) {
  event.preventDefault();
  document.body.removeChild(result);
}
function paintGreetings(playerName) {
  result.innerText = "Hello " + playerName;
}

form.addEventListener("submit", onSubmit);
submitBtn.addEventListener("click", onSubmit);
cancelBtn.addEventListener("click", onClick);

const baseball = document.querySelector("#baseball");
baseball.style.position = "absolute";
baseball.style.left = "600px";
baseball.stlye.top = "200px";
let [x, y] = [600, 200];
const block = 20;
baseball.style.backgroundColor = "black";
const print = () => {
  baseball.style.left = `${x * block}px`;
  baseball.style.top = `${y * block}px`;
};
print();

function onKeyEvent(event) {
  alert("sdfs");
  switch (event.keyCode) {
    case 37:
      alert("sdfs");
      x -= 1;
      break;
    case 38:
      y -= 1;
      break;
    case 39:
      x += 1;
      break;
    case 40:
      y += 1;
      break;
  }
  print();
}

document.addEventListener("keydown", onKeyEvent);
baseball.addEventListener("click", () => {
  alert("click");
});

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

function onClickCancel(event) {
  event.preventDefault();
  document.body.removeChild(result);
}
function paintGreetings(playerName) {
  result.innerText = "Hello " + playerName;
}

form.addEventListener("submit", onSubmit);
submitBtn.addEventListener("click", onSubmit);
cancelBtn.addEventListener("click", onClickCancel);

const jacob = document.querySelector("#jacob");
const src =
  "https://w.namu.la/s/84d3b6f01240b18ec7f7613c6e4180e3f21a59ccd29fa3097c5546c37ac2b0eb6fb4b8d3346b738313f37fc6ed6aa69d19d6457f521823c0dc94e04ea680176353da06e000ce538ebdd6ea3a1206d2f4b2abe0cc1035fceecb011d1564138a24f925e6c16c46ca49ba851f9025e67b04";
jacob.setAttribute("src", src);

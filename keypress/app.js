const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");

startbtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startbtn.disabled = true;
  stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);

  logdiv.textContent = "";
  statediv.textContent = "";
  startbtn.disabled = false;
  stopbtn.disabled = true;
});

function handleDown(e) {
  logdiv.textContent = `key ${e.key} press down`;
  statediv.textContent = "key  is down";
}

function handleUp(e) {
  logdiv.textContent = `key ${e.key} press up`;
  statediv.textContent = "key  is up";
}

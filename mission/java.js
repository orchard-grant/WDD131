let selectElem = document.getElementById("modeSelect");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

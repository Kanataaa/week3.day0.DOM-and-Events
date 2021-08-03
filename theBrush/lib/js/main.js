const doc = document.querySelector("body");
doc.addEventListener("click", onClick)

function onClick() {
    document.getElementById("rengar").setAttribute("src", "assets/rengar.png");
    alert("You've been deleted!");
}
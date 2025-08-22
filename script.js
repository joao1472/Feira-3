const modal = document.getElementById("modal");
const card = document.getElementById("naeniCard");
const closeBtn = document.querySelector(".close");

card.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

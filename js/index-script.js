// triger to open modal and close modal
var modal = document.getElementById("myModal");

var button = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close-modal")[0];

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
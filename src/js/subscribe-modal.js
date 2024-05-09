
const modal = document.getElementById("modal");


const btn = document.getElementById("openModal");


const close = document.getElementsByClassName("close")[0];


btn.addEventListener('click', function() {
  modal.style.display = "block";
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})


window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
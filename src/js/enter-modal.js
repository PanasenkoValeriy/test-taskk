const modal = document.querySelector('.modal-background');
const close = document.querySelector('.enter-modal-close');
const input = document.getElementById('enterInput');
const saveBtn = document.getElementById('modalBtn');
const userName = document.getElementById('user__name');
const form = document.getElementById('enter-modal-form');

close.addEventListener('click', () => {
  modal.style.display = "none";
})

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    modal.style.display = "none";
  }
});

saveBtn.addEventListener('click', save);

function save() {
  modal.style.display = "none";
  if(input.value !== '') {
    userName.textContent = `${input.value}!`;
  } else {
    userName.textContent = 'User!';
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  save();
});

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      e.preventDefault();
      save();
  }
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
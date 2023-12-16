//navbar
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

//Heading text
const textEl = document.getElementById('text');
const text = 'Travel anywhere you want to see!!';
let idx = 0;
let speed = 120;
function writeText() {
  if (textEl) {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
      idx = 0;
    }
    setTimeout(writeText, speed);
  }
}
writeText();

//Photo modal
const modal = document.getElementById('myModal');
const images = document.querySelectorAll('.myImages');
const modalImg = document.getElementById('img01');
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function (evt) {
    modal.style.display = 'block';
    modalImg.src = this.src;
  };
}

$(document).ready(function () {
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.modal-content, .myImages').length) {
      $('#myModal').hide();
    }
  });

  $('.close').on('click', function () {
    $('#myModal').hide();
  });
});

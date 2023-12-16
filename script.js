//navbar
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

//Photo modal
const modal = document.getElementById('myModal');
const images = document.getElementsByClassName('myImages');
const modalImg = document.getElementById('img01');
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function (evt) {
    modal.style.display = 'block';
    modalImg.src = this.src;
  };
}
// Get the <span> element that closes the modal
const button = document.getElementsByClassName('close')[0];
// When the user clicks on x, close the modal
button.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (!event.target.matches('.myImages')) {
    $('#myModal').hide();
  }
};

//navbar

const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

// //photo changer
// window.addEventListener('load', function () {
//   const click_image = document.querySelectorAll('img[image-data]');

//   click_image.forEach(function (click) {
//     click.addEventListener('click', function (e) {
//       let data = click.getAttribute('image-data');
//       document
//         .querySelector('.change-image')
//         .setAttribute('src', `assest/homepage/${data}.jpg`);
//     });
//   });
// });

//Photo modal
const modal = document.getElementById('myModal');
const images = document.getElementsByClassName('myImages');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function (evt) {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}
// Get the <span> element that closes the modal
const button = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close the modal
button.onclick = function () {
  modal.style.display = 'none';
};

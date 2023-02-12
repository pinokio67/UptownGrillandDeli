document.querySelector('.button-two').addEventListener('click', function(event) {
  event.preventDefault(); // prevent the default link behavior
  document.querySelector('#mymenu').scrollIntoView({
    behavior: 'smooth' // smoothly scroll to the element
  });
});

var dropLinkItems = document.querySelectorAll('.drop-link-item');
for (var i = 0; i < dropLinkItems.length; i++) {
  dropLinkItems[i].addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.navbar-toggler').click();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
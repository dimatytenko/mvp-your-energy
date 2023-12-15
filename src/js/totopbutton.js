const upButton = document.querySelector('#upbutton');

upButton.addEventListener('click', smoothJumpUp);

function smoothJumpUp() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

window.onscroll = () => {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 700) {
    document.getElementById('upbutton').style.display = 'block';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
};

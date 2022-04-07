const slide = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function nextClick() {
  if (slide.classList.contains('slider1') === true) {
    slide.classList.remove('slider1');
    slide.classList.add('slider2');
    count = 0;
  } else if (slide.classList.contains('slider2') === true) {
    slide.classList.remove('slider2');
    slide.classList.add('slider3');
    count = 0;
  } else if (slide.classList.contains('slider3') === true) {
    slide.classList.remove('slider3');
    slide.classList.add('slider4');
    count = 0;
  } else {
    slide.classList.remove('slider4');
    slide.classList.add('slider1');
    count = 0;
  }
};

function prevClick() {
  if (slide.classList.contains('slider1') === true) {
    slide.classList.remove('slider1');
    slide.classList.add('slider4');
    count = 0;
  } else if (slide.classList.contains('slider2') === true) {
    slide.classList.remove('slider2');
    slide.classList.add('slider1');
    count = 0;
  } else if (slide.classList.contains('slider3') === true) {
    slide.classList.remove('slider3');
    slide.classList.add('slider2');
    count = 0;
  } else {
    slide.classList.remove('slider4');
    slide.classList.add('slider3');
    count = 0;
  }
};

let count = 0;

setInterval(() => {
  if (count > 4) {
    count = 0;
    nextClick();
  }
  count++;
}, 1000);
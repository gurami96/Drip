const divs = document.querySelectorAll('#div');
const Continue = document.querySelector('#Continue');
const Choose = document.querySelector('#Choose');
const Calculate = document.querySelector('#Calculate');
const Cancel = document.querySelector('#Cancel');

divs.forEach(div => {
  div.addEventListener('click', () => {
    divs.forEach(d => {
      d.style.backgroundColor = 'white';
      d.style.color = 'black';
    });
    div.style.backgroundColor = '#5988ff';
    div.style.color = 'white';
  });
});

let clicked = 0

Continue.addEventListener("click", () => {
  clicked++

  if (clicked === 1) {
    Choose.classList.add("Pro")
  } else if (clicked === 2) {
    Calculate.classList.add("Pro")
  }
})

Cancel.addEventListener("click", () => {
  Choose.classList.remove("Pro")
  Calculate.classList.remove("Pro")
  clicked = 0
})
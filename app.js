const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');

let rOut = document.querySelector('#r-out');
let gOut = document.querySelector('#g-out');
let bOut = document.querySelector('#b-out');

const body = document.body;

console.log('r', r.value);
console.log('g', g.value);
console.log('b', b.value);

console.log('r', rOut.value);
console.log('g', gOut.value);
console.log('b', bOut.value);

r.addEventListener('change', () => {
  console.log('r', r.value);
  rOut = parseInt(r.value);
  setRbgColor();
});

g.addEventListener('change', () => {
  console.log('r', g.value);
  gOut = parseInt(g.value);
  setRbgColor();
});

b.addEventListener('change', () => {
  console.log('r', b.value);
  bOut = parseInt(b.value);
  setRbgColor();
});

const setRbgColor = () => {
  console.log('rOut', rOut);
  console.log('gOut', gOut);
  console.log('bOut', bOut);
  body.style.backgroundColor = 'rgb(' + rOut + ', ' + gOut + ', ' + bOut + ')';
};

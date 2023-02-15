const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');

const rOut = document.querySelector('#r-out');
const gOut = document.querySelector('#g-out');
const bOut = document.querySelector('#b-out');

const body = document.body;

console.log('r', r.value);
console.log('g', g.value);
console.log('b', b.value);

console.log('r', rOut.value);
console.log('g', gOut.value);
console.log('b', bOut.value);

r.addEventListener('change', () => {
  rOut.value = r.value;
  rOutputNum = parseInt(r.value);
  setRbgColor();
});

g.addEventListener('change', () => {
  gOut.value = g.value;
  gOutputNum = parseInt(g.value);
  setRbgColor();
});

b.addEventListener('change', () => {
  bOut.value = b.value;
  bOutputNum = parseInt(b.value);
  setRbgColor();
});

const setRbgColor = () => {
  body.style.backgroundColor =
    'rgb(' + rOutputNum + ', ' + gOutputNum + ', ' + bOutputNum + ')';
};

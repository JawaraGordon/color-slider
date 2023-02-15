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
  console.log('inside', typeof rOut);
  return rOut;
});

g.addEventListener('change', () => {
  console.log('r', g.value);
  gOut = parseInt(g.value);
  console.log('inside', typeof gOut);
  return gOut;
});
b.addEventListener('change', () => {
  console.log('r', b.value);
  bOut = parseInt(b.value);
  console.log('inside', typeof bOut);
  return bOut;
});

console.log('body', body);

setInterval(() => {
  console.log('rOut', rOut);
  console.log('gOut', gOut);
  console.log('bOut', bOut);
  body.style.backgroundColor = 'rgb(' + rOut + ', ' + gOut + ', ' + bOut + ')';
}, 100);

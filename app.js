const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');

const rOut = document.querySelector('#r-out');
const gOut = document.querySelector('#g-out');
const bOut = document.querySelector('#b-out');

console.log('r', r.value);
console.log('g', g.value);
console.log('b', b.value);

console.log('r', rOut.value);
console.log('g', gOut.value);
console.log('b', bOut.value);

r.addEventListener('change', () => {
  console.log('r', r.value);
});

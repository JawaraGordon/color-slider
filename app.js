const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');

const rOut = document.querySelector('#r-out');
const gOut = document.querySelector('#g-out');
const bOut = document.querySelector('#b-out');

const hexOut = document.querySelector('#hex');

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
  setHexValue();
  setRbgColor();
  return rOutputNum;
});

g.addEventListener('change', () => {
  gOut.value = g.value;
  gOutputNum = parseInt(g.value);
  setHexValue();
  setRbgColor();
  return gOutputNum;
});

b.addEventListener('change', () => {
  bOut.value = b.value;
  bOutputNum = parseInt(b.value);
  setHexValue();
  setRbgColor();
  return bOutputNum;
});

const setRbgColor = () => {
  body.style.backgroundColor =
    'rgb(' + rOutputNum + ', ' + gOutputNum + ', ' + bOutputNum + ')';
};

const setHexValue = () => {
  rHex = rOutputNum.toString(16);
  gHex = gOutputNum.toString(16);
  bHex = bOutputNum.toString(16);
  console.log(rHex);
  console.log(gHex);
  console.log(bHex);
  hex = '#' + rHex + gHex + bHex;
  console.log(hex);
  hexOut.value = hex;
  console.log(hex.value);
};

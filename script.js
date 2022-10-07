'use strick';
// em, rem= 0.0625
const rem = 0.0625;
const em = 0.0625;
const percent = 6.25;
const point = 0.75;

const btn = document.querySelector('.btn');
const value = document.querySelector('.value');
const valueEm = document.querySelector('.value-em');
const valuePer = document.querySelector('.value-per');
const valuePoint = document.querySelector('.value-point');

const text = document.querySelector('.text').textContent;

// rem
const fvalue = function () {
  const result = Number(document.querySelector('.calc').value);
  const hasil = result * rem;
  const hasil2 = result * rem;
  const hasil3 = result * percent;
  const hasil4 = result * point;
  //   console.log(result, typeof result); // finish
  value.textContent = hasil;
  valueEm.textContent = hasil2;
  valuePer.textContent = hasil3;
  valuePoint.textContent = hasil4;
};

btn.addEventListener('click', fvalue);

// reset
const reset = function () {
  value.textContent = 0;
  valueEm.textContent = 0;
  valuePer.textContent = 0;
  valuePoint.textContent = 0;
};

document.querySelector('.rst').addEventListener('click', reset);

// enter key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    fvalue();
  }
});

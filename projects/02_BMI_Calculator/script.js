const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI = ${bmi}</span> <p>Underweight</p>`;
    } else if (bmi == 18.6 || bmi < 24.9) {
      results.innerHTML = `<span>BMI = ${bmi}</span> <p>Normal Range</p`;
    } else {
      results.innerHTML = `<span>BMI = ${bmi}</span> <p>Overweight</p`;
    }
  }
});

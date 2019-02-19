document.getElementById("input-submit").addEventListener("click", function (event) {
  event.preventDefault();
  const birthDate = moment(document.getElementById("dob-input").value);
  const maleButton = document.getElementById("male-button");
  const femaleButton = document.getElementById("female-button");
  const gender = maleButton.checked ? maleButton.value : femaleButton.value;
  console.log(birthDate);
  console.log(gender);

  const url = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/United%20States/${birthDate.format('YYYY-MM-DD')}/`;
  console.log(url);
  fetch(url)
      .then(function (response) {
        return response.json();
      }).then(function (json) {
    console.log(json);
    let results = ``;
    results += `<p>Life expectancy for a ${gender} born on ${birthDate.format('MMMM Do, YYYY')} in the United States: ${json.total_life_expectancy.toFixed(2)} years.</p>`;
    document.getElementById("results").innerHTML = results;
  });
});
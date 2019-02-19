document.getElementById("input-submit").addEventListener("click", function (event) {
  event.preventDefault();
  const birthDate = document.getElementById("dob-input").value;
  const maleButton = document.getElementById("male-button");
  const femaleButton = document.getElementById("female-button");
  const gender = maleButton.checked ? maleButton.value : femaleButton.value;
  console.log(birthDate);
  console.log(gender);

  const url = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/United%20States/${birthDate}/`;
  console.log(url);
  fetch(url)
      .then(function (response) {
        return response.json();
      }).then(function (json) {
    console.log(json);
  });
});
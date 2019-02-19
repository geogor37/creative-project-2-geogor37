document.getElementById("input-submit").addEventListener("click", function (event) {
  event.preventDefault();
  const birthDate = moment(document.getElementById("dob-input").value);
  const maleButton = document.getElementById("male-button");
  const femaleButton = document.getElementById("female-button");
  const gender = maleButton.checked ? maleButton.value : femaleButton.value;
  console.log(birthDate);
  console.log(gender);
  document.getElementById("results").innerHTML = `<p>Life expectancy for a ${ gender } born on ${ birthDate.format('MMMM Do, YYYY') }:</p>`;

  const usUrl = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/United%20States/${birthDate.format('YYYY-MM-DD')}/`;
  console.log(usUrl);
  fetch(usUrl)
      .then(function (response) {
        return response.json();
      }).then(function (usJson) {
    console.log(usJson);
    let usResults = ``;
    usResults += `<img src="/images/us_flag.svg" height="100">` +
        `<h2>United States</h2>` +
        `<p>${usJson.total_life_expectancy.toFixed(2)} years</p>`;
    document.getElementById("us-results").innerHTML = usResults;
  });

  const germanyUrl = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/Germany/${birthDate.format('YYYY-MM-DD')}/`;
  fetch(germanyUrl)
      .then(function (response) {
        return response.json();
      }).then(function (germanyJson) {
    console.log(germanyJson);
    let germanyResults = ``;
    germanyResults += `<img src="/images/germany_flag.svg" height="100">` +
        `<h2>Germany</h2>` +
        `<p>${germanyJson.total_life_expectancy.toFixed(2)} years</p>`;
    document.getElementById("germany-results").innerHTML = germanyResults;
  });

  const chinaUrl = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/China/${birthDate.format('YYYY-MM-DD')}/`;
  fetch(chinaUrl)
      .then(function (response) {
        return response.json();
      }).then(function (chinaUrl) {
    console.log(chinaUrl);
    let chinaResults = ``;
    chinaResults += `<img src="/images/china_flag.svg" height="100">` +
        `<h2>China</h2>` +
        `<p>${chinaUrl.total_life_expectancy.toFixed(2)} years</p>`;
    document.getElementById("china-results").innerHTML = chinaResults;
  });

  const peruUrl = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/Peru/${birthDate.format('YYYY-MM-DD')}/`;
  fetch(peruUrl)
      .then(function (response) {
        return response.json();
      }).then(function (peruJson) {
    console.log(peruJson);
    let peruResults = ``;
    peruResults += `<img src="/images/peru_flag.png" height="100">` +
        `<h2>Peru</h2>` +
        `<p>${peruJson.total_life_expectancy.toFixed(2)} years</p>`;
    document.getElementById("peru-results").innerHTML = peruResults;
  });

  const haitiUrl = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/Haiti/${birthDate.format('YYYY-MM-DD')}/`;
  fetch(haitiUrl)
      .then(function (response) {
        return response.json();
      }).then(function (haitiJson) {
    console.log(haitiJson);
    let usResults = ``;
    usResults += `<img src="/images/haiti_flag.png" height="100">` +
        `<h2>Haiti</h2>` +
        `<p>${haitiJson.total_life_expectancy.toFixed(2)} years</p>`;
    document.getElementById("haiti-results").innerHTML = usResults;
  });

  const ghanaUrl = `http://api.population.io:80/1.0/life-expectancy/total/${gender}/Ghana/${birthDate.format('YYYY-MM-DD')}/`;
  fetch(ghanaUrl)
      .then(function (response) {
        return response.json();
      }).then(function (ghanaJson) {
    console.log(ghanaJson);
    let ghanaResults = ``;
    ghanaResults += `<img src="/images/ghana_flag.png" height="100">` +
        `<h2>Ghana</h2>` +
        `<p>${ghanaJson.total_life_expectancy.toFixed(2)} years</p>`;
    document.getElementById("ghana-results").innerHTML = ghanaResults;
  });
});
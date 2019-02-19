document.getElementById("input-submit").addEventListener("click", function (event) {
  event.preventDefault();
  const birthDate = document.getElementById("dob-input").value;
  const maleButton = document.getElementById("male-button");
  const femaleButton = document.getElementById("female-button");
  const gender = maleButton.checked ? maleButton.value : femaleButton.value;
  console.log(birthDate);
  console.log(gender);
});
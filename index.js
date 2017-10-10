$("#gameon").submit(function(event) {
  event.preventDefault();

  function generateNumber() {
    return Math.floor(Math.random() * 10);
  }

  const computerNumber = generateNumber();
  console.log("random : " + computerNumber);

  console.log($("#gameon-input")[0].value);
  var userG = document.getElementById("gameon-input").value;

  computerNumber === parseInt(userG)
    ? (result1 = "Correct! ")
    : (result1 = "Wrong!");

  /*if (computerNumber === parseInt(userG)) {
    result1 = "Correct";
  } else {
    result1 = "Wrong";
  }*/

  console.log(result1);

  var random = document.getElementById("angka");
  random.innerHTML =
    "user number : " + userG + " | correct number : " + computerNumber;

  var myResult = document.getElementById("result");
  myResult.innerHTML = result1;
});

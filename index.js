function rollDice() {
  var double1 = document.getElementById("double1");
  var double2 = document.getElementById("double2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  double1.innerHTML = d1;
  double2.innerHTML = d2;
  status.innerHTML = "You rolled " + diceTotal + ".";
  if (d1 == d2) {
    status.innerHTML += " DOUBLES! You get a free turn!!";
  }
}

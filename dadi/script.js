function dice() {
   return Math.floor(Math.random() * 6) + 1;
}

var computer = dice();
console.log("Computer ", computer);
var user = dice();
console.log("User ", user);

if (user > computer) {
   alert("The winner is: USER");
} else if (user < computer) {
   alert("The winner is: COMPUTER");
} else {
   alert("Noone won!");
}

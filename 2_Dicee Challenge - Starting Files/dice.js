var randomNo1 = Math.floor(Math.random()*6) + 1;
var randomNo2 = Math.floor(Math.random()*6) + 1;

var j, k;
for (let i = 1; i <= 6 ; i++) {
    if (i == randomNo1) {
        document.querySelector(".img1").setAttribute("src", "images/dice"+i+".png");
        j = i;
    }
    if (i == randomNo2) {
        document.querySelector(".img2").setAttribute("src", "images/dice"+i+".png");
        k = i;
    }
}

if (j < k) {
    document.querySelector("h1").textContent = "Player 2 Wins! ✌️";
}
else if (j == k) {
    document.querySelector("h1").textContent = "Match Draw! 😑";
}
else {
    document.querySelector("h1").textContent = "🥂 Player 1 Wins!";
}
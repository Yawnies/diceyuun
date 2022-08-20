/*

needs to be done:

1. disable button while animation is rolling //done!!
2. change duchy heading to something else every 5 secs (for loops?) with a smooth transition //done!!
3. add more decoration on the sides. //done!!
4. favicon //done!!

*/

let randomNumber1 = 0;
let randomNumber2 = 0;
let buttonDisabler = 0; // 0 = enabled 1 = disabled

document.querySelector(".winner-text").classList.toggle("invisible");
document.getElementById("rollbutton").onclick = mathRand;
setInterval(textSwap, 6000);

function mathRand() {
  buttonDisabler = 1;
  disableButton();
  document.querySelector(".winner-text").innerHTML = "winner?";
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice-img1").setAttribute("src", `images/dice${randomNumber1}.svg`);
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice-img2").setAttribute("src", `images/dice${randomNumber2}.svg`);
  addAnimation();
  setTimeout(removeAnimation, 1000);
  removeClass();

  setTimeout(changeWinner, 1500);
}

function removeClass() {
  document.querySelector(".winner-text").classList.remove("invisible");
}

function removeAnimation() {
  document.querySelector(".dice-img1").classList.remove("dice-animation");
  document.querySelector(".dice-img2").classList.remove("dice-animation");
}

function addAnimation() {
  document.querySelector(".dice-img1").classList.add("dice-animation");
  document.querySelector(".dice-img2").classList.add("dice-animation");
}

function changeWinner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner-text").innerHTML = "P1 <span class='win-colors1'>wins.</span>";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner-text").innerHTML = "P2 <span class='win-colors1'>wins.</span>";
  } else {
    document.querySelector(".winner-text").innerHTML = "<span class='win-colors2'>draw.</span>";
  }
  buttonDisabler = 0;
  disableButton();
}

function textSwap() {
  // document.querySelector(".dynamic-text").classList.remove("fadeIn");
  // document.querySelector(".dynamic-text").classList.add("fadeOut");
  let changeText = Math.floor(Math.random() * 5);
  document.querySelector(".dynamic-text").textContent = textArr[changeText];
  // document.querySelector(".dynamic-text").classList.remove("fadeOut");
  // document.querySelector(".dynamic-text").classList.add("fadeIn");
}

function disableButton() {
  if (buttonDisabler === 1) {
    document.getElementById("rollbutton").disabled = true;
    document.getElementById("rollbutton").style.cursor = "default";
  } else {
    document.getElementById("rollbutton").disabled = false;
    document.getElementById("rollbutton").style.cursor = "pointer";
  }
}


// array

const textArr = ["duchy of illustria's finest addition.", "is this on? hello?", "phlog is the best pyro weapon.", "place bets on dice rolls!", "welcome to the royal-roller."]

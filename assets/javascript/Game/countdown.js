let input
let countdown
let timeOut

$("#playGame").click(function drippingTap(time) {
  if (countdown) {
    clearInterval(countdown)
  }
  $("#countdown-timer").text("30 seconds")
  input = time = 30
  console.log(`First Click: Remaining Time: ${input} ${input===1 || input===0 ? "second" : "seconds"}`)
  countdown = setInterval(dropper, 1000)
  timeOut = setTimeout(turnOffTap, time * 1000)

  $("#playGame").text("Restart")
});

const dropper = () => {
  input--
  $("#countdown-timer").text(` ${input} ${input===1 || input===0 ? "second" : "seconds"}`)
  console.log(`Remaining Time: ${input} ${input===1 || input===0 ? "second" : "seconds"}`)
  if (input === 0) {
    clearInterval(countdown)
  }
};

const turnOffTap = () => {
  console.log("Alert: Time's up!");
  alert("Time's up!")
};
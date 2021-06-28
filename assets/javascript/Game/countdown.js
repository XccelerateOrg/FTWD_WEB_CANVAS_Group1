let input
let countdown
let timeOut

$("#playGame").click(function drippingTap (time) {
    // CODE HERE
    input = time = 30
    console.log(`Remaining Time: ${input} ${input===1 || input===0 ? "second" : "seconds"} left.`)
    countdown = setInterval(dropper,1000)
    timeOut = setTimeout(turnOffTap,time*1000)
  });

  const dropper = () => {
    // CODE HERE
    input--
    console.log(`Remaining Time: ${input} ${input===1 || input===0 ? "second" : "seconds"} left.`)
    if(input===0){
      clearInterval(countdown)
    }
  };
  
  const turnOffTap = () => {
    // CODE HERE
    console.log("Alert: Time's up!");
    alert("Time's up!")
  };


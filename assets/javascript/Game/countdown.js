let input
let countdown
let timeOut

$("#playGame").click(function drippingTap (time) {
    input = time = 30
    
    console.log(`Remaining Time: ${input} ${input===1 || input===0 ? "second" : "seconds"} left.`)
    countdown = setInterval(dropper,1000)
    timeOut = setTimeout(turnOffTap,time*1000)
  });

  const dropper = () => {
    input--
    console.log(`Remaining Time: ${input} ${input===1 || input===0 ? "second" : "seconds"} left.`)
    if(input===0){
      clearInterval(countdown)
    }
  };
  
  const turnOffTap = () => {
    console.log("Alert: Time's up!");
    alert("Time's up!")
  };


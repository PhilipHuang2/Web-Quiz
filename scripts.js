var button = document.querySelector("#start");
var timeTitle = document.createElement("h2");
var timer = document.createElement("h2");
var timeLeft = 60;
timeTitle.textContent = "Time Remaining:"
timer.textContent = timeLeft;

// When I click the button, delete the start button
// and add 2 h2 tags, and start counting down
button.addEventListener("click",function(){    
    console.log("testing button");
    
    document.querySelector("main").prepend(timer);
    document.querySelector("main").prepend(timeTitle);
    startTime();
    button.parentElement.remove();
});

// creates a timer that counts down until 0
function startTime() {
    var timeInterval = setInterval(function() {
        timeLeft = timeLeft -1;
        console.log(timer);
        console.log(timeLeft);
        if(timeLeft > 0)
            timer.textContent = timeLeft.toString();
        else
        {
            clock.textContent = "";
            clearInterval(timeInterval);
        }
    },1000);

}


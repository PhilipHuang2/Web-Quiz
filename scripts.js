var button = document.querySelector("#start");
var clock = document.querySelector('#clock');

button.addEventListener("click",function(){
    
    console.log("testing button");
    startTime();
    button.parentElement.remove();
});

function startTime() {
    var time  = 61;

    var timeInterval = setInterval(function() {
        time = time - 1;
        if(time > 0)
            clock.textContent = time;
        else
        {
            clock.textContent = "";
            clearInterval(timeInterval);
        }
    },1000);

}


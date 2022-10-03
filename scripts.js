var button = document.querySelector("#start");
var timeTitle = document.createElement("h2");
var timer = document.createElement("h2");
var questionTitle = document.querySelector(".question");
var answerList = document.querySelector(".answers");
var timeLeft = 60;
timeTitle.textContent = "Time Remaining:"
timer.textContent = timeLeft;

var question = { title: "Which of these languages is not commonly used in web development?",
    answers: ["CSS", "Javascript", "HTML", "Scratch"],
    trueAnswer: 3
}

// When I click the button, delete the start button
// and add 2 h2 tags, and start counting down
button.addEventListener("click",function(){    
    document.querySelector("main").prepend(timer);
    document.querySelector("main").prepend(timeTitle);
    startTime();
    button.parentElement.remove();
    populateQuestion(question);
});

// creates a timer that counts down until 0
function startTime() {
    var timeInterval = setInterval(function() {
        timeLeft = timeLeft -1;
        if(timeLeft > 0)
            timer.textContent = timeLeft.toString();
        else
        {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
    },1000);

}

//Set the question block to block (ie. not none)
// and populate list
function populateQuestion(newQuestion) {
    // reveal the question and answer sections
    questionTitle.style.display = "block";
    answerList.style.display = "block";
    questionTitle.textContent = newQuestion.title;
    var buttonList = answerList.children[0];

    //variable to hold the current li item for better readability
    var dummyLi;
    //iterate through each li, and place textContent in the button inside li
    for(var i = 0; i < buttonList.children.length; i++)
    {
        dummyLi = buttonList.children[i];
        console.log(dummyLi);
        dummyLi.children[0].textContent = newQuestion.answers[i];
        if(newQuestion.trueAnswer == i)
            dummyLi.setAttribute("data-answer",true);
        else
            dummyLi.setAttribute('data-answer',false);
    }
    


    


}


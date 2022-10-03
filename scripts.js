var button = document.querySelector("#start");
var timeTitle = document.createElement("h2");
var timer = document.createElement("h2");
var questionTitle = document.querySelector(".question");
var answerList = document.querySelector(".answers");
var timeLeft = 60;
timeTitle.textContent = "Time Remaining:"
timer.textContent = timeLeft;


// for each button, an event listener listen, if the data says
// the answer is correct we do nothing.
// otherwise we decrement the timer by 10
var answerButtons = document.querySelectorAll("li");
answerButtons.forEach(choice => {
    choice.addEventListener('click', function() {
        if(choice.getAttribute("data-answer") != "true")
            timeLeft = timeLeft - 10;
        populateQuestion(question2);
    })
});


var question = { title: "Which of these languages is not commonly used in web development?",
    answers: ["CSS", "Javascript", "HTML", "Scratch"],
    trueAnswer: 3
}

var question2 = {
    title: "Which of these element tags is not a semantic tag?",
    answers: [ "div", "body", "header", "nav"],
    trueAnswer: 0
}

var question3 = {
    title: "Where in the HTML document is should the Javascript be placed.",
    answers: ["The Top of the body", "Outside the of the Body", "The bottom of the body", "In the head"],
    trueAnswer: 2
}

var questionLog = [question, question2, question3];
console.log(questionLog);




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
        // console.log(dummyLi);
        dummyLi.children[0].textContent = newQuestion.answers[i];
        // set data-answer = true for the right answer.
        if(newQuestion.trueAnswer == i)
            dummyLi.setAttribute("data-answer",true);
        else
            dummyLi.setAttribute('data-answer',false);
    }
}


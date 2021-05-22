var questions = [{
    question: "JSON name/value pair is written as",
    choices: [" name’ : ‘value’" , "name = ‘value’" , "name = “value”" , "“name” : “value”" ],
    correctAnswer: 3
},  {
    question: "JSON strings have to be in",
    choices: ["single quote" , "double quote" , "single quote or double quote" , "None of these" ],
    correctAnswer: 1
},  {
    question: "Which of the following is not a JSON type?",
    choices: [" Object" , "date" , " Array" , " string" ],
    correctAnswer: 1
},   {
    question: "Which of these is correct about the JSON standard?",
    choices: [" It is an open standard" , "It is privately developed" , "It requires a license to use" , "None of these" ],
    correctAnswer: 0
},   {
    question: "What is the file extension of JSON?",
    choices: [".jn" , ".js" , ".jsn" , ".json" ],
    correctAnswer: 3
},   {
    question: " In modern websites what is the common usage for JSON?",
    choices: ["To store information remotely." , "To send and receive bits of data" , "To store information locally." , "None of these" ],
    correctAnswer: 1
},   {
    question: " In modern websites what is the common usage for JSON?",
    choices: ["To store information remotely" , "To send and receive bits of data." , " To store information locally" , "None of these" ],
    correctAnswer: 3
},  {
    question: "JSON elements are separated by",
    choices: ["semi-colon" , "line break" , "comma" , "white space" ],
    correctAnswer: 2
},  {
    question: "What keywords are reserved in JSON and cannot be used as keys?",
    choices: ["Value" , "Object" , "There are none." , "Key" ],
    correctAnswer: 3
},  {
    question: "Which of these data interchange formats has seen a decline in usage in favor of JSON?",
    choices: [" ASCII" , "Plain-text" , "SQL" , "XML" ],
    correctAnswer: 3
}]

var currentQuestion = 0 ;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function() {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on('click' , function(){
        if(!quizOver){
            value = $("input[type='radio']:checked").val() ;
            console.log(value);
            if(value == undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    currentQuestion++ ;
                    correctAnswer++;
                }
                currentQuestion++ ;
                if(currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true ;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }

    });
});

function displayCurrentQuestion(){
    console.log("This is the current question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);
    $(choiceList).find("li").remove();

    var choice;
    for(i = 0 ; i< numChoices ; i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value='+i+' name="dynamicRadio" />'+ choice + '</li>').appendTo(choiceList);
    }
}
function resetQuiz(){
    currentQuestion = 0;
    correctAnswer = 0;
    hideScore();
}

function displayScore(){
    $(document).find(".quizContainer > .result").text("your score is " + correctAnswer + " out of" + questions.length) ;
    $(document).find(".quizContainer > .result").show();
}    

function hideScore(){
    $(document).find(".result").hide();
}

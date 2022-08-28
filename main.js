var questionsArray = [];
var answersArray = [];
var countMainObj = 0;
var addObj = {};
var headline = '';
var question = '';
var correctAnswer = '';

function openPage(url) {
    document.location.href = url;
}

function addQuestion() {
    questionsArray = JSON.parse(localStorage.getItem("questionsArray")) || [];
    answersArray = JSON.parse(localStorage.getItem("answersArray")) || [];
    headline = document.getElementById('headlineFieldInput');
    let question = document.getElementById('questionFieldInput');
    let correctAnswer = document.getElementById('correctAnswerFieldInput');
    if (headline.value != '' && question.value != '' && correctAnswer.value != ''){
        questionsArray.push(question.value);
        answersArray.push(correctAnswer.value);
        // Storing arrays
        let questionsArray_serialized = JSON.stringify(questionsArray);
        let answersArray_serialized = JSON.stringify(answersArray);
        localStorage.setItem("questionsArray", questionsArray_serialized);
        localStorage.setItem("answersArray", answersArray_serialized);
        console.log(questionsArray);
        console.log(answersArray);
    }
}

function addSet(){
    console.log("Initializing protocol 'Finish study set'. This message will self-destruct in five seconds (disclaimer: it won't).");
    questionsArray = JSON.parse(localStorage.getItem("questionsArray")) || [];
    answersArray = JSON.parse(localStorage.getItem("answersArray")) || [];
    if (questionsArray != [] && answersArray != []){
        addObj = {'questions': questionsArray, 'correctAnswers': answersArray};
        console.log(addObj);
        console.log(addObj['questions'])
        mainObj = JSON.parse(localStorage.getItem("mainObj")) || {};
        for (i in mainObj) {
            if (mainObj.hasOwnProperty(i)) {
                countMainObj += 1;
            }
        }
        let mainIdNumber = String(countMainObj);
        mainObj['setId' + mainIdNumber] = {'headline': headline.value, addObj};
        //Saving mainObj in local storage
        let mainObj_serialized = JSON.stringify(mainObj);
        localStorage.setItem("mainObj", mainObj_serialized);
        console.log('mainObj');
        console.log(localStorage.getItem("mainObj"));
        // Reset arrays
        questionsArray_serialized = JSON.stringify([]);
        answersArray_serialized = JSON.stringify([]);
        localStorage.setItem("questionsArray", questionsArray_serialized);
        localStorage.setItem("answersArray", answersArray_serialized);
    }
}

function resetStorage() {
    console.log(localStorage.getItem("mainObj"));
    mainObj = {};
    mainObj_serialized = JSON.stringify(mainObj);
    localStorage.setItem("mainObj", mainObj_serialized);
    console.log(localStorage.getItem("mainObj"));

    questionsArray_serialized = JSON.stringify([]);
    answersArray_serialized = JSON.stringify([]);
    localStorage.setItem("questionsArray", questionsArray_serialized);
    localStorage.setItem("answersArray", answersArray_serialized);
    questionsArray = JSON.parse(localStorage.getItem("questionsArray")) || [];
    answersArray = JSON.parse(localStorage.getItem("answersArray")) || [];
    console.log(questionsArray);
    console.log(answersArray);
}
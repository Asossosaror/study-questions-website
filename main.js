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
    if (questionsArray.length < 1){
        localStorage.setItem("headline", headline.value);
    }
    headline = localStorage.getItem("headline");
    let question = document.getElementById('questionFieldInput');
    let correctAnswer = document.getElementById('correctAnswerFieldInput');
    if (headline != '' && question.value != '' && correctAnswer.value != ''){
        document.getElementById("headlineHeadline").style.display = 'none';
        document.getElementById("headlineFieldInput").style.display = 'none';
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
    headline = localStorage.getItem("headline");
    subject = localStorage.getItem("subject");
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
        mainObj['setId' + mainIdNumber] = {'subject': subject, 'headline': headline, 'qaPairs': addObj};
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
        // Reset headline
        localStorage.setItem("headline", '');
        // Make headline field reappear.
        document.getElementById("headlineHeadline").style.display = 'block';
        document.getElementById("headlineFieldInput").style.display = 'block';
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

    localStorage.setItem("headline", '');
    // Make headline field reappear
    document.getElementById("headlineHeadline").style.display = 'block';
    document.getElementById("headlineFieldInput").style.display = 'block';
}

function showDropdown(dropdownNumber){
    if (dropdownNumber == 1) {
        document.getElementById("dropdown1").classList.toggle('active');
    }
    if (dropdownNumber == 2) {
        document.getElementById("dropdown2").classList.toggle('active');
    }
}

let subject;

function chooseSubject(a) {
    document.getElementById("dropdownButton").value = a;
    subject = a;
    console.log(subject);
    // Save subject variable.
    localStorage.setItem("subject", subject);
    console.log(localStorage.getItem("subject"));
}

function whatSubject()

window.addEventListener('click', (thing) => {
    if (thing.target.classList.contains('link') == false && thing.target.classList.contains('dropdown-head') == false) {
        document.getElementById("dropdown1").classList.remove('active');
        document.getElementById("dropdown2").classList.remove('active');
    }
})
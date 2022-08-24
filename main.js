var countFinishedAddObj = 0;
var countMainObj = 0;
var finishedAddObj = {};
var headline = '';

function openPage(url) {
    document.location.href = url;
}

function addQuestion() {
    countFinishedAddObj += 1;
    console.log(countFinishedAddObj);
    let headline = document.getElementById('headlineFieldInput');
    let question = document.getElementById('questionFieldInput');
    let correctAnswer = document.getElementById('correctAnswerFieldInput');
    let addObj = {'question': question.value, 'correctAnswer': correctAnswer.value};
    let idNumber = String(countFinishedAddObj);
    finishedAddObj['exerciseId' + idNumber] = addObj;
    console.log("FinishedAddObj");
    console.log(finishedAddObj);
    console.log(finishedAddObj['exerciseId1']);
}

function addSet(){
    console.log("Initializing protocol 'Finish study set'");
    mainObj = JSON.parse(localStorage.getItem("mainObj")) || {};
    for (i in mainObj) {
        if (mainObj.hasOwnProperty(i)) {
            countMainObj += 1;
        }
    }
    let mainIdNumber = String(countMainObj + 1);
    mainObj['setId' + mainIdNumber] = {'headline': headline.value, finishedAddObj};
    //Saving mainObj in local storage
    let mainObj_serialized = JSON.stringify(mainObj);
    localStorage.setItem("mainObj", mainObj_serialized);
    console.log('mainObj');
    console.log(localStorage.getItem("mainObj"));
}

function resetStorage() {
    console.log(localStorage.getItem("mainObj"));
    mainObj = {};
    mainObj_serialized = JSON.stringify(mainObj);
    localStorage.setItem("mainObj", mainObj_serialized);
    console.log(localStorage.getItem("mainObj"));

}
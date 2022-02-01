console.log(moment());
/////////////////////Time Update/////////////////////
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
/////////////////////Time Update/////////////////////




// var descriptionBox = document.querySelector(".row");
// var savBtn = document.querySelector(".saveBtn");
// var txtboxdiv = document.querySelector("#hour");
// var description = document.querySelector(".col-md-10")

// renderLastRegistered();

// function displayMessage(type, message) {
//     txtboxdiv.textContent = message;
//     // txtboxdiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//     $(".description").each((index, value) => {
//         console.log(value)
//         var textVal = value.id.split("-")[0] + value.id.split("-")[1]
//         var textValLocal = localStorage.getItem(textVal);
//         console.log(textValLocal)
//         console.log(textVal)
//         value.textContent = textValLocal

//     })

//     //    if (!textarea === "") {
//     //        return;
//     //    }

// }




// $(".saveBtn").on("click", function (event) {
//     console.log(event)
//     console.log($(this).siblings(".description").val())
//     var textarea = $(this).siblings(".description").val()
//     var textKey = $(this).attr("id").split("-")[0] + $(this).attr("id").split("-")[1]
//     // var textarea= document.querySelector(".container").value;

//     if (textarea === "") {
//         displayMessage("Area cannot be blank");
//     }
//     localStorage.setItem(textKey, textarea);
//     renderLastRegistered();
// });



//added to keep track of the current hour of the day so that it updates the color of the textareas
var currentTime = moment().format("HH");
console.log(currentTime);

// Added a function that will update the color of the text area based on the hour of the day by adding present, past or future to the text area
$("textarea").each(function(){
    var textBlockTime = $(this).attr("data");
    if(currentTime == textBlockTime){
        $(this).addClass("present");
    }
    if(currentTime > textBlockTime){
        $(this).addClass("past");
    }
    if(currentTime < textBlockTime){
        $(this).addClass("future");
    }
});

// Function for saving event on click for 9am
$("#9-am-btn").on("click", function(){
    var event = $("#9-am-event").val();
    localStorage.setItem("9 am event", event);
});
    // Setting text to what was saved in local storage
$("#9-am-event").text(localStorage.getItem("9 am event"));

// 10 am save event
$("#10-am-btn").on("click", function(){
    var event = $("#10-am-event").val();
    localStorage.setItem("10 am event", event);
});
$("#10-am-event").text(localStorage.getItem("10 am event"));

// 11 am
$("#11-am-btn").on("click", function(){
    var event = $("#11-am-event").val();
    localStorage.setItem("11 am event", event);
});
$("#11-am-event").text(localStorage.getItem("11 am event"));

// 12 pm
$("#12-pm-btn").on("click", function(){
    var event = $("#12-pm-event").val();
    localStorage.setItem("12 pm event", event);
});
$("#12-pm-event").text(localStorage.getItem("12 pm event"));

// 1 pm
$("#1-pm-btn").on("click", function(){
    var event = $("#1-pm-event").val();
    localStorage.setItem("1 pm event", event);
});
$("#1-pm-event").text(localStorage.getItem("1 pm event"));

// 2 pm
$("#2-pm-btn").on("click", function(){
    var event = $("#2-pm-event").val();
    localStorage.setItem("2 pm event", event);
});
$("#2-pm-event").text(localStorage.getItem("2 pm event"));

// 3 pm
$("#3-pm-btn").on("click", function(){
    var event = $("#3-pm-event").val();
    localStorage.setItem("3 pm event", event);
});
$("#3-pm-event").text(localStorage.getItem("3 pm event"));

// 4 pm
$("#4-pm-btn").on("click", function(){
    var event = $("#4-pm-event").val();
    localStorage.setItem("4 pm event", event);
});
$("#4-pm-event").text(localStorage.getItem("4 pm event"));

// 5 pm
$("#5-pm-btn").on("click", function(){
    var event = $("#5-pm-event").val();
    localStorage.setItem("5 pm event", event);
});
$("#5-pm-event").text(localStorage.getItem("5 pm event"));
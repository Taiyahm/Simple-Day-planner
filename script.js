var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY"));

var saveBtn = $(".saveBtn")

var textArea1 = $("#input1");
var textArea2 = $("#input2");
var textArea3 = $("#input3");
var textArea4 = $("#input4");
var textArea5 = $("#input5");
var textArea6 = $("#input6");
var textArea7 = $("#input7");
var textArea8 = $("#input2");
var textArea9 = $("#input2");
var textArea10 = $("#input10");

saveInput1.addEventListener("click", stored1);
saveInput2.addEventListener("click", stored2);
saveInput3.addEventListener("click", stored3);
saveInput4.addEventListener("click", stored4);
saveInput5.addEventListener("click", stored5);
saveInput6.addEventListener("click", stored6);
saveInput7.addEventListener("click", stored7);
saveInput8.addEventListener("click", stored8);
saveInput9.addEventListener("click", stored9);
saveInput10.addEventListener("click",stored10);


textArea1.value = localStorage.getItem("plan1");
textArea2.value = localStorage.getItem("plan2");
textArea3.value = localStorage.getItem("plan3");
textArea4.value = localStorage.getItem("plan4");
textArea5.value = localStorage.getItem("plan5");
textArea6.value = localStorage.getItem("plan6");
textArea7.value = localStorage.getItem("plan7");
textArea8.value = localStorage.getItem("plan8");
textArea9.value = localStorage.getItem("plan9");
textArea10.value = localStorage.getItem("plan10");


function stored1() {
    localStorage.setItem("plan1", textArea1.value)
}

function stored2() {
    localStorage.setItem("plan2", textArea2.value)
}

function stored3() {
    localStorage.setItem("plan3", textArea3.value)
}

function stored4() {
    localStorage.setItem("plan4", textArea4.value)
}

function stored5() {
    localStorage.setItem("plan5", textArea5.value)
}

function stored6() {
    localStorage.setItem("plan6", textArea6.value)
}

function stored7() {
    localStorage.setItem("plan7", textArea7.value)
}

function stored8() {
    localStorage.setItem("plan8", textArea8.value)
}

function stored9() {
    localStorage.setItem("plan9", textArea9.value)
}

function stored10() {
    localStorage.setItem("plan10", textArea10.value)
}


var current = new Date().getHours();

if (current < 8 ) {
    $("#input1").addClass("past");
}  else if (current >= 8 || current < 9) {
    $("#input1").addClass("present");
} else if (current > 8) {
    $("#input1").addClass("future")
}

if (current < 9 ) {
    $("#input2").addClass("past");
}  else if (current >= 9 || current < 10) {
    $("input2").addClass("present");
} else if (current > 9) {
    $("#input2").addClass("future")
}

if (current < 10 ) {
    $("#input3").addClass("past");
}  else if (current >= 10 || current < 11) {
    $("input3").addClass("present");
} else if (current > 10) {
    $("#input3").addClass("future")
}

if (current < 11 ) {
    $("#input4").addClass("past");
}  else if (current >= 11 || current < 12) {
    $("input4").addClass("present");
} else if (current > 11) {
    $("#input4").addClass("future")
}

if (current < 12 ) {
    $("#input5").addClass("past");
}  else if (current >= 12 || current < 13) {
    $("input5").addClass("present");
} else if (current > 12) {
    $("#input5").addClass("future")
}


if (current < 13 ) {
    $("#input6").addClass("past");
}  else if (current >= 13 || current < 14) {
    $("input6").addClass("present");
} else if (current > 13) {
    $("#input6").addClass("future")
}


if (current < 14 ) {
    $("#input7").addClass("past");
}  else if (current >= 14 || current < 15) {
    $("input7").addClass("present");
} else if (current > 14) {
    $("#input7").addClass("future")
}

if (current > 15 ) {
    $("#input8").addClass("past");
}  else if (current >= 15 || current < 16) {
    $("input8").addClass("present");
} else if (current < 15) {
    $("#input8").addClass("future")
}

if (current > 16 ) {
    $("#input9").addClass("past");
}  else if (current >= 16 || current < 17) {
    $("input9").addClass("present");
} else if (current < 16) {
    $("#input9").addClass("future")
}

if (current > 17 ) {
    $("#input10").addClass("past");
}  else if (current >= 17 || current < 18) {
    $("input10").addClass("present");
} else if (current < 17) {
    $("#input10").addClass("future")
}





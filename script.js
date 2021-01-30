var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY"));

colorCode();


var setColor = setInterval(colorCode,10000); 


for( i=0; i < localStorage.length; i++ ) {
    $("#"+localStorage.key(i)+" .description").val(localStorage.getItem(localStorage.key(i)));
}


function colorCode(){
    var currentTime= moment().hours();

    for( i = 9; i < ($(".time-block").length + 9) ; i++ ) {

        var color = $("#hour-"+i).children(".description")
        
        color.removeClass("past");
        color.removeClass("present");
        color.removeClass("future");

        if (currentTime == i) {
            color.addClass("present");
        } else if (currentTime > i) {
            color.addClass("past");
        } else {
            color.addClass("future");
        }

    }

}

$(".saveBtn").on("click", function() {
    var input = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour,input);
});
 //current day ID is on html

var currentDay = moment().format("ddd, MMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);






// local storage mockup
//assign ids to containers


//localstorage function has errors

$(function () {      
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        localStorage.setItem(time, text);
    })

})


$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


//mockup local storage jquery
// $localStorage.getItem("10");
// $localStorage.getItem("11");
// $localStorage.getItem("12");
// $localStorage.getItem("13");
// $localStorage.getItem("14");
// $localStorage.getItem("15");
// $localStorage.getItem("16");
// $localStorage.getItem("17");
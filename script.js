 //current day ID is on html

var currentDay = moment().format("ddd, MMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);




// local storage mockup
//assign ids to containers
$(function () {      
    $(".saveBtn").on("click", function () {

        var time = $(this).("id");
        var hour = $(this).(".description");
        localStorage.setItem(time, hour);
    })

})


$localStorage.getItem("9");
$localStorage.getItem("10");
$localStorage.getItem("11");
$localStorage.getItem("12");
$localStorage.getItem("13");
$localStorage.getItem("14");
$localStorage.getItem("15");
$localStorage.getItem("16");
$localStorage.getItem("17");
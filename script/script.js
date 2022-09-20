//  moment.js is added and formatted to display the date in current time
var currentDay = moment().format("ddd, MMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);




// local storage is added with jQuery functions
$(function () {      
    // when the save button is clicked on the live page, it is stored to local storage and not erased after refreshing the page
    $(".saveBtn").on("click", function () {
        // jQuery parent selector is attached to the id tag in html
        var time = $(this).parent().attr("id");
        // siblings selector added to obtain text in local storage
        var text = $(this).siblings(".description").val();

        localStorage.setItem(time, text);
    })

})

// getitem method will return the value from each column
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



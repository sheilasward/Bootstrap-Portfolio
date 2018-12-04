console.log("It works.");
$(document).ready(function () {
  $(".submit").click(function(event) {
    console.log("Clicked button");
    var name = $("#fullName").val();
    var email = $("#Email").val();
    var subject = $("#Subject").val();
    var message = $("#Message").val();
    var statusMsg = $(".status");
    statusMsg.empty();

    if (name.length > 4 && name.includes(" ")) {
        console.log("Name is valid");
    } else {
        event.preventDefault();
        statusMsg.append("<div>Name is not valid</div>");
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
        console.log("Email is valid");
    } else {
        event.preventDefault();
        statusMsg.append("<div>Email is not valid</div>");
    }

    if (message.length > 10) {
        console.log("Message is valid");
    } else {
        event.preventDefault();
        statusMsg.append("<div>Message is not valid</div>");
    }
  });  
});
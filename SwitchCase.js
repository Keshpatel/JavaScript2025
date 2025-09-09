function verifyApplicationStatus(appStatus) {

    let messageValue;

    switch(appStatus) {
        case "Submitted":
           messageValue = console.log("Your Application is in "+appStatus + "Status , Wait for new update in 5 business day...");
           break;
        case "Review":
           messageValue = console.log("Application is in "+appStatus+ " All information is in Under Review state");
           break;
        case "Approved":
           messageValue = console.log("Application is in "+appStatus+ " All Information is Approved");
           break;
        case "Cancelled":
           messageValue = console.log("Application is in "+appStatus+ " one or more info is invalid , see highted in red feild .... ");
           break;
        default :
           messageValue = console.log("Default message for your application status request ");
           break;

    }
   return messageValue;

}

verifyApplicationStatus("Review");
verifyApplicationStatus("Approved");
verifyApplicationStatus("Under Review");


let loginTo = "AdminNew";
switch(loginTo) {
   case "OS1":
      console.log("Login to OS1");
      break;
   case "OS2":
      console.log("Login to OS2");
      break;
   case "AdminNew":
      console.log("Login to Admin ");
      break
   default:
      console.log("Invalid login option");
      break;
}
   

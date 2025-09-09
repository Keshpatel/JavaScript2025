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

verifyApplicationStatus("Approved");
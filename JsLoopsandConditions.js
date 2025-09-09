 function verifyLandUserInfo(provinceName) {
    if(provinceName == "Alberta") {
        console.log(provinceName + " : land user valid for provicial land user allows");
    } else {
        console.log(provinceName + ": Invalid Land User... Constact land user info/valid... ");
    } 
}

verifyLandUserInfo("Alberta");
verifyLandUserInfo("British columbia");
verifyLandUserInfo("Saskatchewan");


function verifyApplicationApprovalBusinessDays(approvaldays) 
{
    if(approvaldays >= 1 && approvaldays <= 10)
    {  
        if(approvaldays <= 5) {
        
           console.log(approvaldays + ": Correct number of approval days to approve");
        } else {
           if(approvaldays == 1) {
          
            console.log("application Review completed successfully in 24hr , Auto approval basics ");
           } else {
            console.log("Application review will complete with in 10 business days ");
           }
        }
    }
    else {
        console.log(approvaldays + ": Invalid Valid total business days to approve application is 5 days");
    }
}


verifyApplicationApprovalBusinessDays(0);
verifyApplicationApprovalBusinessDays(1);
verifyApplicationApprovalBusinessDays(5);
verifyApplicationApprovalBusinessDays(10);
console.log("Application Operations initialization....")
let appType = "New";
if(appType =="New") {
    console.log("Open New Master Tab-> New Application initiating...");
} else if(appType == "Update") {
    console.log("Modify exisiting Application, Enter Exisiting Application Id ");
} else if(appType =="Submit") {
    console.log("Submitting New OR Updated Application ");
} else {
    console.log("Enter valid Application operation.... ");
}
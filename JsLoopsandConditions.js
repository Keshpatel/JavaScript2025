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

//If...Else If...Else
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

//Loops
for(let i=1; i<=5; i++) {
    console.log("Application operation in progress..."+ i);
}

//For loop with Array
let landUsers = ["Alberta","British columbia","Saskatchewan","Manitoba","Ontario"];
for(let j=0; j<landUsers.length; j++) {
    console.log("Land user valid for provicial land user allows : "+ landUsers[j]);
}

//For Of loop
for(let landUser of landUsers) {
    console.log("Land user valid for provicial land user allows : "+ landUser);
}

//For..in  loop on Object:
console.log("For...Of with Object Example starts....");
const userDetails = {
    firstName: "Tom", 
    lastName: "Windsor", 
    age: 30, 
    city: "Calgary"
};
for(const detail in userDetails) {
    console.log(detail + ": " + userDetails[detail]);
}

//for.....Of with if condition
console.log("For...Of with If condition Example starts....");
const provinces = ["Alberta","British columbia","Saskatchewan","Manitoba","Ontario"];
for(let province of provinces) {
    if(province == "Alberta") {
        console.log(province + " : land user valid for provicial land user allows");
    } else {
        console.log(province + ": Invalid Land User... Constact land user info/valid... ");
    }
}

//for....Of with break statement
const LogintoOrgMain = ["OS1","OS2","AdminNew"];
for(const org of LogintoOrgMain) {
    if(org == "OS2") {
        console.log("Login to OS2");
        break;
   }
}

// While loop
let k=1;
while(k<=5) {
    console.log("Application operation in progress..."+ k);
    k++;  // Same as ++k or k = k + 1

}
//Do While loop
do {
    console.log("Application operation in progress..."+ k);
    k++;
} while(k<=5);
console.log("Application operation completed..."+ k);


//Login attampts with conditions

let loginAttempts = 2;
while(loginAttempts <= 4) {
    console.log("Login attampt 1: Please enter valid user name and password");
    if(loginAttempts == 3) {
    console.log("Login attampt 3: Please enter valid user name and password, last attampt");
    } else if(loginAttempts == 4) {
        console.log("Login attampt 4: Your account is locked, contact system admin");
        break;
    } else {  
        console.log("Login attampt 2: Please enter valid user name and password");
    }   
    loginAttempts++;

}






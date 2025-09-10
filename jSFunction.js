//delaring the function 
function login() {
    console.log("User logged in successfully");
    return true;
}
function logout() {
    console.log("User logged out successfully");
    return false;
}
login();
logout();

// Functions Expression:
const loginUser = function(user,password ) {
    console.log(user +"logged in successfully - with username and password");
    return true;
}
loginUser("Admin" , "Admin@123");

const totalCancelledApplication = function(a, c) {   
     return a*c;
}
const cancelledApp = totalCancelledApplication(5,3);
console.log("Total Cancelled Applications are : "+ cancelledApp);
const logoutUser = function() {
    console.log("User logged out successfully - from land application system");
    return false;
}

//Arrow function expression:
const totalapplicatinToProcess = (x, y)  =>  x+y;
const totalApp = totalapplicatinToProcess(100,150);
console.log("Total Applications to process : "+ totalApp);
    

//function Constructor: 
const userLogin = new Function('user', 'password',
    `console.log(user + " logged in successfully - with username and password - using function constructor");
    return true;`
);
userLogin("Editor","Editor@123");
const userLogout = new Function(

    `console.log("User logged out successfully - from land application system - using function constructor");
    return false;`
);
userLogout();


//IIFE - Immediately Invoked Function Expression
(function() {
    console.log("IIFE - User logged in successfully - from land application system");
})();       
(function(name) {
    console.log("IIFE - User "+ name +" logged in successfully - from land application system");
})("Super Admin");

// Function inside function:
function newApplication() {
    console.log("displaying new applications from admins");
    function landApplications(appCounts) {
          return "\n*****************New" +appCounts+ "land application form";
    }
    function waterApplication(appCounts) {
          return "\n*****************New" +appCounts+ "Water application form";
    }

    const landAdmin = landApplications(25);
    const waterAdmin = waterApplication(50);
    console.log("Land User Apps:" + landAdmin + ", Water Apps: " + waterAdmin);
    return {landAdmin, waterAdmin};
}

const newApp = newApplication();
console.log(newApp.landAdmin);
console.log(newApp.waterAdmin);

// Generator Function:
function* landUserRoles() {
    yield 'Admin';
    yield 'Editor';
    yield 'Viewer';
    yield 'Super Admin';
    yield 'Auditor';
}
const roles = landUserRoles();
console.log(roles.next().value);   //next Keyword is used to get the next value from generator function

let selectedRole;
for(const role of roles) {
    console.log("Available Land User Role : "+ role);
    if(role === "Viewer") {
        selectedRole = role;
        console.log("Selected Land User Role : "+ selectedRole);
        break;
    }
}

//Annonymous Function:
const generateAppId = [20, 30, 40, 50, 60];
const multiplesOfTen = generateAppId.map((id)=> {        // same as 1) map((id) =>  and  2) function(id)
    return id * 10 + 4;
});   
console.log(multiplesOfTen);

//recursive function:
function factorial(n) {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return n * factorial(n-1);
    }   
}
const fact = factorial(5);
console.log("Factorial of 5 is : "+ fact);
// Arrow function recursive:
const factorialArrow = (m) => {
    if((m === 0) || (m === 1)) {        
        return 1;
    } else {
        return m * factorialArrow(m-1);
    }
}
const factArrow = factorialArrow(6);
console.log("Factorial of 6 is : "+ factArrow);
// Callback function:
function processApplication(appId, callback) {
    console.log("Processing application with ID: " + appId);
    callback();
}
function applicationProcessed() {
    console.log("Application has been processed successfully.");

}
processApplication(101, applicationProcessed); 


//functions as parameters
function landUserAccess(role, action) {
    console.log("Land user with role " + role + " is performing action: " + action);
    return "Land user action completed: 3400";
}

function waterUserAccess(role, action) {
   console.log("Water user with role " + role + " is performing action: " + action);
    return "Water user action completed : 77001";
}

function executeAction(userAccess, role, actio) {    ///executeAction :  High Order Function defination
    return userAccess(role, actio);
}
const landResult = executeAction(landUserAccess, "3400", "GeneralLands"); //executeAction :  High Order Function call       
console.log(landResult);
const WaterResult = executeAction(waterUserAccess , "77001", "FreshWater");
console.log(WaterResult);
//functions as return values

//arraow function with param. as return value
console.log("+===========================================================================+");
function createUserRole(role) {
    return (action) => {
        console.log("User with role " + role + " is performing action: " + action);
        return role + " action completed";
    };
}
const adminAction = createUserRole("Admin");   

//arraow function without function keyword. 
// (Only with Single Param.)
const signInCounter = count => count * count;  //same as (count) => count * count;
const result = signInCounter(150);
console.log(result);

// (No Param.  and only to print text)
const signInSuccessMsg = () => console.log("User signed In.");
signInSuccessMsg();

const adminSignInMsg = () => 'Admin signed In ';
console.log(adminSignInMsg());


//Print Message using => arraow function with object param.
const getProjectTeam = team1 => `${team1.Developer} ${team1.lead1} ${team1.lead2} ${team1.QA} ${team1.manager}`
const team1 = {
    manager : "Mgr : Mike", 
    lead1 : "L1: Alice Johnson",
    lead2 : "L2: Bob Brown",
    Developer : "D1: Charlie Davis",
    QA: "Q1: Eva Green"
}
console.log("+===========================================================================+");
const t1 = getProjectTeam(team1);
console.log("Manager of Team WisePenBlue is : " +team1.manager);
const teamMsg = (manager='Mike',teamCode=67) => 
     `Hi , ${manager} your team code is ${teamCode} for project WisePenBlue`;  

console.log(teamMsg());        
console.log("Team WisePenBlue  : " +t1);
console.log(teamMsg('Alice J and Bob B', 89));
console.log(teamMsg('Eva G and Charlie D', 45));

//rest Parameters ... variable number of parameters with arraow function
const projectAccessCodes = (...Wcodes) =>  Wcodes.reduce((WT, code) => WT+code, 0);
const pw1 = projectAccessCodes(1001,1002,1003,1004);
const pw2 = projectAccessCodes(2001,2002);
const pw3 = projectAccessCodes(3001,3002,3003);
console.log(pw1, pw2, pw3);

const languageAndSpecs = (ProgLanguage = 'JavaScript', ...toolsDetails) => {
    console.log(`CodeLanguage: ${ProgLanguage}`);
    console.log('other Tools:' , toolsDetails);    
};
languageAndSpecs();
languageAndSpecs('Java','Selenium','GitHub', 'IntellijIDEA');
languageAndSpecs('TypeScript', 'AzureDevOps','Playwright','IDE:VSCODE')

//Math 
    const masterCodes= (x, y, z) => {
      return Math.max(x, y, z);
    }
const maxCode = masterCodes(1001,92, 200)
console.log(maxCode);




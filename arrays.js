const { use } = require("react");

let builds =[];
let appIds = [1,2,3,4,5,6];

let appOperations = new Array("Create","Update","Delete","Review");

//Push() and Pop()
console.log(appIds);   appIds.push(7, 9) ;  console.log(appIds);
appIds.pop(); console.log(appIds);
appIds.shift(); console.log(appIds);
appIds.unshift(0); console.log(appIds);
console.log(appIds.length);
console.log(appIds[2]);
console.log(appIds[appIds.length -1]);

let applicationType = ["Lands","Construction","Water","Pipelines","Forestry"];
applicationType.push("Agriculture");
console.log(applicationType);
console.log(applicationType.length);

//splice
applicationType.splice(2,0,"Mining","Energy");
console.log(applicationType);

applicationType.splice(1,1,"Public Lands");
console.log("\nPublic Lands Added : "+applicationType);
let myapplication = applicationType.at(1);   
console.log("\nProceeding for : " +myapplication);
console.log(applicationType.toString());

//slice
let newAppType = applicationType.slice(1,4);
console.log(newAppType);
newAppType = applicationType
console.log(newAppType);

//indexOf
let appIndex = applicationType.indexOf("Water");
console.log("Water App Type is at >> "+ appIndex +" << position inside array");
applicationType.push("Lands"); 
console.log(applicationType);

let landsKeyword = applicationType.indexOf("Lands"); console.log("\n 1st location: "+ landsKeyword);
landsKeyword = applicationType.indexOf("Lands",applicationType.indexOf("Lands")+1); console.log("\n 2ed location: "+ landsKeyword);


//includes
let userRoles = [];
userRoles = ["Admin","Editor","Viewer","Super Admin"];
let roleCheck = userRoles.includes("Admin");
console.log("User role Admin is available : "+ roleCheck , userRoles);
roleCheck = userRoles.includes("Lead");
console.log("User role Lead is available : "+ roleCheck, userRoles);

//concat:
let allAppType = applicationType.concat(appOperations);
console.log("All Application types and operations : "+ allAppType);
let finalPresent = appOperations.concat(userRoles).join(" -> ");
console.log("All Application operations and user roles : "+ finalPresent);

 //join
let appTypeJoin = applicationType.join(" | ");
console.log("Application types are : "+ appTypeJoin);

//For..each loop 
let leadPanels = ["Lead", "Supervisor", "Manager", "Director"];
leadPanels.forEach((u)=> {
    console.log("Application Approval Panel: "+ u);
});

leadPanels.forEach((p, index)=> {
    console.log("Application Approval Panel: "+ index + " -> " + p);
});


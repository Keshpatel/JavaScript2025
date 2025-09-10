//map
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
let squares = roots.map((x) => x * x);
let doubled = numbers.map((x) => x * 2);
console.log("Originals: "+ numbers);
console.log("doubles:   "+doubled);
console.log("Squares:   "+squares);
console.log("Roots:     "+roots);

//conver F to C 
function fToC(fTemp) {
    return (fTemp - 32) * 5 / 9;
}
console.log(fToC(32));

//conver C to F
function cToF(cTemp) {
    return (cTemp * 9 / 5) + 32;
}
console.log(cToF(5));

//filter
let values = [1, -3, 2, 8, -4, 5];
let filteredValues = values.filter((x) => x >= 0);
console.log("Originals: "+ values);
console.log("Filtered:  "+ filteredValues);

let rolesAndOperations = [
    {role: "Admin", operation: "Create", general: "Approve"},
    {role: "Lead", operation: "Process", general: "Approve"},
    {role: "Lead1", operation: "Create", general: "Approve"},
    {role: "DecisionMaker", operation: "Delete", general: "Approve"},
    {role: "Editor", operation: "Update", general: "Notify"},   
    {role: "Viewer", operation: "View", general: "Notify"}, 
];

let selectedRole = rolesAndOperations.filter((rl) => {
    return rl.operation == "Create" && rl.general == "Approve";
});

console.log("\n----Final Selected Role--------");
console.log(selectedRole);

//reduce
let roles = ["Admin", "Lead", "Editor", "Viewer", "Auditor"];
roles.reduce((acc, role) => {
    console.log(acc + " -> " + role);
    return role;
}, "Start");

let rolesIds = [1, 2, 3, 4, 5];
let sumIds = rolesIds.reduce((acc, num) => acc + num, 0);
console.log("New OneTime Id Value Text : "+ "recmm0025_"+sumIds);   

let fullListIds = [34, 67, 3, 2, 6, 55]
let IdHightest = fullListIds.reduce((id, vId ) => {
    if(vId > id) {
        return vId;
    } else {  return id; }} , fullListIds[0]);

console.log("Hightest Id is : "+ IdHightest);

let IdLowest = fullListIds.reduce((id, vId ) => {
    if(vId < id) {
        return vId;
    } else {  return id; }} , fullListIds[0]);   
console.log("Lowest Id is : "+ IdLowest);

// list of types of applications 
let newForms = [
    {name: "GeneralLands", count: 50},
    {name: "NewConstruction", count: 30},           
    {name: "FreshWater", count: 70},
    {name: "Pipelines", count: 10},
    {name: "Oil&Gas", count: 12},
    {name: "Mining", count: 6},
    {name: "Energy", count: 103},
];

let totalForms = newForms.reduce((total, form) => total + form.count, 0);
console.log("Total Application Forms to process : "+ totalForms);


//==================================
// every() , some() , find() , findIndex()
let landUsers = ["Admin", "Editor", "Lead", "Viewer", "Super Admin","Lead"];
let allValid = landUsers.every((role) => role !== "Guest");
console.log("Users list"+ allValid);

let anyValid = landUsers.some((role) => role === "Editor");
console.log("Any one land user is valid : "+ anyValid);

let leadRole = landUsers.find((role) => role.startsWith("L"));
console.log("Lead availbale to process application : "+ leadRole);

let userRoleIndex = landUsers.findIndex((role) => role.startsWith("L"));
console.log("Lead available at : "+ userRoleIndex +" position to process application");
//==================================

//reverse() , sorted(), sort() 
let appIds = [3004110, 3004114, 3004175, 3004180, 3004181];
appIds.reverse(); console.log(appIds);

let adminUsersIds = ["0078Admin","007722","001Main","55","1000","newAdmin","A1admin"];
adminUsersIds.sort(); console.log(adminUsersIds);
adminUsersIds.sort((a,b) => a.localeCompare(b)); console.log(adminUsersIds);

//let adminUsersIdsSorted = adminUsersIds.sorted(); console.log(adminUsersIdsSorted);
class ITTeam{

    constructor(name, employee, lead , manager){

        this.name = name;
        this.employee = employee;
        this.lead = lead;
        this.namager = manager;
    
    }
    
    project20() {       
                console.log("Project Dtails Of :  "+this.name);
    }
}


const iTM = new ITTeam("Team1", 50, "Mike", "Tom");
iTM.project20();
console.log("Team final: " +iTM.name+iTM.lead);

console.log("---------------------");

const iTM1 = new ITTeam("Team2", 50, "Rayan", "Willium");
iTM1.project20();
console.log("New team added: "+iTM.name+iTM1.manager);

const iTM3 = new ITTeam("Team100");
console.log("New Team : " + iTM3.name + " " + iTM3.lead + " "+ iTM3.employee);//Displying name : Team100 and undefined lead and employee


//Object literrals: {}
const team1 = {
    name: "MoutainRock",
    year: "2025",
    Project: "Project1"
};
console.log(team1.name);
console.log(team1.year);

//Constructor function and this 
function details(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
}
const d1 = new details("601" ,"Mike", "Calgary");
const d2 = new details("622", "tom", "Edmonton");
console.log(d1.id + ":" + d1.name);
console.log(d2.id + ":" + d2.name);

//class constructor 
class team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
      
    }
    addToProject() {
        console.log(`${this.id} added to the project- 1`);
    }
}

const tm1 = new team("rock1", "New Team of 2025");
console.log(tm1.id, tm1.name);
tm1.addToProject();

//.Create() of Object
const myTeam = { 
        printInfo: function() { 
            console.log(`My Team is ${this.teamName}`);
        } 
    };
const i1 = Object.create(myTeam);
i1.teamName = "Team Rock1";
i1.printInfo();

//using Factory Functions : return an Object 
function createTeamTag(teamName , location) {
    return{
        teamName : teamName,
        location : location,

        getbasicInfo:function() {
            console.log(`Hi  ${this.teamName} From : ${this.location}`);
        }
    }
}

const tag1 = createTeamTag("Rock1", "Calgary");
const tag2 = createTeamTag("mtnVision", "Edmonton");
tag1.getbasicInfo();
tag2.getbasicInfo();






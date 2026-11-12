const studentName= "Ahmad";
const studentAge= "20";
let MathematicsMarks= 90
let EnglishMarks= 70
let ComputerMarks= 85

let TotalMarks= MathematicsMarks + EnglishMarks + ComputerMarks;
let AverageMarks= TotalMarks / 3;
let HighestTotalMarks= 300;
let RemainingMarks= HighestTotalMarks - TotalMarks;

console.log("Total Marks" , TotalMarks);
console.log("Average Marks" , AverageMarks);
console.log("Highest Possible Total Marks" , HighestTotalMarks);
console.log("Remaining Marks Needed to Reach" , RemainingMarks);

console.log("Is Student older than 18?" ,studentAge > 18);
console.log("Is the Mathematics mark greater than 80?" , MathematicsMarks > 80);
console.log(" Is the English mark equal to 100?" , EnglishMarks === 100);
console.log(" Is the Computer mark different from 50?" , ComputerMarks !== 50);
console.log("Is the average greater than or equal to 50?" , AverageMarks >= 50);

let Grade;
if(AverageMarks >= 90){
    Grade = "A";
}
else if (AverageMarks >= 80){
    Grade = "B";
}
else if (AverageMarks >= 70){
    Grade = "C";
}
else if (AverageMarks >= 60){
    Grade = "D"
}
else if (AverageMarks >= 50){
    Grade = "E"
}
else{ 
    Grade = "You Failed"
}
console.log("Student Grade" , Grade)

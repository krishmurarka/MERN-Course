// let and Const

let firstName = "Krish"
let age =21


console.log("Name is : " + firstName + " Age is " + age);

// If Else Statement
let isMarried = false
if (isMarried)
    console.log(firstName + "is married")
else 
    console.log(firstName + " is not married")

// Loops - for Loops

// WAP that counts the sum from  0-100 and print it

let answer =0;
for(let i=0;i<=100;i++){
    answer = answer + i;
}

console.log(answer);


// Arrays
const ages = [21,22,23,24,25]

for(let i=0;i<ages.length;i++){
    if(ages[i]%2 ==0){
        console.log(ages[i])
    }
}

const personArray = ["harkirat", "priya"];
const genderArray = ["male","female"];

for(let i=0;i<personArray.length;i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i])
    }
}
//  Another way to write above block of code using Objects
const users = [
    {
        firstName: "harkirat",
        geneder: "male"
    },
    {
        firstName: "kirat",
        geneder: "female"
    }
]

for(let i=0;i<users.length;i++){

    if(users[i]["geneder"]== "male"){
        console.log(users[i]["firstName"]);
    }
}

// Functions 


function findSum(a,b){
    return a+b;
}
console.log(findSum(2,3));
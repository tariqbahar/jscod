
// // console.log(guess)
// let randomnumber=Math.floor(Math.random()*100+1)
// console.log(randomnumber);

// // guess=20;
// let chance=0;
// const maxChance=3

// while(chance<maxChance){
//     const guess=parseInt( prompt('Please enter a number btewean 1 and 100'))
// if(isNaN(guess)||guess<=0||guess>=100 ){
// console.log("Please enter a valid guess")
// continue;
// }else if(guess==randomnumber){
//     console.log("congratulation you win")
//     break;

// }else if(guess>randomnumber){
//     console.log(`too high guess number: you have  ${chance} chance`)

// }else if(guess<randomnumber){
//     console.log(`too low guess number: you have${chance} chance`)
// }

// chance++;

// }

// if(chance==maxChance){
//     console.log(`Game over the correct number was ${randomnumber}`)
// }

// for(var i=0;i<100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("buzz and fuzz"+i) 
//     }else if(i%3==0){
//     console.log("Fizz"+i)
    
//     }else if(i%5==0){
//     console.log("Buzz"+i)
//     }}
// var age=parseInt(prompt('Enter your age'));
// if(isNaN(age) || age<0){
//     console.log("invalid age")
// }else if(age>=18){
//     console.log("your Welcome")
// }else{
//     console.log(" your cannot access this site")
// }
// const a=10
// const b=20
// a>b? console.log("A is grader then B"):console.log("B is grader then A")

/////////////////// reverse string//////////////////
// const name="tariq";
// let newname=name.split("").reverse().join("")
// console.log(newname);
const names={name:'ali',fname:'jan ',addresss:'kabul'}
for(let key in names){
console.log(key);
}
const fruites=[1,2,3,4,5,6]
for(let value of fruites)
{
console.log(value)
}
let name="Tariq"
for(let data of name)
{
    console.log(data)
    let newname=data.split().join('')
console.log(newname);
}

let fname="mohamad Tariq"

console.log(fname);
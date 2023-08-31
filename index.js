// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
//________________________________________________________--
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// console.log(totalTime)

// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count
//------------------------------------------------------------------------------------------------------------
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Per Harald Borgen"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)
//-------------------------------------------------------------------------------------------------------------
// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"
// --------------------------------------------------------------------------------------------------------
let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    count  += 1
    countEl.textContent = count
   
}
function save(){
    let countstr = count + " - "
    saveEl.textContent +=countstr
    countEl.textContent = 0
    count = 0
   
}


let cards = []
let sum = 0
let isAlive = false
   let hasblackjack = false
   let message  = ""
   let messageEl = document.getElementById("message-el")
   let sumEl = document.getElementById("sum-el")
   //let sumEl = document.querySelector("#sum-el")
//console.log(sum)
   let cardsEl = document.getElementById("cards-el")
   let playerEl = document.getElementById("player-el")
   let player ={
     name: "per",
     chips: 156
   }
   playerEl.textContent = player.name +":" + "$" + player.chips
   function getRandomCard(){
  let random = Math.floor(Math.random()*13)+1
   if(random === 1){
     return 11
   }  
     else if(random>10)
       {
         return 10
       }
     else{
       return random
     }
}
  function startGame(){
   isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard , secondCard]

sum = firstCard + secondCard
    renderGame()
  }
   function renderGame(){
      messageEl.textContent = message

     //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    cardsEl.textContent ="Cards:"
     for(let i=0; i<cards.length; i++){
       
       
       cardsEl.textContent +=  cards[i] + " "
     }
    // cardsEl.textContent = "Cards: " + cards[0] + " " +cards[1]
     sumEl.textContent = "Sum: " + sum
if(sum <= 20){
message="Do you want to draw a new card?"
}
else if(sum === 21){
message="you've got blackjack"
 hasblackjack = true
 //console.log(hasblackjack)
}
else{
message="you're out of the game"
 isAlive = false
}

//console.log(isAlive)

//console.log(message)
     messageEl.textContent = message
   }

function newCard(){
 if(isAlive ===true && hasblackjack === false){

 let newCard = getRandomCard()
sum = sum + newCard
 cards.push(newCard)
 renderGame()
}}
//let age = 16

//if(age < 18)
 //{
//  let year = 18 - age
  // console.log("You have" + " " + year + " " + "years to vote")
 //}
//else if(age >= 18){
// console.log("You have become eligible to vote")
//}//

//let age = 10
//if(age<100){
 //console.log("Not eligible")
/*}
else if(age===100){
 console.log("Here is your birthday card from the king")
}
else{
 console.log("Not eligible, you have already gotten one")
}*/

/*let aboutme = ["noori", 27 , true]
console.log(aboutme)

/*let cards = [7,4]
cards.push(6)
console.log(cards)

let messages = ["hi", "hello" , "how r u"]
let newmessage ="welcome"
messages.push(newmessage)
console.log(messages)
messages.pop(newmessage)
console.log(messages)
*/
/*for(let count = 10; count<=100; count+=10){
 console.log(count)
}

let cardlist = [7,3,5]
for(let i=0; i<cardlist.length; i++){
 console.log(cardlist[i])
}
let sentence= ["Hello","my","name","is","noori"]
let greetingEl = document.getElementById("greeting-el")
for(let i=0;i<sentence.length;i++)
{
  greetingEl.textContent += sentence[i] + " "
 
}

function totalracetime(){
 return 102+134
}
let total = totalracetime()
console.log(total)



function rolldice(){
 
 
let randomnumber = Math.floor(Math.random() * 6) + 1
 return randomnumber
}
console.log(rolldice())

let hasSolvedChallenge = false
let hasHintsLeft = false
if(hasSolvedChallenge === false && hasHintsLeft === false)
  {
    showsolution()
  }
function showsolution(){
console.log("showing the solution...")
}*/
let castle = {
 name: "bukkingkam palace",
 doorservice : true,
 price: 190,
 tags: ["europe", "tourism", "palace"],
 sayHello : function(){
   console.log("Hello")
 }
}
console.log(castle.price)
console.log(castle.tags)
castle.sayHello()

/*let person = {
 name: "noori",
 age: 20,
 country: "norway",
 logdata: function() {
    console.log( person.name + "is" + person.age + "years old and" + person.country)
 }
}
person.logdata()*/
let person = {
 name: "noori",
 age: 20,
 country: "norway"
}
function logdata(){
 console.log( person.name + "is" + person.age + "years old and lives in" + person.country)
}
logdata()

/*let age =27
if(age<6){
 console.log("free")
}
else if(age === 6 || age <= 17){
 console.log("child discount")
}
else if(age === 18 || age <= 26){
 console.log("student discount")
}
else if(age === 27 || age <=66){
 console.log("full price")
}
else{
 console.log("senior citizen discount")
}
*/
let age =27
if(age<6){
 console.log("free")
}
else if(age<18){
 console.log("child discount")
}
else if(age<27){
 console.log("student dscount")
}
else if(age<67){
 console.log("full price")
}
else{
 console.log("senior citizen discount")
}

let largecountries = ["China, India, USA"]
console.log("the 3 largest countries in the world:")
for(i=0;i<largecountries.length; i++){
 console.log("-" +largecountries[i])
}

let countries = ["tuvalu","india","usa","indonesia","monaco"]
countries.pop()
countries.push("pakistan")

countries.shift()
countries.unshift("china")
console.log(countries)

let dayofmonth = 14
let month = "february"
if(dayofmonth===14 && month==="february"){
 console.log("valentines day")
}

let hands= ["rock","paper","scissors"]
function gethand(){
 let randomindex = Math.floor(Math.random() * 3)
 return hands[randomindex]
}
console.log(gethand())


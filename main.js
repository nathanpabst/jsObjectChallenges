// console.log('hello');

//challenge 1
// var players = [
//     { 
//         name: "Bob", 
//         scores: [10, 65] 
//     }, 
//     { 
//         name: "Bill", 
//         scores: [90, 5] 
//     }, 
//     { 
//         name: "Charlie", 
//         scores: [40, 55] 
//     }
// ]; // Displays "Bill"
var players = [
    { 
        name: "Bob", scores: [15, 20] 
    }, 
    { 
        name: "Bill", scores: [10, 15] 
    }, 
    { 
        name: "Charlie", scores: [90, 10] 
    }
]; // Displays "Charlie"

var scoreArray= [];
for (var i = 0; i < players.length; i++){
    scoreArray.push(players[i].scores[0] + players[i].scores[1]);
};
var highScore = Math.max.apply(Math, scoreArray);

var outputString;
for (var i = 0; i < scoreArray.length; i++){
    if (scoreArray[i] === highScore && scoreArray[i] <= 100) {
        outputString = players[i].name;
        break;
    } else if(highScore[i] > 100) {
        outputString = "false";
    };
};
document.getElementById("challenge-1").innerHTML += '<h2>' + outputString + '</h2>';

//*************CHALLENGE-2************/

// Given an array called winnerList and the name of a country, display the number of times a team from a given country has won. Return 0 if there have been no wins.

// var country = 'Spain'  // should return 9
// var country = 'Portugal'  // should return 1
var country = 'Russia'  // should return 0

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];

  function countWins(winnerList, country) {
    var count = 0;
    for( var i = 0; i < winnerList.length; i++ ){
        if (winnerList[i].country === country){
            count += 1;
        }
    }
    return count;
    }
// console.log(countWins(winnerList, 'Portugal'));
document.getElementById("challenge-2").innerHTML += '<h2>' + countWins(winnerList, 'Spain') + '</h2>';

//******************CHALLENGE 3*************/

// Given an object containing two numbers and an arithmetic operator, return the appropriate math result.

// The four operators are "add", "subtract", "divide", "multiply".

var test1 = {a: 5, b: 2, operator: "add"};  //7
// // var test1 = {a: 5, b:2, operator: "subtract"}; //3
// // var test1 = {a: 5, b:2, operator: "multiply"}; //10
// // var test1 = {a: 5, b:2, operator: "divide"}; //2.5

function mathIt(a, b, operator) {
    const cases = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    }

 return cases[operator](a, b);    
}
// console.log(mathIt(5, 2, 'add'));

document.getElementById("challenge-3").innerHTML += '<h2>' + mathIt(5, 2, 'add') + '</h2>';
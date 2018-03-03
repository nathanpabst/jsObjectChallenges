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

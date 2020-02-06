'use strict';

var score = 0

var fname = prompt('What is your first name?');
console.log('Client\'s first name is ' + fname);

var lname = prompt('What is you last name');
console.log('Client\'s last name is ' + lname);

var fullname = confirm('Is you name '+ fname + ' ' + lname + '?');
if (fullname === true) {
  alert('PLeasure to meet you ' +fname+ ' ' +lname+ ', have fun playing a little game that I have made.');
 } else {
   alert('You/re boring, come one say your name.');
  }
  
  var dog = confirm('Did I have a chihuahua?');
if (dog === true) {
  //console.log('correct');
  corr();
  score+=1;
  } else {
    //console.log('false'); 
    fals();
  }

  var school = confirm('Have i been in private school until middle school?');
if (school === false) {
//console.log('correct');
  corr();
  score+=1;
  } else {
//console.log('false');
    fals();
  }

var job = confirm('Was my third job L.A. Fitness?');
if (job === true) {
  //console.log('correct');
  corr();
  score+=1;
  } else {
    //console.log('false');
    fals();
  }
 
var career = confirm('Is my main goal to start a career?');
if (career === true) {
  //console.log('correct');
  corr();
  score+=1;
  } else {
    //console.log('false');
    fals();
  }

var hobby = confirm('Do I want to try and create pastries as a hobby?');
if (hobby === false) {
  //console.log('correct');
  corr();
  score+=1;
  } else {
    //console.log('false');
    fals();
  }
alert('Thank you for taking the time and playing my game ' +fname+' '+lname+'. Have a good day!!');



var con = confirm('Do you want to play a number game?');
if (con === true){
  alert('Okie dokie, let\'s play a game.');
  var num = prompt('Guess a number between 1 or 10.');
 if (num < 3) {
    alert('Your number is too low.');
  } else if( num > 3) {
    alert('Your number is too high.');
  } else if(num == 3) {
    alert('Your number is correct.');
    score+=1;

  } else {
    alert('Invalid input.');
  }
} else {
  alert('You\'re not fun.');
}

var answer= [2, 5, 8, 10];
var breakIt = true;

for(var j =0; j< 6; j++) {
//alert ('Wrong, the answer is 5, 8, and 10');
    if(breakIt){
    var userInput =prompt('Here\'s another number game. What number am I thinking of?');
        for(var i = 0;i < answer.length; i++) {
            if(parseInt(userInput) === answer[i]){
                alert(" woohoooo you got it right ");
                score+=1;
                breakIt=false;
                    
            }

         }
      }
}
alert ('Wrong, the answer is 2, 5, 8, and 10');
alert (" you have about "+score +" Points");

function corr(){
  alert('You are correct.');
}

function fals(){
  alert('You are worng');

}


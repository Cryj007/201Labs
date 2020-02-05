'use strict';


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
  alert('Yes, you are correct, I did have a chihuahua.');
  } else {
    //console.log('false');
    alert('Nope, try again');
  }
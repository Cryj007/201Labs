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

  var school = confirm('Have i been in private school until middle school?');
if (school === false) {
//console.log('correct');
  alert('Correct, I been in private school until high school');
  } else {
//console.log('false');
    alert('False, try again');
  }

var job = confirm('Was my third job L.A. Fitness?');
if (job === true) {
  //console.log('correct');
  alert('Yes, my third job was at L.A. Fitness');
  } else {
    //console.log('false');
    alert('No, try again');
  }
 
var career = confirm('Is my main goal to start a career?');
if (career === true) {
  //console.log('correct');
  alert('Correct, I do want to start a career');
  } else {
    //console.log('false');
    alert('Nope, try again');
  }

var hobby = confirm('Do I want to try and create pastries as a hobby?');
if (hobby === false) {
  //console.log('correct');
  alert('Yes, I want to try and make video games, not pastries');
  } else {
    //console.log('false');
    alert('Try again');
  }
alert('Thank you for taking the time and playing my game ' +fname+' '+lname+'. Have a good day!!');
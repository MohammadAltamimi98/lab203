'use strict';
// declaring name prompt
let n = prompt('what is your name? ');
alert('Hello ' + n + ' I hope you are doing well');
// decalring grade
let grade = 0;
/* asking the user questions and compare the results by
converting the prompt result(string) to namber
*/


// question 1 //
function Q1() {
let q1 = prompt('Am I above 25?');
if (q1.toLowerCase() === 'yes' || q1.toUpperCase() === 'Y') {
  //console.log('you are correct!!!');
  grade += 1;
  alert('you are correct!!! you got +1 point!');
} else if (q1.toLowerCase() === 'no' || q1.toUpperCase() === 'N') {
  //console.log('I am afraid you are mistaken');
  alert('I am afraid you are mistaken');
} else {
  // console.loge('you entered an invalid input!!');
  alert('you entered an invalid input!!');
}}

Q1();



// question 2 //
function Q2()
{let q2 = prompt('Did I studied a scientific  major?');
if (q2.toLowerCase() === 'yes' || q2.toUpperCase() === 'Y') {
  //console.log('yup!');
  grade += 1;
  alert('yup! you got +1 point!');
} else if (q2.toLowerCase() === 'no' || q2.toUpperCase() === 'N') {
  //console.log('unfortunately no !');
  alert('unfortunately no !');
} else {
  // console.loge('you entered an invalid input!!');
  alert('you entered an invalid input!!');
}
}
Q2();


// question 3//
function Q3() {let q3 = prompt('Have I worked before?');
if (q3.toLowerCase() === 'yes' || q3.toUpperCase() === 'Y') {
  //console.log('thar is allright');
  grade += 1;
  alert('thar is allright you got +1 point!');
} else if (q3.toLowerCase() === 'no' || q3.toUpperCase() === 'N') {
  //console.log('nop! I have');
  alert('nop! I have');
} else {
  // console.loge('you entered an invalid input!!');
  alert('you entered an invalid input!!');
}}
Q3();


// question 4
function Q4(){
let q4 = prompt('Do I love anime ?');
if (q4.toLowerCase() === 'yes' || q4.toUpperCase() === 'Y') {
  //console.log('well sure I love it!!');
  grade += 1;
  alert('well sure I love it!! you got +1 point!');
} else if (q4.toLowerCase() === 'no' || q4.toUpperCase() === 'N') {
  //console.log('NOW why you do not think so!!!');
  alert('NOW why you do not think so!!!');
} else {
  // console.loge('you entered an invalid input!!');
  alert('you entered an invalid input!!');
}
}
Q4();

// question 5
function Q5(){
let q5 = prompt('Do I game ?');
if (q5.toLowerCase() === 'yes' || q5.toUpperCase() === 'Y') {
  //console.log('Hell Yeah!');
  grade += 1;
  alert('Hell Yeah! you got +1 point!');
} else if (q5.toLowerCase() === 'no' || q5.toUpperCase() === 'N') {
  //console.log('you hate life apparently!');
  alert('you hate life apparently!');
} else {
  // console.loge('you entered an invalid input!!');
  alert('you entered an invalid input!!');
}
}
Q5();



// Q6//
// telling the user how many point he/she got
alert('your grade till now is: ' + grade);
// declaring the true gues and how many chances the user will get
function Q6(){
let ch1 = 4;
let gus1 = 12;
// start looping and comparing the users answers
for (let i = 0; i < ch1; i++) {
  let ans1 = prompt('how many hours I spent the most while gamming?');
  if (Number(ans1) === gus1) {
    alert('YES you are correct!');
    grade += 1;
    break;
  } else if (Number(ans1) >= 0 && Number(ans1) < 6) {
    alert('NO your answer is wrong, you are too low');
  }
  else if (Number(ans1) >= 6 && Number(ans1) < 12) {
    alert('NO your answer is wrong, but you are close now, a bit higher');
  } else if (Number(ans1) > 12 && Number(ans1) < 18) {
    alert('NO your answer is wrong, but you are close now, a bit lower');
  } else if (Number(ans1) >= 18) {
    alert('NO your answer is wrong, you are too high');
  }
  // telling the user why the loop has ended
  if (i === ch1 - 1) {
    alert('You ran out of attempts!');
  }
}
}
 Q6();


//  question 7
 function Q7(){
/* declaring how many chances the user will get,
the true answers and a counter for how many right answers
the user input */
let ch2 = 6;
let gus2 = ['red', 'black', 'yellow'];
let count = 0;
for (let i = 0; i < ch2; i++) {
  let ans2 = prompt('Whate are my favorite colors?(I love three)(you can not use the same right answer twice!)');
  if (gus2.includes(ans2)) {
    alert('you are correct');
    // deleting the answer that the user inputed incase it is right
    delete gus2[gus2.indexOf(ans2)];
    count += 1;
  } else {
    alert('you are wrong!');
  }
  // breaking the loop incase the user got all answers
  if (count === 3) {
    grade += 1;
    break;
  }
}}
Q7();



//informing the user how well he/she did
if (grade === 7) {
  alert('Congartulations you achieved 7/7 correct answers');
} else if (grade >= 3 && grade < 7) {
  alert('well done you got ' + grade + ' points out of 7');
} else {
  alert('Umm nice try but you got ' + grade + ' out of 7');
}
// typing a greeting sentance on the browser
document.write('Hello ' + n + ' !');


// const container = document.getElementById('list');
// for (let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('beforeBegin', `<li>${i}</li>`);
// }
//
// for (let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('afterBegin', `<li>${i}</li>`);
// }
//
// for(let i = 0; i<3; i++) {
//     container.insertAdjacentHTML('beforeEnd', `<li>${i}</li>`);
// }

// for(let i = 0; i<3; i++) {
//     container.insertAdjacentHTML('afterEnd', `<li>${i}</li>`);
// }
// console.log("Câu 1:\n1b\n2a\n3c\n4d")
// console.log("câu 2")
// let myVar = setInterval(myTimer, 5000);

// function myTimer() {
//     alert("Hello world!");
// }
// console.log('Câu 3 :\n1, Không \n2, Không')

//Bài 4
// let x = document.getElementsByTagName("li");
// console.log(x[0]);
// console.log('------------');
// function myFunction() {
//   for (let i = 0; i < 3; i++) {
//     console.log(x[i].innerHTML);
//   }
// }
// myFunction();

//Bài 5
// let x = document.getElementsByTagName('div');
// for(let i = 0; i <= 4; i++){
//     console.log(x[i]);
// }
// console.log('=====');
// console.log(x[1]);

// let y = document.getElementsByClassName('singer');
// for(let i = 0; i <4; i++){
//     console.log(y[i].innerHTML);
// }

//Bài 7 - 7.1
// let btn1 = document.getElementById("button1");
// let btn2 = document.getElementById("button2");
// btn1.addEventListener("click", (e) => {
//   console.log(e.target);
// });
// btn2.addEventListener("click", (e) => {
//   console.log(e.target);
// });
//console.log('e.target để đọc đọc button được click')

//Bài 7 - 7.2
// document.getElementById('input').addEventListener('keydown', (e) => {
//     console.log(e.key);
// });

//Bài 8
// function goalOfTheYear() {
//   alert("A+B+C+D+E+F");
// }
// goalOfTheYear();

//Bài 9
// function goalOfTheYear(name, wish) {
//   alert("Name: " + name + "~~ My goal: " + wish);
// }
// goalOfTheYear("Duong", "my goal is");

//Bài 10
// function goalOfTheYear(name, wish) {
//   if (wish == undefined) {
//     alert("Name: " + name);
//   } else {
//     alert("Name: " + name + "My goal: " + wish);
//   }
// }
// goalOfTheYear("Dương", "my goal is");
// goalOfTheYear("Duong");

//Bài 11
//let upperBtn = document.getElementById("upperBtn");
//Bài 11.2
// console.log(upperBtn);
//Bài 11.3
// upperBtn.addEventListener('click',(btnClick)=>{
//   console.log(btnClick.target);
// })
//Bài 11.4
//let nameInput = document.getElementById("userName");
// console.log(nameInput);
//Bài 11.5
// upperBtn.addEventListener("click", () => {
//   let userInput = nameInput.value;
//   console.log(userInput);
// });
//Bài 11.6
// upperBtn.addEventListener("click", () => {
//   let userInput = nameInput.value;
//   console.log(userInput.toUpperCase());
// });
//Bài 11.7
// let results = document.getElementById("result");
// console.log(results);
//Bài 11.8
// upperBtn.addEventListener("click", () => {
//   let userInput = nameInput.value;
//   results.innerHTML = userInput.toUpperCase();
// });
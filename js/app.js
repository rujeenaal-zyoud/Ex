'use strict';
let studentInfo = [];
let id = 1;

function randomAge(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

//  1- We can use this function for cala the random age but we need pass this.min and this.max in constracter with number 
// 2- we shouldnot call the age in constracter in this case
// Student.prototype.calcRandomAge = function () {
//    this.age= randomAge(this.min, this.max);

  

// }
function Student( name,Email, mobile, tuition) {
    this.name = name;
    this.id=id;
  this.age=randomAge(18,25);
    this.mobile = mobile;
    this.tuition = tuition;
    this.Email = Email;

    studentInfo.push(this);
    upadteStorage();

}

// create function for storage
 function upadteStorage(){
    
    let arrayString = JSON.stringify(studentInfo);
    localStorage.setItem('Students',arrayString);
 }


console.log('studentInfo', studentInfo);

// create the table in glpbel
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


// create the Header table
function makingHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let cellOne = document.createElement('th');
    headerRow.appendChild(cellOne);
    cellOne.textContent = 'id';

    let cellTwo = document.createElement('th');
    headerRow.appendChild(cellTwo);
    cellTwo.textContent = 'Name';

    let cellThree = document.createElement('th');
    headerRow.appendChild(cellThree);
    cellThree.textContent = 'Age';

    let cellFour = document.createElement('th');
    headerRow.appendChild(cellFour);
    cellFour.textContent = 'Email';

    let cellFive = document.createElement('th');
    headerRow.appendChild(cellFive);
    cellFive.textContent = 'mobile';

    let cellSixe = document.createElement('th');
    headerRow.appendChild(cellSixe);
    cellSixe.textContent = 'tuition';
}
makingHeader();



// create data table
Student.prototype.render = function () {
    
    let studentRow = document.createElement('tr');
    table.appendChild(studentRow);


    let orderId=document.createElement('td');
    studentRow.appendChild(orderId);
    orderId.textContent=this.id;
    id++;
    let nameTd = document.createElement('td');
    studentRow.appendChild(nameTd);

    nameTd.textContent = this.name;

    let ageTd = document.createElement('td');
    studentRow.appendChild(ageTd);
    ageTd.textContent = this.age;

    let emailTd = document.createElement('td');
    studentRow.appendChild(emailTd);
    emailTd.textContent = this.Email;

    let mobileTd = document.createElement('td');
    studentRow.appendChild(mobileTd);
    mobileTd.textContent = this.mobile;
    
    let tuitionTd = document.createElement('td');
    studentRow.appendChild(tuitionTd);
    tuitionTd.textContent = this.tuition;

}


let sumT = 0;

let totalTut = document.getElementById('total');
let p = document.createElement('p');
totalTut.appendChild(p);
p.textContent = sumT;

function sum() {

//   for (let i = 0; i < tuition.length; i++) {
//    sumT =sumT +  this.tuition;
this.sumT=0;

sumT =sumT + tuition;
  

}
sum();
// function makingFooter(){
//     let footerRow=document.createElement('tr');
//     table.appendChild(footerRow);
//     let firstTh = document.createElement('th');

//     // append th to the footer row
//     footerRow.appendChild(firstTh);

//     // give text content
//     firstTh.textContent = 'Totals';


//     let totaltd=document.createElement('td');
//     footerRow.appendChild(totaltd);
  
// }
// makingFooter();



let form = document.getElementById('form');
console.log(form);
//add the event  listener into form
form.addEventListener('submit', newstudent);

//Know create a function  submitter that call and run when event submit
function newstudent(event) {
    // prevent the default behaviour of refreshing the page
    event.preventDefault();
    console.log(event);
    // to show the data that enter in consol


    let email2 = event.target.StudentEmail.value;
    let x =event.target.StudentEmail.value.split('@');
    let name2=x[0];
    console.log(email2);
    let mobileStu = parseInt(event.target.StudentMobileNumber.value);
    console.log(mobileStu);
    let tuitionStu = parseInt(event.target.Tuition.value);
    console.log(tuitionStu);
   


    const addedStudent = new Student(name2,email2, mobileStu, tuitionStu);
    console.log(addedStudent);


    addedStudent.render();
    //  // now this line mean make table empty to overwtie the table with new store and update the total at same time
    //  table.textContent = " ";
    // // create the table in submit function with new store place  same function for old store 
    // makingHeader();

   }
   function getData(){
    let data=localStorage.getItem('Students');
    console.log(data);
//to get the orgainal data
    let parseData=JSON.parse(data);
    console.log(parseData);

    if(parseData){
        for(let i=0;i<parseData.length;i++){
            new Student(parseData[i].name,parseData[i].Email,parseData[i].mobile,parseData[i].tuition);
            studentInfo[i].render();

        }
    }
 
}

   
getData();
// // now render all data agin from local storge to prevent when refreh page  or by render in getdata
//  for(let i =0;i<Student.length;i++){
    // studentInfo[i].render();
    //  }
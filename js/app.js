'use strict';
let studentInfo=[];
 function Student (id,age,Email,mobile,tuition){
     this.id=id;
    //  this.name=name;
     this.age= age;
     this.mobile=mobile;
     this.tuition=tuition;
     this.Email=Email;
  this.total=0;
  this.min=18;
  this.max=24;
studentInfo.push(this);
}

//  create function for radom number


function randomAge(min,max){

    return Math.floor(Math.random() * (max - min)) + min;

}


Student.prototype.calcRandomAge=function(){
    return randomAge(this.min,this.max);
    

}
Student.prototype.calcAge=function(){
    this.age.push(Math.floor(this.calcRandomAge()));

}



Student.prototype.spiltEmail=function(){
   let email = "demo@gmail.com";
    let name = email.split("@");
    console.log(name[0]) //demo
    console.log(name[1]) //gmail.com 
      
}
//  find the total


//  const ahmad =new Student(1,'Ahmad',18,79185214,'100Jd');
//  console.log(ahmad);

 console.log('studentInfo',studentInfo);

// create the table in glpbel
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


// create the Header table
function makingHeader(){
    let headerRow =document.createElement('tr');
    table.appendChild(headerRow);
    let cellOne=document.createElement('th');
    headerRow.appendChild(cellOne);
    cellOne.textContent='id';

    let cellTwo=document.createElement('th');
    headerRow.appendChild(cellTwo);
    cellTwo.textContent='Name';

 let cellThree=document.createElement('th');
    headerRow.appendChild(cellThree);
    cellThree.textContent='Age';
    
    let cellFour=document.createElement('th');
    headerRow.appendChild(cellFour);
    cellFour.textContent='Email';

    let cellFive=document.createElement('th');
    headerRow.appendChild(cellFive);
    cellFive.textContent='mobile';

    let cellSixe=document.createElement('th');
    headerRow.appendChild(cellSixe);
    cellSixe.textContent='tuition';
}
makingHeader();


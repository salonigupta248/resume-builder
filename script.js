function weAddButton(){
    //console.log("Added new textbox")
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");

    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Enter Here..");

    let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');
    weOb.insertBefore(newNode,weAddButtonOb)
}
function aqAddButton(){
    //console.log("Added new textbox")
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");

    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Enter Here..");

    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode,aqAddButtonOb)
}

//CVtemplate

//generating cv
function generateCV(){
    //console.log("generating cv")

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML=nameField;
    let nameT2 = document.getElementById('nameT2')
    nameT2.innerHTML=nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById('contactT')
    contactT.innerHTML=contactField;

    let addressField = document.getElementById('addressField').value;
    let addressT = document.getElementById('addressT')
    addressT.innerHTML=addressField;

    document.getElementById("fbT").innerHTML= document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML= document.getElementById("instaField").value;
    document.getElementById("liT").innerHTML= document.getElementById("linkedinField").value;

//objective
document.getElementById("objT").innerHTML= document.getElementById("objectivefield").value;

//we
let wes = document.getElementsByClassName("weField");

let str ="";

for (let e of wes) { 
    str = str+ `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML = str;

//aq
let aqs= document.getElementsByClassName("aqField");
let str1=""
for(let e of aqs){
    str1=str1+`<li> ${e.value} </li>`;

}
document.getElementById("aqT").innerHTML=str1;

document.getElementById('cv-form').style.display='none'
document.getElementById('cv-template').style.display='block'
}

//printcv
function printCV()
{
    window.print();
}
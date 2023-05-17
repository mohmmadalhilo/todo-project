
'use strict';
let userName= prompt('please enter your name');

let userGender= prompt('please enter your gender (male-female)');
if(userGender!='male' && userGender!='female'){

    alert('please enter male or female in correct way');
    userGender= prompt('please enter your gender (male-female)');

}

let userAge= prompt('please enter your age');
if(userAge<= 0){
alert('please enter correct age greater than zero');

userAge= prompt('please enter your age');

}


let skip= confirm('Do you like to skip welcom message');

if(skip==false){

if(userGender === 'male'){
    alert('welcome, Mr.' + userName);

}else if(userGender ==='female'){
    alert('welcome, Ms.' + userName);

}    
}



let q1= prompt('Do you like cars');
let q2= prompt('Do you like motorcycle');
let q3= prompt('Do you like jordan');

let aar1=[];

function checkArr1(question){

    if(question==""){
        aar1.push('invalid');
        
        }else if(question =='yes'){
            aar1.push('yes');
        
        }else if(question =='no'){
            aar1.push('no');
        
        }

}

console.log(checkArr1(q1)) ;
console.log(checkArr1(q2)) ;
console.log(checkArr1(q3)) ;



function printTheItems(){

    for(let i=0;i<=aar1.length;i++){
        console.log(aar1[i]);

    }
}

printTheItems();
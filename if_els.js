var a = prompt("Enter age : ");
var person = Number(a)

// if(a >= 20){

//     document.write('a > 20');
// }

// else if(a<=0){
//     document.write('A = (-)')
// }

// else{
//     document.write("Error")
// }

// logical condition 
if(person >= 18 && person <= 60){
    document.write('Eligeble');
}
else{
    document.write('Not Eligeble');
}


// Nested If
if(person >= 18){
    if (person<= 60){
     document.write('Eligeble');
    }else{
     document.write('Not Eligeble');
    }
 }
 else{
     document.write('Not Eligeble ');
 }
 

var N = prompt("Input Your number : ");
var Number_ = Number(N);


if(Number_>= 80){
    document.write('A+');
}else if (Number_ >=70 && Number_<80){
    document.write('A');
}else if (Number_ >=60 && Number_<70){
    document.write('A-');
}else{
    document.write('Fail ! !');
}
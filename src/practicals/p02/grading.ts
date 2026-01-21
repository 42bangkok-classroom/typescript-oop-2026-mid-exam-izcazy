// Write your code below
const grading = Number(process.argv[2]);
if(isNaN(grading) || grading < 0 || grading > 100 ){
    console.log('Invalid input');
    process.exit(1);
}
else if(grading <= 100 && grading >= 80 ){
    console.log('A');
}
else if(grading <= 79 && grading >= 70 ){
    console.log('B');
}
else if(grading <= 69 && grading >= 60 ){
    console.log('C');
}
else if(grading <= 59 && grading >= 50 ){
    console.log('D');
}
else{
    console.log('F');
}
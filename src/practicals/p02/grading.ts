// Write your code below
const grading = Number(process.argv[2]);
if(isNaN(grading) || grading < 0 || grading > 100 ){
    console.log('Invalid input');
    process.exit();
}
else if(grading <= 100 && grading >= 80 ){
    console.log('Grade is A');
}
else if(grading <= 79 && grading >= 70 ){
    console.log('Grade is B');
}
else if(grading <= 69 && grading >= 60 ){
    console.log('Grade is C');
}
else if(grading <= 59 && grading >= 50 ){
    console.log('Grade is D');
}
else{
    console.log('Grade is F');
}
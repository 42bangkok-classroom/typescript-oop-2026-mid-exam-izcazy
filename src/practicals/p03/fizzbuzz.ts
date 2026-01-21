// Write your code below
const FizBuzz = Number(process.argv[2]);
if(isNaN(FizBuzz) || FizBuzz <= 0 ){
    process.exit(1);
}
for(let sum = 1; sum <= FizBuzz; sum++){
    
    /*if(sum/3 === 1 ){
        console.log('Fizz');
    }else if(sum/5 === 1){
        console.log('Buzz');
    }
    else if(sum/3 === 1  sum/5 === 1){
        console.log('FizzBuzz');
    }
    else{
        console.log(sum);
    }*/
    if(sum/3 === 1 && sum/5 === 1){
        console.log('FizzBuzz');
    }
    else if(sum/3 === 1){
        console.log('Fizz');
    }
    else if(sum/5 === 1){
        console.log('Buzz');
    }
    else{
        console.log(sum);
    }
}


    
    
    

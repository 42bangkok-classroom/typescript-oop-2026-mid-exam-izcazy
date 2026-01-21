// Write your code below
const num = Number(process.argv[2]);
if(isNaN(num) || num <= 0){
    process.exit(1);
}

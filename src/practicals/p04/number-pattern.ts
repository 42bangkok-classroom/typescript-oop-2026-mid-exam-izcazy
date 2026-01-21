// Write your code below

const num = Number(process.argv[2]);
if(isNaN(num) || num <= 0){
    process.exit();
}
for(let y = 1; y < num; y--){
    for(let i =0; i < num ; i++){
        let line = "";
        for(let j = 0; j < num - i - 1; j++){
        line += " ";
        }
        for(let k = 0; k < num; k++){
        line += "";
        }
    console.log(line);
  }
}

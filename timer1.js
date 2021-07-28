let args = process.argv;
args.splice(0, 2);
let newArr = [];
let newArgs = [];

for (let i = 0; i < args.length; i++) {
  newArr.push(parseInt(args[i]));
}
for(let j = 0; j < newArr.length; j++){
  if(!isNaN(newArr[j]) && newArr[j] >= 0){
    newArgs.push(newArr[j]);
  }
}

if(newArgs.length > 0){
  for (let i = 0; i < newArgs.length; i++) {
    setTimeout(() => {
      process.stdout.write(`${newArgs[i]} second !!\n`);
    }, newArgs[i] * 1000);
  }
}
  

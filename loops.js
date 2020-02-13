function forLoop(array) {
for (let i = 0; i<25; i +=1) {
array.push(i === 1 ? 'I am 1 strange loop.' : `I am ${i} strange loops.`);
}
return array;
}

function whileLoop(n){
  let countdown = n;
  return 'done';
  while (whileLoop(n)) {
    console.log(--countdown);
  }
}

function doWhileLoop(num){
function incrementVariable() {
  num = num + 1;
  return num;
}
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}

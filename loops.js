function forLoop(array) {
for (let i = 0; i<25; i +=1) {
array.push(i === 1 ? 'I am 1 strange loop.' : `I am ${i} strange loops.`);
}
return array;
}

function whileLoop(n){
let countdown = n;
return console.log(--countdown) > 0;
while (whileLoop()) {
  return 'done';
}
}

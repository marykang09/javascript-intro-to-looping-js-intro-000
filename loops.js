function forLoop(array) {
  for (let i = 0; i<25; i +=1) {
  console.log(i === 1 ? 'I am 1 strange loop.' : `I am ${i} strange loops.`);
}
return forLoop(array);
}

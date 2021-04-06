const revolvingBar = ['|', '/', '-', '\\'];
let step = 0;
let delay = 100;

while(delay < 1900){
  setTimeout(() => {
    process.stdout.write('\r' + revolvingBar[step % 4]);
    step++;
  }, delay);
  delay+= 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, 2000);


//process.stdout.write('hello from spinner1.js... \r');
const sentence = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0;
for (const char of sentence) {

    setTimeout(() => {
        process.stdout.write(`hello from spinner1.js... \r ${char}`);
      }, delay);
    delay += 100;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
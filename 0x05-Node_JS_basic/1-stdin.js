process.stdout.write('Welcome to Holberton School, what is your name?\n', (err) => {
  if (err) console.log(err);
});

process.stdin.on('data', (input) => {
  if (input) {
    const data = input.toString();
    process.stdout.write(`Your name is: ${data}\n`, (err) => {
      if (err) console.log(err);
    });
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
});

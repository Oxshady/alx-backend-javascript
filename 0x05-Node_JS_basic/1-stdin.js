process.stdout.write('Welcome to ALX, what is your name?\n', (err) => {
  if (err) console.log(err);
});

process.stdin.on('data', (input) => {
  if (input) {
    const data = input.toString().trim();
    process.stdout.write(`Your name is: ${data}`, (err) => {
      if (err) console.log(err);
    });
  }
});

process.on('end', () => {
  process.stdout.write('This important software is now closing\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
});

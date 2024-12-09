process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (input) => {
  const data = input.toString().trim();

  process.stdout.write(`Your name is: ${data}\n`);

  process.stdin.end(() => {
    process.stdout.write('This important software is now closing\n');
  });
});

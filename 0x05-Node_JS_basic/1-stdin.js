process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('info', (info) => {
    process.stdout.write(`Your name is: ${info.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('info', (info) => {
    process.stdout.write(`Your name is: ${info.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

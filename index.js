function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + ': ' + 'FizzBuzz');
    }

    if (i % 3 === 0) {
      console.log(i + ': ' + 'Fizz');
    }

    if (i % 5 === 0) {
      console.log(i + ': ' + 'Buzz');
    }
  }
}

function main() {
  fizzBuzz(100);
}

main();

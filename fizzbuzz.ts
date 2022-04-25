for (let idx = 1; idx < 101; idx++) {
  const isFizz = idx % 3 === 0;
  const isBuzz = idx % 5 === 0;
  if (isFizz && isBuzz) {
    console.log("FizzBuzz");
  } else if (isFizz) {
    console.log("Fizz");
  } else if (isBuzz) {
    console.log("Buzz");
  } else {
    console.log(idx);
  }
}

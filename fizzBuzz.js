  for (let i = 1; i <= 15; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("FizzBuzz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      default:
        console.log(i);
    }
  }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

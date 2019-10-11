
//Linear
function sheepJump(num) {
  let ticks = 0;
  let message;

  const arr = Array.from({ length: num }, (v, k) => k + 1);
  for (let i = arr.length; i >= 0; i--) {
    ticks++;
    if (i == 0) {
      message = `${i} All sheep jumped over the fence`;
      return { ticks, message };
    }
    message = `${i} Another sheep jumps over the fence`;
    console.log(message);
  }
}

// console.log(sheepJump(3));

//Constant
function powerCalculator(base, exp) {
  let ticks = 0;
  if (exp < 0) {
    return "exponent should be >= 0";
  }

  const value = Math.pow(base, exp);
  ticks++;
  return {
    value,
    ticks
  };
}

// console.log(powerCalculator(10, 3));

//Constant
function reverseString(input) {
  let ticks = 0;

  const reversedString = input
    .split("")
    .reverse()
    .join("");
  ticks++;
  return {
    ticks,
    reversedString
  };
}
// console.log(reverseString("oogabooasdsadsad"));

//Linear
function triangularNumber(num) {
  let ticks = 0;
  let sum = 1;
  if (num == 0) {
    return "value must be 1 or greater";
  }

  for (let i = 2; i < num + 1; i++) {
    ticks++;
    sum += i;
  }

  return {
    sum,
    ticks
  };
}

// console.log(triangularNumber(7));

// function stringSplitter(input, separator) {
//     let ticks = 0
//     let result

//     if(input.match(separator)) {
//         ticks++
//         result = input
//     }

//     return {
//         result, ticks
//     }

// }

// console.log(stringSplitter('shfjksdf////sdf', '/'));

//linear
function fibo(num) {
  const add = (a, b) => a + b;
  let ticks = 0;
  let sequence = [1, 1];
  if (num == 0) {
    return "value must be 1 or greater";
  }

  for (let i = 2; i < num; i++) {
    ticks++;
    const end = sequence.slice(-2).reduce(add);
    const newArr = [...sequence, end]
    sequence = newArr
  }

  return {
    sequence,
    ticks
  };
}

// console.log(fibo(5));

//constant
function makeFactorial(n) {
    let ticks = 0

    if(n <= 1) {
        return n
      }

      for (let i = n -1; i >= 1; i--) {
        ticks++
          n = n * i
      }


      return {
          n, ticks
      }
}

console.log(makeFactorial(12));
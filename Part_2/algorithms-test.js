

// QUESTION 1 //

//Linear time

function sheepJump(num) {
  if (num == 0) {
    console.log("All sheep jumped over the fence");
    return num;
  }
  console.log(`${num}: Another sheep jumps over the fence`);
  return sheepJump(num - 1);
}

sheepJump(3)

// QUESTION 2 //
//Linear Time

function powerCalculator(base, exp) {
  if (exp < 0) {
    return "exponent should be >= 0";
  }
  if (exp == 0) {
    return 1;
  }

  return base * powerCalculator(base, exp - 1);
}

// console.log(powerCalculator(10, 0));

// QUESTION 3 //


function reverseString(input, num = input.length) {
  if (num == 0) {
    console.log("base case");
    return input;
  }

  const rawArray = input.split("");
  const indexItem = rawArray.shift();
  rawArray.splice(num - 1, 0, indexItem);
  const joinedArr = rawArray.join("");
  num--;
  return reverseString(joinedArr, num);
}

// console.log(reverseString("wowowakjnskjfblkgrkdsgrslkg"));

// QUESTION 4 //

//no clue

// QUESTION 5 //

//oops
function stringSplitter(input) {
    const regex = "^[a-zA-Z0-9]+$";
    if(input.match(regex)) {
        return input
    }

    // const split = input.split('')
    // const filteredItem = split.find(item => !item.match(regex))
    // const newArr = split.filter(item => {
    //     return item !== filteredItem}
    //     )
    // const newInput = newArr.join('')
    // return stringSplitter(newInput)
    return input.split('/')
}


// console.log(stringSplitter('4/r@/////w'));

// QUESTION 6 //

function fibo(num, array = [1, 1]) {
  const add = (a, b) =>
  a + b
  if(array.length == num + (array.length -2)) {
    return array
  }


  const endArr = array.slice(-2)
  const fibNum = endArr.reduce(add)
  newArray = [...array, fibNum]
  num--
  return fibo(num, newArray)
}

// console.log(fibo(0));

// QUESTION 7 //
//Linear
function factorial(n) {
  if(n <= 1) {
    return n
  }

  return n * factorial(n-1)
}
// console.log(factorial(4));

// QUESTION 8 //
function mazeRunner(maze) {
  if (maze = 'e') {
    return 'maze complete!'
  }

  

}
//this is tough!

//
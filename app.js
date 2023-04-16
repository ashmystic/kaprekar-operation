// Get DOM elements
const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');
const resultField = document.getElementById('result');

// Function that takes a number input and returns its square
function squareNumber(num) {
  return num * num;
}

// Function that gets called when submit button is clicked
function handleSubmit() {
  // Get input value and convert to number
  const inputValue = Number(numberInput.value);

  // Check if input value is valid
  if (isNaN(inputValue)) {
    resultField.value = '';
    resultField.placeholder = 'Invalid input, please enter a number';
    return;
  }

  // Calculate the square of the input value
  // const result = squareNumber(inputValue);
  // const result = kaprekarConstant(inputValue);
  // const result = "It took " + kaprekarKernel(inputValue).iterations + " iterations";
  // const result = kaprekar(inputValue)
  const result = kaprekarStepsFull(inputValue)

  // Display the result in the result field
  resultText.value = result;
}

// Add event listener to submit button
submitButton.addEventListener('click', handleSubmit);






function kaprekar(num) {
  // Convert number to array of digits
  const digits = String(num).split('').map(Number);

  // Sort digits in ascending and descending order
  const asc = [...digits].sort((a, b) => a - b);
  const desc = [...digits].sort((a, b) => b - a);

  // Calculate Kaprekar difference and return result
  const diff = Number(desc.join('')) - Number(asc.join(''));
  console.log(diff);
  return diff;
}

function kaprekarSteps(num) {
  console.log(num);
  let result = '';
  let currNum = num;

  while (currNum !== 6174) {
    currNum++;
    console.log(currNum);
    const diff = kaprekar(currNum);
    console.log(diff);
    result += `${currNum} - ${kaprekar(currNum)} = ${diff}\n`;
  //   currNum = diff.toString().padStart(4, '0');
  }

  result += `The Kaprekar Constant is ${currNum}`;
  return result;
}

function kaprekarStepsFull(num) {
  // Validate input
  if (!Number.isInteger(num) || num < 1000 || num > 9999) {
    return "Input must be a four-digit integer.";
  }
  
  // Define Kaprekar kernel constant
  const KAPREKAR_CONSTANT = 6174;
  
  // Initialize step counter and result string
  let steps = 0;
  let result = "";
  
  // Loop until Kaprekar kernel constant is reached
  while (num !== KAPREKAR_CONSTANT) {
    // Convert number to array of digits and sort in ascending order
    let ascDigits = num.toString().padStart(4, "0").split("").sort((a, b) => a - b);
    
    // Convert number to array of digits and sort in descending order
    let descDigits = num.toString().padStart(4, "0").split("").sort((a, b) => b - a);
    
    // Combine digits into numbers and calculate differences
    let ascNum = ascDigits.join("");
    let descNum = descDigits.join("");
    let diff = descNum - ascNum;
    
    // Increment step counter and add step to result string
    steps++;
    result += `${descNum} - ${ascNum} = ${diff}\n`;
    
    // Set result of current iteration as input for next iteration
    num = diff;
  }
  
  // Add final step to result string
  result += `Kaprekar kernel constant: ${KAPREKAR_CONSTANT} reached in ${steps} steps`;
  
  // Return result string
  return result;
}


function kaprekarKernel(num) {
  let iterations = 0;

  // Continue iterating until the result is 6174
  while (num !== 6174) {
    num = kaprekar(num);
    iterations++;
  }

  return {result: num, iterations: iterations};
}



function kaprekarConstant(num) {
  let digits = num.toString().split('');

  // Pad with zeros to ensure the number has at least 4 digits
  while (digits.length < 4) {
    digits.push('0');
  }

  let iterations = 0;

  // Continue iterating until the result is a repeating sequence or 6174
  while (true) {
    // Sort digits in descending and ascending order
    let desc = digits.sort((a, b) => b - a);
    let asc = digits.sort((a, b) => a - b);

    // Convert sorted digits back to numbers and calculate the difference
    let descNum = parseInt(desc.join(''));
    let ascNum = parseInt(asc.join(''));
    let diff = descNum - ascNum;

    // If the result is a repeating sequence or 6174, return the constant and the number of iterations
    if (diff === 0 || diff === 6174) {
      let constant = diff === 0 ? 0 : 6174;
      // return { constant: constant, iterations: iterations + 1 };
      return "constant: " + constant + ", iterations: " + iterations + 1
    }

    // Convert the difference back to an array of digits
    digits = diff.toString().split('');

    // Pad with zeros to ensure the number has at least 4 digits
    while (digits.length < 4) {
      digits.push('0');
    }

    iterations++;
  }
}

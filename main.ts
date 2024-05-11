import inquirer from "inquirer";

const operations = ["Addition", "Subtraction", "Multiplication", "Division", "Exit"];

const getOperation = async (): Promise<string> => {
  const { operation } = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "Choose an operation:",
    choices: operations,
  });
  return operation;
};

const getNumbers = async (): Promise<number[]> => {
  const { num1, num2 } = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number:",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number:",
    },
  ]);
  return [num1, num2];
};

const performOperation = async () => {
  const operation = await getOperation();

  if (operation === "Exit") {
    console.log("Exiting the calculator. Goodbye!");
    return;
  }

  const [num1, num2] = await getNumbers();

  let result: number;

  switch (operation) {
    case "Addition":
      result = num1 + num2;
      console.log(`Result: ${num1} + ${num2} = ${result}`);
      break;
    case "Subtraction":
      result = num1 - num2;
      console.log(`Result: ${num1} - ${num2} = ${result}`);
      break;
    case "Multiplication":
      result = num1 * num2;
      console.log(`Result: ${num1} * ${num2} = ${result}`);
      break;
    case "Division":
      if (num2 === 0) {
        console.log("Error: Division by zero.");
      } else {
        result = num1 / num2;
        console.log(`Result: ${num1} / ${num2} = ${result}`);
      }
      break;
    default:
      console.log("Invalid operation. Please try again.");
      break;
  }

  performOperation();
};

console.log("Welcome to the CLI Calculator!");
performOperation();
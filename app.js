
const fruitVeg = ["APPLE", "PEAR", "LETTUCE", "CARROT", "SPINACH", "ORANGE", "GRAPE"];

const inputItems = [];

initialPrompt = () => {
  let ans = confirm("Do yo want to enter one of your five a day?");
  if (ans) {
    inputItemsFunc()
  }
};

inputItemsFunc = () => {
  let inputedItem = prompt("Please enter one of your five a day?");
  if (fruitVeg.includes(inputedItem.toUpperCase())) {
    inputItems.push(inputedItem);
    let ans2 = confirm("Do yo want to enter more fruit and veg?");
    if (ans2) {
      inputItemsFunc();
    } else {
      summaryFunc();
    }
  } else {
    alert("That is not fruit or veg, try again");
    inputItemsFunc();
  }
}

summaryFunc = () => {
  if (inputItems.length >= 5) {
    alert("You have eaten your five a day!")
  } else {
    alert(`You have not eaten your five a day, you have ${5 
      - inputItems.length} pieces of fruit or veg left to eat.`)
  } 
}

initialPrompt();

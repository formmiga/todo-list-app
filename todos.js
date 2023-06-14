let input = prompt("what would you like to do?");
const todos = ["Clean litter box", "Buy cat food", "Adopt a new kitty!"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("------------");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("------------");
  }
  input = prompt("what would you like to do?");
}
console.log("ok, you quit the app!");

let input = prompt("what would you like to do?");
const todos = ["Clean litter box", "Buy cat food", "Adopt a new kitty!"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("------------");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("------------");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what's the new Todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const indexString = prompt("Ok, enter an index to delete.");
    const index = parseInt(indexString);
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index.");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("ok, you quit the app!");

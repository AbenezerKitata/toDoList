import "./styles.css";
import { saveUserInput } from "./userInput";
import { giveAtt, todoPage } from "./todo";
import { makeimportant} from "./domStuff";
// var moment = require("moment");

// var a = moment().toString();
// console.log(a);

document.getElementById("create-to-do").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .getElementById("wrapper")
    .parentNode.removeChild(document.getElementById("wrapper"));
  const createTodo = todoPage();
  
});

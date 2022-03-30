import "./styles.css";
import { saveText } from "./saveText";
var moment = require("moment");

var a = moment().toString()
console.log(a);


const saver = saveText();
// saver.elements.taskDate.value = now.getFullYear()
const btn = saver.elements.submitBtn;
// for our submit button
btn.addEventListener("click", (e) => {
  e.preventDefault();
  //get task name
  saver.user.taskName = saver.elements.taskName.value;
  //get notes
  saver.user.notes = saver.elements.notes.value;
  //get tags
  let splittedTags = saver.elements.tags.value.split(",");
  saver.user.tags = splittedTags.map((itm) => itm.trim());
  //get time
  saver.user.time = saver.elements.taskTime.value
  //get date
  saver.user.date = saver.elements.taskDate.value
  console.log(saver.user);
});
const important = saver.elements.importantBtn;
important.addEventListener("click", (e) => {
  e.preventDefault();
  if (saver.user.important == true) {
    important.classList.remove("addColor");
    saver.user.important = false;
  } else {
    important.classList.add("addColor");
    saver.user.important = true;
  }
});

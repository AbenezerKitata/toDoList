import "./styles.css";
import { saveUserInput } from "./userInput";
import { giveAtt, todoPage } from "./todo";
var moment = require("moment");

var a = moment().toString();
console.log(a);
const saver = saveUserInput();

document.getElementById("create-to-do").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .getElementById("wrapper")
    .parentNode.removeChild(document.getElementById("wrapper"));
  const createTodo = todoPage();
});

const usersave = (() => {
  // document.getElementById('task-date').value = now.getFullYear()
  const btn = document.getElementById("submitBtn");
  // for our submit button
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    //get task name
    saver.task.taskName = document.getElementById("task").value;
    //get notes
    saver.task.notes = document.getElementById("notes").value;
    //get tags
    let splittedTags = document.getElementById("tags").value.split(",");
    saver.task.tags = splittedTags.map((itm) => itm.trim());
    //get time
    saver.task.time = document.getElementById("task-time").value;
    //get date
    saver.task.date = document.getElementById("task-date").value;
    console.log(saver.task);
  });
})();
const makeimportant = (() => {
  const important = document.getElementById("importantBtn");
  important.addEventListener("click", (e) => {
    e.preventDefault();
    if (saver.task.important == true) {
      important.classList.remove("addColor");
      saver.task.important = false;
    } else {
      important.classList.add("addColor");
      saver.task.important = true;
    }
  });
})();

const taskMaker = () => {
  const div = document.getElementById("checklistContainer");
  document
    .getElementById("askCheckList")
    .parentNode.removeChild(document.getElementById("askCheckList"));
  const addbtn = document.createElement("button");
  addbtn.textContent = "+";
  addbtn.classList.add("btns", "text-lg");
  div.appendChild(addbtn);

  addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputContainer = document.createElement("div");
    const input = document.createElement("input");
    inputContainer.appendChild(input);
    inputContainer.classList.add("flex", "flex-col", "gap-1");
    input.setAttribute("placeholder", "Name of task");
    input.classList.add("input");
    div.insertBefore(inputContainer, addbtn);
    const deleteBtn = document.createElement("a");
    deleteBtn.textContent = "remove";
    deleteBtn.classList.add("removebtn");
    inputContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      inputContainer.parentNode.removeChild(inputContainer);
    });
  });
};
const changeTxtColor = (() => {
  const askCheckList = document.getElementById("askCheckList");
  askCheckList.addEventListener("click", (e) => {
    e.preventDefault();
    taskMaker();
  });
})();
const addProjects = (() => {
  const addToProjectsContainer = document.getElementById(
    "add-to-project-container"
  );
  const addToProject = document.getElementById("addToProject");
  addToProject.addEventListener("click", (e) => {
    e.preventDefault();
    addToProject.parentNode.removeChild(addToProject);
    const yourProjects = document.createElement("h2");
    yourProjects.textContent = "Your Projects";
    yourProjects.classList.add(
      "cursor-default",
      "text-blue-500",
      "self-center"
    );
    addToProjectsContainer.appendChild(yourProjects);
    const projectsContainer = document.createElement("div");
    addToProjectsContainer.appendChild(projectsContainer);
    projectsContainer.classList.add(
      "w-32",
      "border-b-2",
      "border-x-2",
      "border-gray-400",
      "flex",
      "flex-wrap",
      "p-2",
      "justify-center",
      "self-center"
    );
    projectsContainer.id = "projectsContainer";
    const noprojects = giveAtt("p", "noprojects", "No Projects");
    noprojects.classList.add("text-xs", "text-red-400", "cursor-default");
    projectsContainer.appendChild(noprojects);
  });
})();

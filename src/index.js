import "./styles.css";
import { domElements } from "./domElements";
import { saveUserInput } from "./userInput";
import { giveAtt, todoPage } from "./todo";
var moment = require("moment");

var a = moment().toString();
console.log(a);

const dom = domElements();
const saver = saveUserInput();
const createTodo = todoPage();

const usersave = (() => {
  // dom.elements.taskDate.value = now.getFullYear()
  const btn = dom.elements.submitBtn;
  // for our submit button
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    //get task name
    saver.task.taskName = dom.elements.taskName.value;
    //get notes
    saver.task.notes = dom.elements.notes.value;
    //get tags
    let splittedTags = dom.elements.tags.value.split(",");
    saver.task.tags = splittedTags.map((itm) => itm.trim());
    //get time
    saver.task.time = dom.elements.taskTime.value;
    //get date
    saver.task.date = dom.elements.taskDate.value;
    console.log(saver.task);
  });
})();
const makeimportant = (() => {
  const important = dom.elements.importantBtn;
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
  const div = dom.elements.checklistContainer;
  dom.elements.askCheckList.parentNode.removeChild(dom.elements.askCheckList);
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
  const askCheckList = dom.elements.askCheckList;
  askCheckList.addEventListener("click", (e) => {
    e.preventDefault();
    taskMaker();
  });
})();
const addProjects = (() => {
  const addToProjectsContainer = dom.elements.addToProjectsContainer;
  const addToProject = dom.elements.addToProjects;
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

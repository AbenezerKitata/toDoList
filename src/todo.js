function giveAtt(elemType, id, textContent) {
  const element = document.createElement(elemType);
  element.id = id;
  element.textContent = textContent;
  return element;
}
const todoPage = () => {
  const wrapper = giveAtt("div", "wrapper", "");
  wrapper.classList.add("todoWrapper");
  document.body.prepend(wrapper);
  const todoContainer = giveAtt("div", "todoContainer", "");
  todoContainer.classList.add("todoContainer");
  wrapper.appendChild(todoContainer);
  const todoForm = giveAtt("form", "todoForm", "");
  todoForm.classList.add("todoForm");
  todoContainer.appendChild(todoForm);
  //   title
  const todoTitle = giveAtt("h1", "todoTitle", "To Do List");
  todoTitle.classList.add("mb-5", "text-gray-500");
  //   input
  const taskName = giveAtt("input", "task", "");
  taskName.classList.add("input");
  taskName.setAttribute("placeholder", "Name of Task");
  //checklist container
  const checklistContainer = giveAtt("div", "checklistContainer", "");
  checklistContainer.classList.add("checklistContainer");
  const askCheckList = giveAtt("a", "askCheckList", "checklist");
  askCheckList.classList.add("askChecklist");
  checklistContainer.appendChild(askCheckList);
  //task time
  const taskTime = giveAtt("input", "task-time", "");
  taskTime.setAttribute("type", "time");
  taskTime.setAttribute("value", "12:00");
  taskTime.classList.add("input", "rounded-b");
  //task date
  const taskDate = giveAtt("input", "task-date", "");
  taskDate.setAttribute("type", "date");
  taskDate.classList.add("input", "rounded-t", "!px-2");
  const breakDecoration = document.createElement("div");
  breakDecoration.classList.add("border-b-2", "w-36");
  // Important
  const importantBtn = giveAtt("button", "importantBtn", "important!");
  importantBtn.classList.add("btns");
  const notesContainer = giveAtt("fieldset", "", "");
  notesContainer.classList.add("relative");
  const notes = giveAtt("textarea", "notes", "");
  notes.classList.add("input", "!h-14");
  notes.setAttribute("placeholder", "notes");
  notesContainer.append(notes);
  const tagsContainer = giveAtt("fieldset", "", "");
  tagsContainer.classList.add("relative");
  const tags = giveAtt("input", "tags", "");
  tags.classList.add("input");
  tags.setAttribute("placeholder", "tags");
  tagsContainer.append(tags);

  const addtoProjectContainer = giveAtt("div", "add-to-project-container", "");
  addtoProjectContainer.classList.add("flex", "flex-col", "w-36");
  const addToProject = giveAtt("button", "addToProject", "+Add to project");
  addToProject.classList.add("btns", "text-xs");
  addtoProjectContainer.appendChild(addToProject);
  const submitBtn = giveAtt("button", "submitBtn", "Submit");
  submitBtn.classList.add("btns");

  todoForm.append(
    todoTitle,
    taskName,
    checklistContainer,
    taskTime,
    taskDate,
    breakDecoration,
    importantBtn,
    notesContainer,
    tagsContainer,
    addtoProjectContainer,
    submitBtn
  );
  return{important: importantBtn}
};
export { giveAtt, todoPage };

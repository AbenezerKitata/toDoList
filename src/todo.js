function giveAtt(elemType, id, textContent) {
  const element = document.createElement(elemType);
  element.id = id;
  element.textContent = textContent;
  return element;
}
function toStr(str) {
  const splitted = str
    .split(" ")
    .map((item) => `'${item}',`)
    .join(" ");
  return splitted;
}
const todoPage = () => {
  const wrapper = giveAtt("div", "wrapper", "");
  wrapper.classList.add(
    "container",
    "mt-28",
    "grid",
    "justify-center",
    "items-center"
  );
  document.body.prepend(wrapper);
  const todoContainer = giveAtt("div", "todoContainer", "");
  todoContainer.classList.add(
    "container",
    "flex",
    "justify-center",
    "border-2",
    "border-gray-200",
    "w-80"
  );
  wrapper.appendChild(todoContainer);
  const todoForm = giveAtt("form", "todoForm", "");
  todoForm.classList.add(
    "container",
    "py-7",
    "flex",
    "flex-col",
    "justify-start",
    "items-center",
    "gap-3",
    "w-36"
  );
  todoContainer.appendChild(todoForm);
  //   title
  const todoTitle = giveAtt("h1", "todoTitle", "To Do List");
  todoTitle.classList.add("mb-5", "text-gray-700");
  const taskName = giveAtt("input", "task", "");
  //   input
  taskName.classList.add("input");
  taskName.setAttribute("placeholder", "Name of Task");
  //checklist container
  const checklistContainer = giveAtt("div", "checklistContainer", "");
  checklistContainer.classList.add(
    "w-32",
    "flex",
    "flex-col",
    "gap-3",
    "justify-center"
  );
  const askCheckList = giveAtt("a", "askCheckList", "checklist");
  askCheckList.classList.add(
    "text-xs",
    "cursor-pointer",
    "underline",
    "text-blue-700",
    "self-end",
    "font-josefine"
  );
  checklistContainer.appendChild(askCheckList);
  //task time
  const taskTime = giveAtt("input", "task-time", "");
  taskTime.setAttribute("type", "time");
  taskTime.setAttribute("value", "12:00");
  taskTime.classList.add("input", "rounded-b");
  //task date
  const taskDate = giveAtt("input", "task-date", "");
  taskDate.setAttribute("type", "date");
  taskDate.classList.add("input", "rounded-t");
  const breakDecoration = document.createElement("div");
  breakDecoration.classList.add("border-b-2", "w-36");
  // Important
  const importantBtn = giveAtt('button', "importantBtn", "important!");
  importantBtn.classList.add("btns")
  todoForm.append(
    todoTitle,
    taskName,
    checklistContainer,
    taskTime,
    taskDate,
    breakDecoration, importantBtn
  );
};
export { giveAtt, todoPage };

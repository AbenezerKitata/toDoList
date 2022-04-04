const saveUserInput = ()=>{
    const task = {
        important: false,
        notes: "",
      };
      return {task: task}
}

const usersave = () => {
  const saver = saveUserInput();
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
}
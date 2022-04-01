const domElements = () => {
    const elements = {
        taskName: document.getElementById('task'),
        submitBtn: document.getElementById("submitBtn"),
        importantBtn: document.getElementById("importantBtn"),
        notes: document.getElementById("notes"),
        tags: document.getElementById("tags"),
        wrapper: document.getElementById('wrapper'),
        taskTime: document.getElementById('task-time'),
        taskDate: document.getElementById('task-date')
    }
  
  return { elements:elements};
};
export {domElements}
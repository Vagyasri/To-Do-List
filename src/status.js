const status = (checkbox, task) => {
  if (checkbox.checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

export default status;
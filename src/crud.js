export const createList = (task) => (
  {
    index: Date.now().toString(),
    description: task,
    completed: [],
  });

export const deleteList = () => {

};

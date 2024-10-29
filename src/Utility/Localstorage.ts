export const loadTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };
  
  export const saveTasksToLocalStorage = (tasks: any[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
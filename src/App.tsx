import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import TaskList from './Component/TaskList';
import { Task, TaskStatus } from './Types/types';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from './Utility/Localstorage';
import { v4 as uuidv4 } from 'uuid';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasksFromLocalStorage());

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (title: string, subtitle: string, label: Task['label'], timeEstimate: number) => {
    const newTask: Task = { id: uuidv4(), title, subtitle, label, timeEstimate, status: 'Pending' };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskCompletion = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const categorizedTasks = {
    Pending: tasks.filter((task) => task.status === 'Pending'),
    ToDo: tasks.filter((task) => task.status === 'To-Do'),
    Doing: tasks.filter((task) => task.status === 'Doing'),
    Done: tasks.filter((task) => task.status === 'Done'),
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
        Task Management App
      </Typography>
      <Grid container spacing={4}>
        {Object.keys(categorizedTasks).map((status) => (
          <Grid item xs={12} sm={6} md={3} key={status}> 
            <TaskList
              title={status}
              tasks={categorizedTasks[status as keyof typeof categorizedTasks]}
              onToggleComplete={toggleTaskCompletion}
              onDelete={deleteTask}
              onAddTask={addTask}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;

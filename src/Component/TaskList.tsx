import React from 'react';
import { Box, Modal, Button, Typography, Grid } from '@mui/material';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';
import { Task, TaskListProps } from '../Types/types';

const TaskList: React.FC<TaskListProps> = ({ title, tasks, onToggleComplete, onDelete, onAddTask }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} key={task.id}>
            <TaskItem task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={openModal}
        variant="contained"
        sx={{ mt: 2, display: 'block', mx: 'auto' }}
      >
        Add Task
      </Button>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={{ padding: 3, margin: 'auto', mt: 4, maxWidth: 400, backgroundColor: 'white', borderRadius: 2 }}>
          <AddTaskForm onAddTask={onAddTask} />
        </Box>
      </Modal>
    </Box>
  );
};

export default TaskList;

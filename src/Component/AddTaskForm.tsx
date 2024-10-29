import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { AddTaskFormProps } from '../Types/types';

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [label, setLabel] = useState<'Important' | 'Done' | 'Test'>('Important');
  const [timeEstimate, setTimeEstimate] = useState<number>(1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddTask(title, subtitle, label, timeEstimate);
    setTitle('');
    setSubtitle('');
    setLabel('Important');
    setTimeEstimate(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        fullWidth
        label="Subtitle"
        variant="outlined"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        label="Label"
        variant="outlined"
        value={label}
        onChange={(e) => setLabel(e.target.value as 'Important' | 'Done' | 'Test')}
        select
        SelectProps={{
          native: true,
        }}
        sx={{ mt: 2 }}
      >
        <option value="Important">Important</option>
        <option value="Done">Done</option>
        <option value="Test">Test</option>
      </TextField>
      <TextField
        fullWidth
        type="number"
        label="Time Estimate (hrs)"
        variant="outlined"
        value={timeEstimate}
        onChange={(e) => setTimeEstimate(Number(e.target.value))}
        required
        sx={{ mt: 2 }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
      Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;

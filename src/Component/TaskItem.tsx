import React from 'react';
import { Box, Typography, IconButton, Checkbox, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TaskItemProps, TaskStatus } from '../Types/types';

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (newStatus?: TaskStatus) => {
    if (newStatus) onToggleComplete(task.id, newStatus);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: task.status === 'Done' ? 'green' : 'grey',
        backgroundColor: task.status === 'Done' ? '#e8f5e9' : '#f5f5f5',
      }}
    >
      <Typography variant="h6" sx={{ textDecoration: task.status === 'Done' ? 'line-through' : 'none' }}>
        {task.title}
      </Typography>
      <Typography color="textSecondary">{task.subtitle}</Typography>
      <Typography color="textSecondary">Label: {task.label}</Typography>
      <Typography color="textSecondary">Time Estimate: {task.timeEstimate} hrs</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
        <Checkbox
          checked={task.status === 'Done'}
          onChange={() => onToggleComplete(task.id, task.status === 'Done' ? 'Pending' : 'Done')}
          color="primary"
        />
        <Box>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleMenuClose()}>
            {['Pending', 'To-Do', 'Doing', 'Done'].map((status) => (
              <MenuItem key={status} onClick={() => handleMenuClose(status as TaskStatus)}>
                {status}
              </MenuItem>
            ))}
          </Menu>
          <IconButton onClick={() => onDelete(task.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskItem;

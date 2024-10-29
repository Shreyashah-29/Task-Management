export type TaskStatus = 'Pending' | 'To-Do' | 'Doing' | 'Done';

export interface Task {
  id: string;
  title: string;
  subtitle: string;
  label: 'Important' | 'Done' | 'Test';
  timeEstimate: number;
  status: TaskStatus;
}

export interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string, newStatus: TaskStatus) => void;
  onDelete: (id: string) => void;
}

export interface AddTaskFormProps {
  onAddTask: (title: string, subtitle: string, label: Task['label'], timeEstimate: number) => void;
}

export interface TaskListProps {
  title: string;
  tasks: Task[];
  onToggleComplete: (id: string, newStatus: Task['status']) => void;
  onDelete: (id: string) => void;
  onAddTask: (title: string, subtitle: string, label: Task['label'], timeEstimate: number) => void;
}

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Task Manager App', () => {
  test('renders task manager title', () => {
    render(<App />);
    const titleElement = screen.getByText(/task manager/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<App />);
    const addButton = screen.getByText(/add task/i);
    fireEvent.click(addButton);

    const titleInput = screen.getByLabelText(/title/i);
    fireEvent.change(titleInput, { target: { value: 'Test Task' } });

    const subtitleInput = screen.getByLabelText(/subtitle/i);
    fireEvent.change(subtitleInput, { target: { value: 'This is a test.' } });

    const timeInput = screen.getByLabelText(/time to complete \(hrs\)/i);
    fireEvent.change(timeInput, { target: { value: '2' } });

    const submitButton = screen.getByRole('button', { name: /add task/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/test task/i)).toBeInTheDocument();
  });
});

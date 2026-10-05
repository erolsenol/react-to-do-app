import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import App from './App';

beforeEach(() => localStorage.clear());
afterEach(cleanup);

describe('to-do list', () => {
  it('adds, completes, and removes a task', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('New task'), { target: { value: '  Ship the page  ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add task' }));
    expect(screen.getByText('Ship the page')).toBeTruthy();
    expect(screen.getByText('1 remaining')).toBeTruthy();
    fireEvent.click(screen.getByRole('checkbox', { name: 'Ship the page' }));
    expect(screen.getByText('0 remaining')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Remove Ship the page' }));
    expect(screen.getByText('Your list is clear. Add a task to get started.')).toBeTruthy();
  });

  it('ignores invalid stored data and blank tasks', () => {
    localStorage.setItem('erolsenol.todos.v1', '{invalid');
    render(<App />);
    fireEvent.change(screen.getByLabelText('New task'), { target: { value: '   ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add task' }));
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);
  });
});

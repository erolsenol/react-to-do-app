import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

beforeEach(() => localStorage.clear());
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

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

describe('storage recovery', () => {
  it('keeps editing usable when saving fails and clears the warning after recovery', () => {
    render(<App />);
    const save = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new DOMException('Quota exceeded', 'QuotaExceededError'); });
    fireEvent.change(screen.getByLabelText('New task'), { target: { value: 'Keep working' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add task' }));
    expect(screen.getByText('Keep working')).toBeTruthy();
    expect(screen.getByRole('alert')).toBeTruthy();
    expect((screen.getByLabelText('New task') as HTMLInputElement).value).toBe('');
    fireEvent.click(screen.getByRole('checkbox', { name: 'Keep working' }));
    expect(screen.getByText('0 remaining')).toBeTruthy();
    save.mockRestore();
    fireEvent.click(screen.getByRole('checkbox', { name: 'Keep working' }));
    expect(screen.queryByRole('alert')).toBeNull();
    cleanup();
    render(<App />);
    expect(screen.getByText('Keep working')).toBeTruthy();
  });

  it('renders with inaccessible storage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new DOMException('Blocked', 'SecurityError'); });
    render(<App />);
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);
  });

  it('discards invalid records and duplicate IDs without breaking valid tasks', () => {
    localStorage.setItem('erolsenol.todos.v1', JSON.stringify([
      null, { id: '', title: 'Empty id', completed: false },
      { id: 'a', title: 'Valid task', completed: false },
      { id: 'a', title: 'Duplicate', completed: true },
      { id: 'b', title: ' ', completed: false },
      { id: 'c', title: 'x'.repeat(201), completed: false },
    ]));
    render(<App />);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getByText('Valid task')).toBeTruthy();
  });
});

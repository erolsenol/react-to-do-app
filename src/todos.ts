export interface Todo {
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
}

export const storageKey = 'erolsenol.todos.v1';

function isTodo(value: unknown): value is Todo {
  return typeof value === 'object' && value !== null &&
    'id' in value && typeof value.id === 'string' && value.id.trim().length > 0 &&
    'title' in value && typeof value.title === 'string' && value.title.trim().length > 0 && value.title.length <= 200 &&
    'completed' in value && typeof value.completed === 'boolean';
}

export function readTodos(): Todo[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    if (!Array.isArray(value)) return [];
    const ids = new Set<string>();
    return value.filter(isTodo).filter((todo) => {
      if (ids.has(todo.id)) return false;
      ids.add(todo.id);
      return true;
    });
  } catch {
    // Storage may be unavailable in private or restricted browser contexts.
    return [];
  }
}

export function writeTodos(todos: readonly Todo[]): boolean {
  try {
    localStorage.setItem(storageKey, JSON.stringify(todos));
    return true;
  } catch {
    return false;
  }
}

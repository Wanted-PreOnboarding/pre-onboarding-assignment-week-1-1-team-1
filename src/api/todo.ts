import api from 'api/interceptor';

interface ITodo {
  todo: string;
  id: number;
  isCompleted: boolean;
}

class Todo {
  async createTodo(todo: string) {
    const res = await api.post('/todos', {
      todo: todo,
      isCompleted: false,
    });
    return res;
  }

  async getTodos() {
    const res = await api.get('/todos');
    return res;
  }

  async updateTodo({ id, todo, isCompleted }: ITodo) {
    const res = await api.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    });
    return res;
  }

  async deleteTodo(id: number) {
    const res = await api.delete(`/todos/${id}`);
    return res;
  }
}

export default new Todo();

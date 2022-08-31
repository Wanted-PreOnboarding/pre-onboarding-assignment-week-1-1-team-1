export interface UpdateTodo {
  checkTodoId: number;
  todo?: string;
  editText?: string;
  curCheckState: boolean;
}

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

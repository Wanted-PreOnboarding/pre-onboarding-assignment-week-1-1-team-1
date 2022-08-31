export interface UpdateTodo {
  checkTodoId: number;
  todo?: string;
  editText?: string;
  curCheckState: boolean;
}

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

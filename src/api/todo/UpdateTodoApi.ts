import { apiBase } from 'api/api';

import { UpdateTodo } from 'types/todo';

import { AxiosError } from 'axios';

export default function UpdateTodoApi({ checkTodoId, editText, curCheckState }: UpdateTodo) {
  const token = localStorage.getItem('login-token');

  if (token) {
    try {
      apiBase.put(
        `/todos/${checkTodoId}`,
        { todo: editText, isCompleted: curCheckState },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }
  }
}

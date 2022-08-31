import { apiBase } from 'api/api';

import { AxiosError } from 'axios';

interface PropsType {
  deleteTodoId: number;
}

export default function DeleteTodoApi({ deleteTodoId }: PropsType) {
  const token = localStorage.getItem('login-token');
  if (token) {
    try {
      apiBase.delete(`/todos/${deleteTodoId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }
  }
}

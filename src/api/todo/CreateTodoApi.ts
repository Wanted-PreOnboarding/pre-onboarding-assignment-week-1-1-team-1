import { apiBase } from 'api/api';

import { AxiosError } from 'axios';

interface PropsType {
  text: string;
}

export default function CreateTodoApi({ text }: PropsType) {
  const token = localStorage.getItem('login-token');

  if (token) {
    try {
      apiBase.post(
        `/todos/`,
        { todo: text },
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

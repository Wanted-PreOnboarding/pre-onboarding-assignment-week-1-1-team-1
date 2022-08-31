import { apiBase } from 'api/api';

import { AxiosError } from 'axios';

export default async function GetTodoApi() {
  const token = localStorage.getItem('login-token');

  if (token) {
    let response;
    try {
      response = await apiBase.get(`/todos`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }

    if (response !== undefined) {
      return response.data;
    }
  }
}

import { apiBase } from 'api/api';

import { AxiosError } from 'axios';

interface PropsType {
  email: string;
  password: string;
}

export default async function SignInApi({ email, password }: PropsType) {
  let response;

  try {
    response = await apiBase.post(`/auth/signin`, {
      email,
      password,
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
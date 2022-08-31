import api from 'api/interceptor';
import { AxiosResponse } from 'axios';
import { setAccessToken } from 'utils/tokenProvider';

interface IProps {
  email: string;
  password: string;
}

class Auth {
  async signUp({ email, password }: IProps) {
    const res: AxiosResponse = await api.post('/auth/signup', {
      email: email,
      password: password,
    });
    return res;
  }

  async login({ email, password }: IProps) {
    const res: AxiosResponse = await api.post('/auth/signin', {
      email: email,
      password: password,
    });

    if (res.status === 200) {
      setAccessToken(res.data.access_token);
    }

    return res;
  }
}

export default new Auth();

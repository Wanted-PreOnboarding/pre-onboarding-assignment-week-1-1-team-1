import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'components/auth/AuthForm';

export default function Auth() {
  const navigate = useNavigate();
  const checkToken = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      navigate('/todo');
    }
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <AuthForm />
    </main>
  );
}

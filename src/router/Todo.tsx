import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';

import GetTodoApi from 'api/todo/GetTodoApi';

export default function Todo() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  const checkToken = () => {
    const token = localStorage.getItem('login-token');
    if (!token) {
      navigate('/');
    }
  };

  const getToDoList = () => {
    GetTodoApi().then(res => {
      setTodos(res);
    });
  };

  useEffect(() => {
    checkToken();
    getToDoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <main
      style={{
        margin: '0 auto',
        width: '80%',
        textAlign: 'center',
      }}
    >
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TodoList todos={todos} />
        <TodoForm getToDoList={getToDoList} />
      </section>
    </main>
  );
}

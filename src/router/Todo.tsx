import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';

import Todo from 'api/todo';

export default function Todos() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  const checkToken = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/');
    }
  };

  const getToDoList = () => {
    Todo.getTodos().then((res: any) => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    checkToken();
    getToDoList();
  }, []);

  return (
    <main
      style={{
        margin: '0 auto',
        width: '80%',
        textAlign: 'center',
      }}
    >
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TodoList todos={todos} getToDoList={getToDoList} />
        <TodoForm getToDoList={getToDoList} />
      </section>
    </main>
  );
}

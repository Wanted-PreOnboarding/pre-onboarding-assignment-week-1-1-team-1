import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';

import Todo from 'api/todo';
import { PageBlock } from 'style/GlobalStyle';
import { BottomBtn, Btn } from 'style/TodoStyle';

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

  const logout = () => {
    localStorage.removeItem('accessToken');
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  useEffect(() => {
    checkToken();
    getToDoList();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <PageBlock>
        <TodoList todos={todos} getToDoList={getToDoList} />
        <TodoForm getToDoList={getToDoList} />
      </PageBlock>
      <BottomBtn>
        <Btn type="button" clasName="logoutBtn" onClick={logout}>
          로그아웃
        </Btn>
      </BottomBtn>
    </main>
  );
}

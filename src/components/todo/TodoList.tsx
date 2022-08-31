import { useState } from 'react';

import TodoUpdateForm from 'components/todo/TodoUpdateForm';

import Todo from 'api/todo';

import { TodoType } from 'types/todo';

interface PropsType {
  todos: TodoType[];
}

export default function TodoList({ todos }: PropsType) {
  const [editTodo, setEditTodo] = useState<number>();

  // todo를 삭제하는 함수
  const onDelete = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      Todo.deleteTodo(id);
    }
  };

  const onCheckTodo = (id: number, todo: string, isCompleted: boolean) => {
    isCompleted = !isCompleted;
    Todo.updateTodo({ id, todo, isCompleted });
  };

  return (
    <article style={{ width: '400px' }}>
      <h2>리스트</h2>
      {todos.length
        ? todos.map((todo: TodoType) => (
            <div key={todo.id}>
              {editTodo !== todo.id ? (
                <ul>
                  <li style={{ display: 'flex' }}>
                    <button
                      onClick={() => onCheckTodo(todo.id, todo.todo, todo.isCompleted)}
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                      }}
                    >
                      {todo.isCompleted ? '✅' : '🔲'}
                    </button>
                    <h3>{todo.todo}</h3>
                    <button
                      onClick={() => setEditTodo(todo.id)}
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                      }}
                    >
                      📝
                    </button>
                    <button
                      onClick={() => onDelete(todo.id)}
                      style={{
                        border: '0',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                      }}
                    >
                      ❌
                    </button>
                  </li>
                </ul>
              ) : (
                <TodoUpdateForm
                  todo={todo.todo}
                  checkTodoId={todo.id}
                  curCheckState={todo.isCompleted}
                  setEditTodo={setEditTodo}
                />
              )}
            </div>
          ))
        : '데이터가 없습니다.'}
    </article>
  );
}

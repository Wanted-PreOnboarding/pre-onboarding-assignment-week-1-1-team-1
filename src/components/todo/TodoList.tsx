import { useState } from 'react';

import TodoUpdateForm from 'components/todo/TodoUpdateForm';

import Todo from 'api/todo';

import { TodoType } from 'types/todo';
import { HeadBlock } from 'style/GlobalStyle';
import { CheckCircle, Edit, Remove, Text, TodoItemBlock, TodoListBlock } from 'style/TodoStyle';
import { MdDone, MdEdit, MdDelete } from 'react-icons/md';

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
    <TodoListBlock>
      <HeadBlock>
        <h2>리스트</h2>
      </HeadBlock>
      {todos.length
        ? todos.map((todo: TodoType) => (
            <div key={todo.id}>
              {editTodo !== todo.id ? (
                <ul>
                  <li>
                    <TodoItemBlock>
                      <CheckCircle
                        done={todo.isCompleted}
                        onClick={() => onCheckTodo(todo.id, todo.todo, todo.isCompleted)}
                      >
                        {todo.isCompleted && <MdDone />}
                      </CheckCircle>
                      <Text done={todo.isCompleted}>{todo.todo}</Text>
                      <Edit
                        done={todo.isCompleted}
                        onClick={() => setEditTodo(todo.id)}
                        style={{
                          border: '0',
                          cursor: 'pointer',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <MdEdit />
                      </Edit>
                      <Remove
                        done={todo.isCompleted}
                        onClick={() => onDelete(todo.id)}
                        style={{
                          border: '0',
                          cursor: 'pointer',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <MdDelete />
                      </Remove>
                    </TodoItemBlock>
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
    </TodoListBlock>
  );
}

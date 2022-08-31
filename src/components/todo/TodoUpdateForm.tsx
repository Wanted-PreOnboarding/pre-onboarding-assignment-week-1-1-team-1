import React, { Dispatch, SetStateAction, useState } from 'react';

import Todo from 'api/todo';
import { EditBtn, EditCancel, EditForm, EditInput, TodoItemBlock } from 'style/TodoStyle';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

interface PropsType {
  todo: string;
  checkTodoId: number;
  curCheckState: boolean;
  setEditTodo: Dispatch<SetStateAction<number | undefined>>;
  getTodoList: () => void;
}

export default function TodoUpdateForm({
  todo,
  checkTodoId: id,
  curCheckState: isCompleted,
  setEditTodo,
  getTodoList,
}: PropsType) {
  const [editText, setEditText] = useState(todo);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const onCancle = () => {
    if (window.confirm('수정을 취소하시겠습니까?')) {
      setEditTodo(undefined);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm('수정하시겠습니까?')) {
      const todo = editText;
      Todo.updateTodo({ id, todo, isCompleted })
        .then(() => getTodoList())
        .catch(err => {
          alert('todo 수정에 실패했습니다.');
        });
      setEditTodo(undefined);
    }
  };

  return (
    <TodoItemBlock>
      <EditForm>
        <EditInput type="text" value={editText} onChange={onChangeText} />
      </EditForm>
      <EditBtn onClick={onSubmit}>
        <MdCheckCircle />
      </EditBtn>
      <EditCancel onClick={onCancle}>
        <MdCancel />
      </EditCancel>
    </TodoItemBlock>
  );
}

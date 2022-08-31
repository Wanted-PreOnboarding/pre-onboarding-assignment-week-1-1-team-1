import React, { Dispatch, SetStateAction, useState } from 'react';

import UpdateTodoApi from 'api/todo/UpdateTodoApi';

interface PropsType {
  todo: string;
  checkTodoId: number;
  curCheckState: boolean;
  setEditTodo: Dispatch<SetStateAction<number | undefined>>;
}

export default function TodoUpdateForm({
  todo,
  checkTodoId,
  curCheckState,
  setEditTodo,
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
      UpdateTodoApi({ checkTodoId, editText, curCheckState });
      setEditTodo(undefined);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <form onSubmit={onSubmit}>
        <input type="text" value={editText} onChange={onChangeText} />
        <input type="submit" value="수정" style={{ margin: '0 10px' }} />
      </form>
      <button
        onClick={onCancle}
        style={{
          border: '0',
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
      >
        ❌
      </button>
    </div>
  );
}

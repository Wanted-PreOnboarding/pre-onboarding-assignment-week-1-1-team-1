import React, { useState } from 'react';

import Todo from 'api/todo';

interface PropsType {
  getToDoList: () => void;
}

export default function TodoForm({ getToDoList }: PropsType) {
  const [text, setText] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Todo.createTodo(text).then(() => getToDoList());
    setText('');
    getToDoList();
  };
  return (
    <article style={{ width: '216px' }}>
      <h2>ToDo 작성</h2>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="할일..."
          onChange={onChangeText}
          name="text"
          style={{ marginBottom: '10px' }}
        />
        <input type="submit" value="추가" />
      </form>
    </article>
  );
}

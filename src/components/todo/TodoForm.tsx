import React, { useState } from 'react';

import Todo from 'api/todo';
import {
  InsertFormPostioner,
  InsertFrom,
  Input,
  Btn,
  CircleButton,
  CreateBtnBlock,
} from 'style/TodoStyle';
import { MdAdd } from 'react-icons/md';

interface PropsType {
  getToDoList: () => void;
}

export default function TodoForm({ getToDoList }: PropsType) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Todo.createTodo(text)
      .then(() => getToDoList())
      .catch(err => {
        alert('todo 생성에 실패했습니다.');
      });
    setText('');
    getToDoList();
    setOpen(false);
  };
  return (
    <>
      {open && (
        <InsertFormPostioner>
          <InsertFrom onSubmit={onSubmit}>
            <Input
              type="text"
              value={text}
              placeholder="할일..."
              onChange={onChangeText}
              name="text"
              style={{ marginBottom: '10px' }}
            />
            <CreateBtnBlock>
              <Btn
                className="del-btn"
                type="button"
                onClick={() => {
                  setOpen(false);
                  setText('');
                }}
              >
                취소
              </Btn>
              <Btn type="submit" value="추가">
                추가
              </Btn>
            </CreateBtnBlock>
          </InsertFrom>
        </InsertFormPostioner>
      )}
      <CircleButton
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
      >
        <MdAdd />
      </CircleButton>
    </>
  );
}

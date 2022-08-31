import styled, { css } from "styled-components";

///@ TodoPage
export const BottomBtn = styled.div`
  margin: 0 auto;
  padding: 0 32px;
  width: 512px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logoutBtn {
    border: 1px solid #ff6b6b;
    color: #ff6b6b;

    &:hover {
      border: 2px solid #ff8787;
      color: #d10000;
    }
    &:active {
      border: 2px solid #ff6b6b;
      background: #ff6b6b;
      color: #fff;
    }
  }
`;

///@ TodoList
export const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow: auto;
`;

export const TodoListTitle = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  padding: 20px;
  padding-top: 40px;
`;

export const TodoListText = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 10px;
`;

///@ TodoItem
export const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px; //아이콘 크기
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

export const Text = styled.div`
  flex: 1;
  line-height: 30px;
  font-size: 20px;
  color: #495057;
  overflow: auto;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

export const Edit = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-left: 12px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #6d6d6e;
  }
`;

export const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }

    ${Edit} {
      opacity: 1;
    }
  }
`;

export const EditForm = styled.form`
  flex: 1;
`;

export const EditInput = styled.input`
  color: #495057;
  overflow: auto;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const EditBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-left: 12px;
  color: #dee2e6;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: #20c997;
  }
`;
export const EditCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

///@ TodoCreate
export const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40px;

  border: none;
  outline: none;

  transition: 0.125s all ease-in;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

export const InsertFormPostioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

export const InsertFrom = styled.form`
  background: #f8f9fa;
  padding: 32px;
  /* padding-bottom: 72px; */
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 30px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const CreateBtnBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .del-btn {
    border: 1px solid #ff6b6b;
    color: #ff6b6b;

    &:hover {
      border: 2px solid #ff8787;
      color: #d10000;
    }
    &:active {
      border: 2px solid #ff6b6b;
      background: #ff6b6b;
      color: #fff;
    }
  }
`;

export const Btn = styled.button`
  border: 0;
  outline: 0;
  width: 140px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #20c997;
  color: #20c997;
  background-color: #f8f9fa;

  &:hover {
    /* background: #7edec5; */
    border: 2px solid #0fda9e;
    color: #158765;
  }
  &:active {
    background: #1cb386;
    border: 2px solid #1cb386;
    color: #fff;
  }
`;

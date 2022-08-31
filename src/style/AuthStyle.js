import styled, { css } from 'styled-components';

export const AuthFormStyle = styled.form`
  width: 100%;
  padding: 32px;
  padding-bottom: 124px;
  margin: auto;
`;

export const AuthLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
  padding-left: 6px;
  padding-bottom: 10px;
`;

export const AuthInput = styled.input`
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;

  ${props =>
    props.isValid &&
    css`
      margin-bottom: 26px;
    `}
`;

// export const AuthGuide = styled.div`
//   padding-left: 6px;
//   margin-bottom: 26px;
//   font-size: 14px;
//   color: gray;
// `;

export const RBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegisterBtn = styled.input`
  color: #030001;
  font-size: 16px;
  padding-right: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 0;
  outline: 0;

  &:hover {
    color: #c92052;
  }
  &:active {
    color: #e60346;
  }
`;

export const LoginBtn = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #20c997;
  color: #20c997;
  background-color: #fff;

  ${props =>
    props.isFormValid &&
    css`
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
    `}

  &:disabled {
    border: 1px solid #dee2e6;
    color: #dee2e6;
  }
`;

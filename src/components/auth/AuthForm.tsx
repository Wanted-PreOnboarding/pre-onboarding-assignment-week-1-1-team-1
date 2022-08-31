import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from 'api/auth';
import { HeadBlock, PageBlock } from 'style/GlobalStyle';
import {
  AuthFormStyle,
  AuthInput,
  AuthLabel,
  LoginBtn,
  RBtnBox,
  RegisterBtn,
} from 'style/AuthStyle';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkInput, setCheckInput] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onAccount = () => {
    setNewAccount(true);
  };

  const onLogIn = () => {
    setNewAccount(false);
  };

  // 이메일과 패스워드가 유효한지 확인하는
  const validateInput = () => {
    const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/gm;

    if (emailRegex.test(email) && password.length >= 7) {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  };

  // 회원가입과 로그인을 위한 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newAccount) {
      Auth.signUp({ email, password }).then(res => {
        navigate('/todo');
      });
    } else {
      Auth.login({ email, password }).then(res => {
        navigate('/todo');
      });
    }
  };

  useEffect(() => {
    validateInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <PageBlock>
      <HeadBlock>
        <h1>회원가입 or 로그인</h1>
      </HeadBlock>
      <AuthFormStyle onSubmit={onSubmit}>
        <AuthLabel htmlFor="email">이메일</AuthLabel>
        <AuthInput
          type="email"
          id="email"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmail}
        />

        <AuthLabel htmlFor="password">비밀번호</AuthLabel>
        <AuthInput
          type="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />

        {/* 이메일과 패스워드가 유효한지 확인 후 버튼을 누를 수 있습니다. */}
        <RBtnBox>
          <RegisterBtn type="submit" onClick={onAccount} value="회원가입" disabled={!checkInput} />
        </RBtnBox>
        <LoginBtn type="submit" onClick={onLogIn} value="로그인" disabled={!checkInput} />
      </AuthFormStyle>
    </PageBlock>
  );
}

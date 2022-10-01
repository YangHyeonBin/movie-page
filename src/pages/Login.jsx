import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../reducers/user';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const onClickLogin = () => {
    dispatch(
      loginAction({
        email: email,
        pw: pw,
      })
    );

    navigate('/main');
  };

  return (
    <div>
      <h1>로그인을 해주세요</h1>
      <input
        type={'email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={'password'}
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <button onClick={onClickLogin}>액션 발동 후 페이지 이동</button>
    </div>
  );
}

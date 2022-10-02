import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
// import { loginAction } from '../reducers/user';
import { nicknameState } from '../components/recoil/User';

export default function Login() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');

  const setNicknameAtomState = useSetRecoilState(nicknameState);

  // const onClickLogin = () => {
  //   dispatch(
  //     loginAction({
  //       email: email,
  //       pw: pw,
  //     })
  //   );

  //   navigate('/main');
  // };

  const onClickUser = () => {
    setNicknameAtomState(nickname);

    navigate('/user');
  };

  return (
    // <div>
    //   <h1>로그인을 해주세요</h1>
    //   <input
    //     type={'email'}
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type={'password'}
    //     value={pw}
    //     onChange={(e) => setPw(e.target.value)}
    //   />
    //   <button onClick={onClickLogin}>액션 발동 후 페이지 이동</button>

    // </div>
    <div>
      <input
        type={'text'}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={onClickUser}>메인페이지로</button>
    </div>
  );
}

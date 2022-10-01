import React from 'react';
import { useSelector } from 'react-redux';

export default function Main() {
  // store 속 state? 리듀서?를 구독하기 위해 useSelectore 훅 사용
  // useSelector는 객체(=리듀서 함수의 리턴 값)를 리턴함
  // 어떤 리듀서인지는 useSelector의 인자에서 선택, state.userReducer와 같이!
  // 구조분해할당 이용
  const { email, pw } = useSelector((state) => state.userReducer);
  return (
    <div>
      <h1>유저 정보</h1>
      <div>
        <span>이메일: </span>
        <span>{email}</span>
      </div>
      <div>
        <span>비밀번호: </span>
        <span>{pw}</span>
      </div>
    </div>
  );
}

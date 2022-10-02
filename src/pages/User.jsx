import React from 'react';
import { useRecoilValue } from 'recoil';
import { nicknameState } from '../components/recoil/User';

export default function User() {
  const nicknameAtomState = useRecoilValue(nicknameState);
  return <div>Hello, {nicknameAtomState}!</div>;
}

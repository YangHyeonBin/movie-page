// // 유저 정보 관련 리듀서!

// // 초기 state 값 세팅
// const initialState = {
//   email: 'charles2323@naver.com',
//   pw: 'charles123',
// };

// // ACTION 함수 정의
// // 이 함수의 이름은 loginAction
// // 이 함수가 리턴하는 값은 액션 객체! (type, data란 프로퍼티를 가진)
// export const loginAction = (data) => {
//   return {
//     type: 'LOGIN',
//     data: data,
//   };
// };

// // 리듀서 함수 정의
// // 파라미터로 현재 state와 action 객체를 받음
// // action 객체는 위와 같이 type, data란 프로퍼티를 가진 객체
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN': {
//       return {
//         ...state,
//         email: action.data.email,
//         pw: action.data.pw,
//       };
//     }
//     default: {
//       return { ...state };
//     }
//   }
// };

// export default userReducer;

import React from 'react';
import {RecoilRoot} from "recoil";
import TodoList from "./TodoList";
// React + Typescript : Recoil 공식 문서의 튜토리얼에 나와있는 투두리스트 만들어보기 - 01 : atom 을 사용한 항목 조작

// recoil 패키지에 추가 -> yarn add recoil
function App() {
  return (
      /*
      *  1. 루트컴포넌트를 정하고, <RecoilRoot>태그로 루트 컴포넌트 감싸기.
      *  Recoil 으로 상태를 공유하고 싶은 컴포넌트들의 루트 컴포넌트를 <RecoilRoot>태그로 감싸주는것으로,
      *  <RecoilRoot>로 감싼 트리 내의 모든 자식 컴포넌트들이 동일한 Recoil 상태를 참조하는 것이 가능해짐.
      *  아래의 예시에서는 App 이라는 컴포넌트를 루트 컴포넌트로 정한뒤 , TodoList 에서 Recoil 의 상태를 참조 및 수정 할 수 있게 하는 예시.
      * */
      <RecoilRoot>
         <TodoList />
      </RecoilRoot>
  );
}

export default App;

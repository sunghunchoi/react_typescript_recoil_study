import {atom} from 'recoil';

// atom 을 사용해서 TodoList 의 상태를 정하기.
export type TodoItemType = {
    id: number;
    text: string;
    isComplete: boolean;
}

// atom 함수로 Todo 항목(TodoItemType) 의 리스트(배열)의 데이터를 정합니다.
// 인수(파라미터)의 key 항목은 상태의 식별자 여기서는 'todoListState'
// 인수(파라미터)의 default 항목은 초기 값이 됩니다. [] <- 빈 배열
export const todoListState = atom<TodoItemType[]>({
    key:'todoListState',
    default: [],
})
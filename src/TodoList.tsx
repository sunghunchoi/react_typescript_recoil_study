import {useRecoilValue} from "recoil";
import {todoListState} from "./todoListState";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

/**
 *
 * 2. recoil이 관리하고 있는 상태로 부터 상태를 읽어들이는 `useRecoilValue` 훅
 *
 * useRecoilValue()는 인수의 atom (todoListState) 으로부터 값을 읽어들이는 훅입니다.
 * useRecoilState()와의 차이점은, atom (todoListState)의 값을 설정하는 함수는 제공하지 않습니다.
 * 그러므로 useRecoilValue 훅은 Recoil atom 상태를 읽기전용으로만 사용할 수 있습니다.
 * TodoList 컴포넌트에서는, todoListState atom 에서 취득한 todoList 데이터를 리스트 형식으로 표시하고 있습니다.
 * */

export default function TodoList() {
    const todoList = useRecoilValue(todoListState)
    return (
        <div>
            <TodoItemCreator />
            {
                todoList.map((todoItem, index) => (
                    <TodoItem key={index} item={todoItem}/>
                ))
            }
        </div>
    )
}
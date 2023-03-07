import {ChangeEventHandler, useCallback, useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListState} from "./todoListState";

/**
 *
 * 3. recoil 이 관리하고 있는 상태의 값을 설정하는 useSetRecoilState 훅.
 *
 * TodoItemCreator 컴포넌트에서는 <input type="text"> 요소에 입력된 텍스트 값을 투두항목으로 todoListState 의 상태에 값을 추가해주는 컴포넌트입니다.
 * useSetRecoilState() 훅의 인수(파라미터)로 새로이 설정하고싶은 상태값을 넘겨주면 atom 의 값이 변경됩니다.
 *
 * 상태설정함수 setTodoList 를 useSetRecoilState 훅을 사용하여 선언해서 사용했습니다.
 * 인수로써 넘기는 값에 oldTodoList 를 불러와 이전의 atom 상태를 먼저 배열에 넣어준 뒤, 새로운 todoItem 을 배열에 넣어, 해당 함수의 파라미터로 넘기게되면
 * 이전의 todoList 상태배열 값에 새로 추가한 투두 항목이 추가되게 됩니다.
 * */
export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const addItem = useCallback(() => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ]);
        setInputValue('');
    } ,[inputValue, setTodoList])
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: {value}}) => {
        setInputValue(value);
    },[]);

    return (
        <div>
            <input type='text' value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

let id = 0;
function getId() {
    return id++;
}
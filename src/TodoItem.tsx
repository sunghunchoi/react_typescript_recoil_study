import {TodoItemType, todoListState} from "./todoListState";
import {useRecoilState} from "recoil";
import {ChangeEventHandler, useCallback} from "react";

type Props = {
    item: TodoItemType;
}
/**
 * 4. recoil이 관리하고 있는 상태를 읽고 설정하는 `useRecoilState` 훅
 *
 * atom 의 상태를 읽고 설정하는 용도도 `useRecoilState` 훅을 사용합니다.
 * */
export default function TodoItem(props: Props) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === props.item);

    const editItemText: ChangeEventHandler<HTMLInputElement> = useCallback(({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {...props.item, text: value});
        setTodoList(newList);
    },[index, props.item, setTodoList, todoList]);

    const toggleItemCompletion = useCallback(() => {
        const newList = replaceItemAtIndex(todoList, index, {...props.item, isComplete: !props.item.isComplete});
        setTodoList(newList);
    }, [index, setTodoList, todoList]);

    const deleteItem = useCallback(() => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    },[index, setTodoList, todoList]);

    return (
        <div>
            <input type="text" value={props.item.text} onChange={editItemText} />
            <input type="checkbox" checked={props.item.isComplete} onChange={toggleItemCompletion}/>
            <button onClick={deleteItem}> X </button>
        </div>
    )
}

function replaceItemAtIndex(arr: TodoItemType[], index: number, newValue: TodoItemType): TodoItemType[] {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoItemType[], index: number): TodoItemType[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
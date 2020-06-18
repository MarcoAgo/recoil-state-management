import React, { useState } from 'react';
import { todoListState } from './atoms';
import { useSetRecoilState } from 'recoil';

const TodoItemCreator = () => {
	const [inputValue, setInputValue] = useState('');
	const setTodoList = useSetRecoilState(todoListState);

	const addItem = () => {
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: oldTodoList.length + 1,
				text: inputValue,
				isComplete: false,
			}
		]);
	};

	const onChange = (event) => {
		setInputValue(event.target.value);
	}

	return (
		<div>
			<input type="text" value={inputValue} onChange={onChange} />
			<button onClick={addItem}>Add</button>
		</div>
	)
}

export default TodoItemCreator;
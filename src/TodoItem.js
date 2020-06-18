import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

const replaceItemAtIndex = (arr, index, newValue) => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

const TodoItem = (props) => {
	const { item } = props;
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemtext = ({ target: { value } }) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		})

		setTodoList(newList);
	}

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		})

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	}

	return (
		<div>
			<input type="text" value={item.text} onChange={editItemtext} />
			<input
				type="checkbox"
				checked={item.isComplete}
				onChange={toggleItemCompletion}
			/>
			<button onClick={deleteItem}>X</button>
		</div>
	)
}

export default TodoItem;
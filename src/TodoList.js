import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './selectors';

import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

const TodoList = () => {
	const todo = useRecoilValue(filteredTodoListState)

	return (
		<>
			<TodoListStats />
			<TodoListFilters />
			<TodoItemCreator />
			{
				todo.map(item => <TodoItem key={item.id} item={item} />)
			}
		</>
	);
}

export default TodoList;
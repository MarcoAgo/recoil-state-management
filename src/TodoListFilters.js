import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from './atoms';

const TodoListFilters = () => {
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	const updateFilter = ({ target: { value } }) => {
		setFilter(value);
	}

	return (
		<>
			Select:
			<select value={filter} onChange={updateFilter}>
				<option value="Show All">All</option>
				<option value="Show Completed">Completed</option>
				<option value="Show Uncompleted">Uncompleted</option>
			</select>
		</>
	)
}

export default TodoListFilters;
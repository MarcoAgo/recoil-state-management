import { selector } from 'recoil';
import { textState, todoListFilterState, todoListState } from './atoms';

export const charCountState = selector({
	key: 'charCountState',
	get: ({ get }) => {
		const text = get(textState);

		return text.length;
	}
})

export const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case 'Show Completed':
				return list.filter(item => item.isComplete);

			case 'Show Uncompleted':
				return list.filter(item => !item.isComplete);

			default:
				return list;
		}
	},
})

export const todoListStatsState = selector({
	key: 'todoListStatsState',
	get: ({ get }) => {
		const todoList = get(filteredTodoListState);
		const totalNum = todoList.length;
		const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
		const totalUncompletedNum = totalNum - totalCompletedNum;
		const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

		return {
			totalNum,
			totalCompletedNum,
			totalUncompletedNum,
			percentCompleted,
		}
	}
});
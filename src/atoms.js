import { atom } from 'recoil';

/** text state */
export const textState = atom({
	key: 'Test management state with recoil',
	default: '',
});

export const todoListState = atom({
	key: 'todoList',
	default:[],
});

export const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All',
});
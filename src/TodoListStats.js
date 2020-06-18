import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './selectors';

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <ul>
            <li>Total Tasks: {totalNum}</li>
            <li>Completed Tasks: {totalCompletedNum}</li>
            <li>Uncompleted Tasks: {totalUncompletedNum}</li>
            <li>Percent Completed: {formattedPercentCompleted}</li>
        </ul>
    )
}

export default TodoListStats;
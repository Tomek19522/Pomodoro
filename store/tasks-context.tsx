import { createContext, PropsWithChildren, useState } from 'react';
type TaskContextType = {
	tasks: { id: string; text: string; checked: boolean }[];
	addTask: (text: string) => void;
	removeTask: (id: string) => void;
	removeAllTasks: () => void;
	finishFocusTime: () => void;
	changeCheck: (id: string) => void;
	getChecedValue: (id: string) => boolean;
};
export const TasksContext = createContext<TaskContextType | null>({
	tasks: [],
	addTask: (text: string) => {},
	removeTask: (id: string) => {},
	removeAllTasks: () => {},
	finishFocusTime: () => {},
	changeCheck: (id: string) => {},
	getChecedValue: (id: string): boolean => {
		return false;
	},
});
const TasksContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [taskList, setTaskList] = useState<
		{ id: string; text: string; checked: boolean }[]
	>([]);
	const addTask = (text: string) => {
		const id = Math.random().toString();
		setTaskList((currentTaskList) => [
			...currentTaskList,
			{ id: id, text: text, checked: false },
		]);
	};
	const removeTask = (id: string) => {
		setTaskList((currentTaskList) =>
			currentTaskList.filter((task) => task.id !== id)
		);
	};
	const removeAllTasks = () => {
		setTaskList([]);
	};
	const finishFocusTime = () => {
		setTaskList((currentTaskList) =>
			currentTaskList.filter((task) => !task.checked)
		);
	};
	const changeCheck = (id: string) => {
		taskList.forEach((task) => {
			if (task.id === id) task.checked = !task.checked;
		});
	};
	const getChecedValue = (id: string): boolean => {
		const newObj = taskList.find((task) => task.id === id)!;
		return newObj?.checked;
	};
	const value = {
		tasks: taskList,
		addTask: addTask,
		removeTask: removeTask,
		removeAllTasks: removeAllTasks,
		finishFocusTime: finishFocusTime,
		changeCheck: changeCheck,
		getChecedValue: getChecedValue,
	};
	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};
export default TasksContextProvider;

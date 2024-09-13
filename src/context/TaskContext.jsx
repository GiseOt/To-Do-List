import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getSavedTasks, setSavedTasks } from "../utils/LocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(getSavedTasks());
	const [error, setError] = useState(false);

	//Add tasks
	const addTask = (taskText) => {
		if (!taskText.trim()) {
			setError(true);
			return;
		}
		const newTask = { id: uuidv4(), text: taskText };
		const updatedTasks = [...tasks, newTask];
		setTasks(updatedTasks);
		setSavedTasks(updatedTasks);
		setError(false);
	};

	// Delete tasks

	const deleteTask = (taskId) => {
		const updatedTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(updatedTasks);
		setSavedTasks(updatedTasks);
	};
	//Edit tasks
	const editTask = (taskId, newText) => {
		const updatedTasks = tasks.map((task) =>
			task.id === taskId ? { ...task, text: newText } : task
		);
		setTasks(updatedTasks);
		setSavedTasks(updatedTasks);
	};

	return (
		<TaskContext.Provider
			value={{ tasks, addTask, deleteTask, editTask, error, setError }}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);

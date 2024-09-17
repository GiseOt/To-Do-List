import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getSavedTasks, setSavedTasks } from "../utils/LocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(getSavedTasks());
	const [error, setError] = useState(false);
     const [filter, setFilter] = useState("all");

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
    
  //Filter tasks
     const toggleTaskCompletion = (taskId) => {
				const updatedTasks = tasks.map((task) =>
					task.id === taskId ? { ...task, completed: !task.completed } : task
				);
				setTasks(updatedTasks);
				setSavedTasks(updatedTasks);
			};

			const filteredTasks = tasks.filter((task) => {
				if (filter === "completed") return task.completed;
				if (filter === "incomplete") return !task.completed;
				return true;
                
			});

	return (
		<TaskContext.Provider
			value={{
				tasks: filteredTasks,
				addTask,
				deleteTask,
				editTask,
				toggleTaskCompletion,
				error,
				setError,
				setFilter, 
				filter, 
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);

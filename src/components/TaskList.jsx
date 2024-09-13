import { useTaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditTask from "./EditTask";
import DeleteModal from "./DeleteModal";

// Design
import {
	TextField,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ButtonGroup,
	Typography,
	Checkbox,
	Box,
} from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Image1 from "../assets/background.png";

const TaskList = () => {
	const { tasks, addTask, deleteTask, editTask } = useTaskContext();
	const [newTask, setNewTask] = useState("");
	const [error, setError] = useState(false);
	const [taskToDelete, setTaskToDelete] = useState(null);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editingTaskId, setEditingTaskId] = useState(null);

	//Add
	const handleAddTask = () => {
		if (!newTask.trim()) {
			setError(true);
			return;
		}
		addTask(newTask);
		setNewTask("");
		setError(false);
	};
	//Delete
	const handleDeleteClick = (taskId) => {
		setTaskToDelete(taskId);
		setDeleteModalOpen(true);
	};

	const handleDeleteConfirm = () => {
		deleteTask(taskToDelete);
		setDeleteModalOpen(false);
		setTaskToDelete(null);
	};

	const handleDeleteCancel = () => {
		setTaskToDelete(null);
		setDeleteModalOpen(false);
	};
	//Edit
	const handleEditClick = (taskId) => {
		setEditingTaskId(taskId);
		setIsEdit(true);
	};

	const handleEditConfirm = (newText) => {
		editTask(editingTaskId, newText);
		setIsEdit(false);
		setEditingTaskId(null);
	};

	return (
		<Box
			sx={{
				backgroundImage: `url(${Image1})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				paddingTop: "150px",
				padding: "20px",
				borderRadius: "10px",
				boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
				position: "relative",
				maxWidth: "800px",
				margin: "0 auto",
			}}
		>
			{/*sticky note effect */}
			<Box
				sx={{
					position: "absolute",
					top: "-20px",
					left: "20px",
					width: "80px",
					height: "80px",
					backgroundColor: "#f1c40f",
					boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
					transform: "rotate(-5deg)",
					borderRadius: "5px",
					padding: "10px",
					textAlign: "center",
					fontSize: "1.2rem",
					color: "#fff",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontWeight: "bold",
				}}
			>
				To Do
			</Box>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					paddingBlock: 25,
				}}
			>
				<TextField
					id="standard-basic"
					label="Add New Task"
					variant="standard"
					value={newTask}
					error={error}
					helperText={error ? "Please add your task" : ""}
					onChange={(e) => setNewTask(e.target.value)}
					required
				/>
				<IconButton
					aria-label="add"
					onClick={handleAddTask}
					sx={{
						width: "48px",
						height: "48px",
						padding: "0",
						color: "#f1c40f",
						boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
						transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
						"&:hover": {
							color: "#B5CFB7",
							transform: "translateY(-2px)",
							boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
						},
						"&:active": {
							transform: "translateY(4px)",
							boxShadow: "none",
						},
					}}
				>
					<IoMdAddCircle size={32} />
				</IconButton>
			</div>

			<List component="ul">
				{tasks.map((task) => (
					<ListItem
						component="li"
						key={task.id}
						sx={{ display: "flex", alignItems: "center" }}
					>
						<Checkbox
							sx={{
								color: "#B5CFB7",
								"&.Mui-checked": {
									color: "#B5CFB7",
								},
							}}
						/>
						<ListItemText>
							{isEdit && editingTaskId === task.id ? (
								<EditTask
									taskText={task.text}
									setIsEdit={setIsEdit}
									handleEditConfirm={handleEditConfirm}
								/>
							) : (
								<Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
									{task.text}
								</Typography>
							)}
						</ListItemText>
						<div>
							<ButtonGroup variant="outlined" aria-label="Basic button group">
								<IconButton
									aria-label="edit"
									sx={{ color: "#BC9F8B" }}
									onClick={() => handleEditClick(task.id)}
									component={Link}
									to="/edit-task"
								>
									<FaEdit />
								</IconButton>
								<IconButton
									aria-label="delete"
									sx={{ color: "#BC9F8B" }}
									onClick={() => handleDeleteClick(task.id)}
									component={Link}
									to="/deletetask"
								>
									<FaTrashAlt />
								</IconButton>
							</ButtonGroup>
						</div>
					</ListItem>
				))}
			</List>
			{/* Delete Modal */}
			<DeleteModal
				open={deleteModalOpen}
				onClose={handleDeleteCancel}
				onDelete={handleDeleteConfirm}
			/>
		</Box>
	);
};

export default TaskList;

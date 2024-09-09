import { useState } from "react";
import { getSavedTasks, setSavedTasks } from "../utils/LocalStorage";
import { v4 as uuidv4 } from "uuid";

//Design
import {
	TextField,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ButtonGroup,
	Typography,
	Checkbox,
} from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TaskList = () => {
	const [tasks, setTasks] = useState(getSavedTasks());
	const [newTask, setNewTask] = useState("");
	const [error, setError] = useState(false);

	const handleAddTask = () => {
		if (!newTask.trim()) {
			setError(true);
			return;
		}
		const updatedTasks = [...tasks, { id: uuidv4(), text: newTask }];
		setTasks(updatedTasks);
		setNewTask("");
		setSavedTasks(updatedTasks);
		setError(false);
	};

	return (
		<div
			style={{
				backgroundColor: "#F6F5F5",
				width: "80%",
				marginTop: "100px",
			}}
		>
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
						color: "rgb(152, 228, 255)",
						boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
						transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
						"&:hover": {
							color: "#CADABF",
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
							<Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
								{task.text}
							</Typography>
						</ListItemText>
						<div>
							<ButtonGroup variant="outlined" aria-label="Basic button group">
								<IconButton aria-label="edit" sx={{ color: "#BC9F8B" }}>
									<FaEdit />
								</IconButton>
								<IconButton aria-label="delete" sx={{ color: "#BC9F8B" }}>
									<FaTrashAlt />
								</IconButton>
							</ButtonGroup>
						</div>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default TaskList;

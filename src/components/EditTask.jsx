import { Button, ButtonGroup, TextField, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditTask = ({ taskText, setIsEdit, handleEditConfirm }) => {
	const navigate = useNavigate();

	const handleCancelEdit = () => {
		setIsEdit(false);
		navigate("/task"); 
	};

	const handleEditTask = (e) => {
		e.preventDefault();
		const newTaskText = e.target.descripcion.value;
		handleEditConfirm(newTaskText);
		navigate("/task"); 
	};

	return (
		<Stack
			component="form"
			className="edit_task__form"
			onSubmit={handleEditTask}
			spacing={2}
			sx={{
				width: { xs: "160px", md: "260px" },
				padding: 2,
				backgroundColor: "#FFFFFF",
				borderRadius: "8px",
				boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
			}}
		>
			<TextField
				defaultValue={taskText}
				name="descripcion"
				fullWidth
				multiline
				variant="outlined"
				margin="normal"
				sx={{
					borderRadius: "4px",
				}}
			/>
			<ButtonGroup variant="contained" aria-label="outlined button group">
				<Button
					onClick={handleCancelEdit}
					variant="outlined"
					color="error"
					sx={{
						"&:hover": {
							backgroundColor: "#f8d7da",
							color: "#721c24",
						},
						color: "#721c24",
						borderColor: "#f5c6cb",
					}}
				>
					Cancel
				</Button>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{
						backgroundColor: "#007bff",
						"&:hover": {
							backgroundColor: "#0056b3",
						},
					}}
				>
					Edit
				</Button>
			</ButtonGroup>
		</Stack>
	);
};

export default EditTask;

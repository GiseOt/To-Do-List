import { Modal, Fade, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ open, onClose, onDelete }) => {
	const navigate = useNavigate();

	const handleDelete = () => {
		onDelete();
		navigate("/");
	};

	const handleCancel = () => {
		onClose();
		navigate("/");
	};

	return (
		<Modal
			open={open}
			onClose={handleCancel}
			aria-labelledby="delete-modal-title"
			aria-describedby="delete-modal-description"
			closeAfterTransition
		>
			<Fade in={open}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 4,
						maxWidth: 400,
						minWidth: 300,
						textAlign: "center",
					}}
				>
					<Typography id="delete-modal-title" variant="h6" gutterBottom>
						Are you sure you want to delete?
					</Typography>
					<Button
						onClick={handleDelete}
						variant="contained"
						color="error"
						sx={{ mr: 2 }}
					>
						Delete
					</Button>
					<Button onClick={handleCancel} variant="outlined">
						Cancel
					</Button>
				</Box>
			</Fade>
		</Modal>
	);
};

export default DeleteModal;

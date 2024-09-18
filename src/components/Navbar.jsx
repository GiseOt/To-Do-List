import { useTaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
	const { setFilter, filter } = useTaskContext();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{
					backgroundColor: "#F5F5F5",
					paddingLeft: "20px",
					paddingBlock: "10px",
					borderBottom: "1px solid #BC9F8B",
					marginBottom: "100px",
				}}
			>
				<Toolbar
					variant="dense"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "10px",
						flexWrap: "wrap",
					}}
				>
					<Typography variant="h4" color="#BC9F8B" component="div">
						To Do List
					</Typography>
					{/* Filter Buttons */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: "10px",
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						<Button
							variant={filter === "all" ? "contained" : "outlined"}
							sx={{
								margin: "5px",
								color: filter === "all" ? "#fff" : "#BC9F8B",
								backgroundColor: filter === "all" ? "#BC9F8B" : "transparent",
								borderColor: "#BC9F8B",
								"&:hover": {
									backgroundColor: filter === "all" ? "#a88f7f" : "#e0e0e0",
									borderColor: "#a88f7f",
								},
								fontSize: { xs: "0.75rem", sm: "0.875rem" },
								padding: { xs: "6px 12px", sm: "8px 16px" },
							}}
							onClick={() => setFilter("all")}
							component={Link}
							to="/"
						>
							All
						</Button>
						<Button
							variant={filter === "completed" ? "contained" : "outlined"}
							sx={{
								margin: "5px",
								color: filter === "completed" ? "#fff" : "#BC9F8B",
								backgroundColor:
									filter === "completed" ? "#BC9F8B" : "transparent",
								borderColor: "#BC9F8B",
								"&:hover": {
									backgroundColor:
										filter === "completed" ? "#a88f7f" : "#e0e0e0",
									borderColor: "#a88f7f",
								},
								fontSize: { xs: "0.75rem", sm: "0.875rem" },
								padding: { xs: "6px 12px", sm: "8px 16px" },
							}}
							onClick={() => setFilter("completed")}
							component={Link}
							to="/completed"
						>
							Completed
						</Button>
						<Button
							variant={filter === "incomplete" ? "contained" : "outlined"}
							sx={{
								margin: "5px",
								color: filter === "incomplete" ? "#fff" : "#BC9F8B",
								backgroundColor:
									filter === "incomplete" ? "#BC9F8B" : "transparent",
								borderColor: "#BC9F8B",
								"&:hover": {
									backgroundColor:
										filter === "incomplete" ? "#a88f7f" : "#e0e0e0",
									borderColor: "#a88f7f",
								},
								fontSize: { xs: "0.75rem", sm: "0.875rem" },
								padding: { xs: "6px 12px", sm: "8px 16px" },
							}}
							onClick={() => setFilter("incomplete")}
							component={Link}
							to="/incomplete"
						>
							Incomplete
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;

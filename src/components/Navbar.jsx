import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{ backgroundColor: "#B5CFB7", paddingLeft: "20px", marginTop: "0", paddingBlock:"20px" }}
			>
				<Toolbar variant="dense" sx={{margin:"auto"}}>
					<Typography variant="h4" color="inherit" component="div">
						To Do List
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;

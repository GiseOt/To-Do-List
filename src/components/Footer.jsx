import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	IconButton,
	Box,
} from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<AppBar
			position="fixed"
			sx={{
				top: "auto",
				bottom: 0,
				backgroundColor: "#F5F5F5",
				paddingLeft: "20px",
				paddingBlock: "10px",
				borderTop: "1px solid #BC9F8B",
				marginTop: "20px",
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Container
					maxWidth="sm"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="body1"
						color="#BC9F8B"
						sx={{
							marginRight: "10px",
							fontSize: {
								xs: "0.75rem",
								sm: "1rem",
							},
						}}
					>
						&copy; 2024 Gisella Ortiz de la Tabla
					</Typography>
					<Box sx={{ display: "flex", gap: "10px" }}>
						<IconButton
							component="a"
							href="https://www.linkedin.com/in/gisellaortizdelatabla/"
							target="_blank"
							rel="noopener noreferrer"
							color="inherit"
						>
							<FaLinkedin size={24} color="#BC9F8B" />
						</IconButton>
						<IconButton
							component="a"
							href="https://github.com/GiseOt"
							target="_blank"
							rel="noopener noreferrer"
							color="inherit"
						>
							<FaGithub size={24} color="#BC9F8B" />
						</IconButton>
					</Box>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;

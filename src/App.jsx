import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import DeleteModal from "./components/DeleteModal";

// Design
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/titillium-web";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "Titillium Web, sans-serif",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Container
				maxWidth="sm"
				sx={{ display: "flex", justifyContent: "center" }}
			>
				<TaskList />
				<Routes>
					<Route path="/deletetask" element={<DeleteModal />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
}

export default App;

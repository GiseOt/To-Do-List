import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import Footer from "./components/Footer";

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
		<TaskProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Container
					maxWidth="sm"
					sx={{ display: "flex", justifyContent: "center", mb: "100px" }}
				>
					<Routes>
						<Route path="/" element={<TaskList />} />
						<Route path="/deletetask" element={<TaskList />} />
						<Route path="/completed" element={<TaskList />} />
						<Route path="/incomplete" element={<TaskList />} />
						<Route path="/edit-task/:taskId" element={<TaskList />} />
					</Routes>
				</Container>
				<Footer />
			</ThemeProvider>
		</TaskProvider>
	);
}

export default App;

import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";


//Design
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles";
import '@fontsource/titillium-web';


function App() {
	//Font
	const theme = createTheme({
		typography: {
			fontFamily: "Titillium Web, sans-serif",
		},
	}); 

	return (
	 	<ThemeProvider  theme={theme} >
			<CssBaseline /> <Navbar />
			<Container
				maxWidth="sm"
				sx={{ display: "flex", justifyContent: "center" }}
			>
				<TaskList />
			</Container>
		</ThemeProvider> 
	);
}

export default App;

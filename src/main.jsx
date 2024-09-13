import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { TaskProvider } from "./context/TaskContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
      <TaskProvider>
		<App />
        </TaskProvider>
	</BrowserRouter>
);

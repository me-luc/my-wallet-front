import {
	LoginPage,
	HomePage,
	SignUpPage,
	NewIncomePage,
	NewOutcomePage,
} from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/cadastro" element={<SignUpPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/nova-entrada" element={<NewIncomePage />} />
				<Route path="/nova-saida" element={<NewOutcomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import {
	InputModel,
	ButtonModel,
	AppTitle,
	OtherSignOption,
} from "../components/index";
import { useState } from "react";
import { signIn } from "../api/signIn";
import { useNavigate } from "react-router-dom";
import AuthErrorMessage from "../components/models/AuthErrorMessage";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	return (
		<Page>
			<form onSubmit={handleClick} className="form">
				<AppTitle />
				<InputModel
					value={email}
					clearError={clearError}
					setValue={setEmail}
					placeholder="E-mail"
					type="e-mail"
					required
				/>
				<InputModel
					value={password}
					setValue={setPassword}
					clearError={clearError}
					placeholder="Senha"
					type="password"
					required
				/>
				<AuthErrorMessage text={error} />
				<ButtonModel type="submit" text="Entrar" />
			</form>

			<OtherSignOption
				text="Primeira vez? Cadastre-se!"
				link="/cadastro"
			/>
		</Page>
	);

	async function handleClick(e) {
		e.preventDefault();
		const response = await signIn(email, password);
		if (response.error) {
			setError(response.data);
		} else {
			localStorage.setItem("userToken", response.data);
			navigate("/home");
		}
	}

	function clearError() {
		setError("");
	}
}

const Page = styled(PageModel)`
	.form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

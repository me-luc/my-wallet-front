import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import {
	InputModel,
	ButtonModel,
	AppTitle,
	OtherSignOption,
} from "../components/index";
import { signUp } from "../api/signUp";
import { useState } from "react";
import AuthErrorMessage from "../components/models/AuthErrorMessage";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	return (
		<Page>
			<AppTitle />

			<form onSubmit={handleClick}>
				<InputModel
					placeholder="Name"
					type="name"
					value={name}
					setValue={setName}
					clearError={clearError}
					required
				/>
				<InputModel
					placeholder="E-mail"
					type="e-mail"
					value={email}
					setValue={setEmail}
					clearError={clearError}
					required
				/>
				<InputModel
					placeholder="Senha"
					type="password"
					value={password}
					clearError={clearError}
					setValue={setPassword}
					required
				/>
				<InputModel
					placeholder="Confirmar senha"
					type="password"
					clearError={clearError}
					value={confirmPassword}
					setValue={setConfirmPassword}
					required
				/>
				<AuthErrorMessage text={error} />
				<ButtonModel type="submit" text="Entrar" />
			</form>

			<OtherSignOption text="Já tem uma conta? Entre agora!" link="/" />
		</Page>
	);

	async function handleClick(e) {
		e.preventDefault();
		const response = await signUp(name, email, password, confirmPassword);
		if (response.error) {
			setError(response.data);
		} else {
			navigate("/home");
		}
	}

	function clearError() {
		setError("");
	}
}

const Page = styled(PageModel)``;

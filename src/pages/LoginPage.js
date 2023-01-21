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

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Page>
			<form onSubmit={handleClick} className="form">
				<AppTitle />
				<InputModel
					value={email}
					setValue={setEmail}
					placeholder="E-mail"
					required
				/>
				<InputModel
					value={password}
					setValue={setPassword}
					placeholder="Senha"
					type="password"
					required
				/>
				<ButtonModel type="submit" text="Entrar" />
			</form>

			<OtherSignOption
				text="Primeira vez? Cadastre-se!"
				link="/cadastro"
			/>
		</Page>
	);

	function handleClick(e) {
		e.preventDefault();
		signIn(email, password);
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

import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import {
	InputModel,
	ButtonModel,
	AppTitle,
	OtherSignOption,
} from "../components/index";

export default function SignUpPage() {
	return (
		<Page>
			<AppTitle />
			<InputModel placeholder="Name" type="name" required />
			<InputModel placeholder="E-mail" type="e-mail" required />
			<InputModel placeholder="Senha" type="password" required />
			<InputModel
				placeholder="Confirmar senha"
				type="password"
				required
			/>
			<ButtonModel text="Entrar" />
			<OtherSignOption text="Já tem uma conta? Entre agora!" link="/" />
		</Page>
	);
}

const Page = styled(PageModel)``;

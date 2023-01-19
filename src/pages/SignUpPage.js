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
			<InputModel placeholder="Name" />
			<InputModel placeholder="E-mail" />
			<InputModel placeholder="Senha" />
			<InputModel placeholder="Confirmar senha" />
			<ButtonModel text="Entrar" />
			<OtherSignOption text="Já tem uma conta? Entre agora!" link="/" />
		</Page>
	);
}

const Page = styled(PageModel)``;

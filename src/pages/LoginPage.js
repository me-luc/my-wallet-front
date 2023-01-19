import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import {
	InputModel,
	ButtonModel,
	AppTitle,
	OtherSignOption,
} from "../components/index";

export default function LoginPage() {
	return (
		<Page>
			<AppTitle />
			<InputModel placeholder="E-mail" />
			<InputModel placeholder="Senha" />
			<ButtonModel text="Entrar" />
			<OtherSignOption
				text="Primeira vez? Cadastre-se!"
				link="/cadastro"
			/>
		</Page>
	);
}

const Page = styled(PageModel)``;

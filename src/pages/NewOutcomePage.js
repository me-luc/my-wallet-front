import styled from "styled-components";
import Authenticate from "../auth/Authenticate";
import { InputModel, ButtonModel, PageTitle } from "../components/index";
import { PageModel } from "../styles/PageModel";

export default function NewOutcomePage() {
	return (
		<Page>
			<Authenticate />
			<PageTitle style={titleStyle} text="Nova saída" />
			<InputModel placeholder="Valor" />
			<InputModel placeholder="Descrição" />
			<ButtonModel text="Salvar entrada" />
		</Page>
	);
}

const Page = styled(PageModel)`
	align-items: flex-start;
	justify-content: start;
`;

function titleStyle() {
	return `
		margin-bottom: 35px;
	`;
}

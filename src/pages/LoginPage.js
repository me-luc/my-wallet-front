import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import { InputModel, ButtonModel } from "../components/index";

export default function LoginPage() {
	return (
		<Page>
			<InputModel />
			<InputModel />
			<ButtonModel text="Entrar" />
		</Page>
	);
}

const Page = styled(PageModel)``;

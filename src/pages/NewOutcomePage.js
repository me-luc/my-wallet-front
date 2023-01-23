import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addEntry } from "../api/addEntry";
import Authenticate from "../auth/Authenticate";
import { InputModel, ButtonModel, PageTitle } from "../components/index";
import { PageModel } from "../styles/PageModel";

export default function NewOutcomePage() {
	const [value, setValue] = useState();
	const [description, setDescription] = useState();
	const navigate = useNavigate();

	return (
		<Page>
			<Authenticate />
			<PageTitle style={titleStyle} text="Nova saída" />
			<form onSubmit={handleClick}>
				<InputModel
					data-test="registry-amount-input"
					value={value}
					setValue={setValue}
					placeholder="Valor"
				/>
				<InputModel
					data-test="registry-name-input"
					value={description}
					setValue={setDescription}
					placeholder="Descrição"
				/>
				<ButtonModel
					data-test="registry-save"
					type="submit"
					text="Salvar saída"
				/>
			</form>
		</Page>
	);

	async function handleClick(e) {
		e.preventDefault();
		const newEntry = {
			price: value,
			description,
			type: "outcome",
		};
		const response = await addEntry(newEntry);
		console.log(response);
		if (!response.error) {
			navigate("/home");
		}
	}
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

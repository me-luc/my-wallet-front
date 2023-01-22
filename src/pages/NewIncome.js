import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addEntry } from "../api/addEntry";
import Authenticate from "../auth/Authenticate";
import { InputModel, ButtonModel, PageTitle } from "../components/index";
import { PageModel } from "../styles/PageModel";

export default function NewIncomePage() {
	const [value, setValue] = useState();
	const [description, setDescription] = useState();
	const navigate = useNavigate();
	return (
		<Page>
			<Authenticate />
			<PageTitle style={titleStyle} text="Nova entrada" />

			<form onSubmit={handleClick}>
				<InputModel
					value={value}
					setValue={setValue}
					placeholder="Valor"
				/>
				<InputModel
					value={description}
					setValue={setDescription}
					placeholder="Descrição"
				/>
				<ButtonModel type="submit" text="Salvar entrada" />
			</form>
		</Page>
	);

	async function handleClick(e) {
		e.preventDefault();
		const newEntry = {
			price: value,
			description,
			type: "income",
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

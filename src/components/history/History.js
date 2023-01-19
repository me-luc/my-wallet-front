import styled from "styled-components";
import EntryItem from "./EntryItem";

export default function History() {
	const mock = [
		{
			date: "29/10",
			description: "Meu gasto 1",
			price: "2401.00",
			type: "outcome",
		},
		{
			date: "29/10",
			description: "Meu gasto 1",
			price: "251.00",
			type: "outcome",
		},
		{
			date: "29/10",
			description: "Meu gasto 1",
			price: "10.00",
			type: "outcome",
		},
		{
			date: "29/10",
			description: "Meu gasto 1",
			price: "21.00",
			type: "outcome",
		},
	];
	return (
		<StyledSection>
			<ItemsList>
				{mock.map((item) => (
					<EntryItem
						date={item.date}
						description={item.description}
						price={item.price}
						type={item.type}
					/>
				))}
			</ItemsList>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	background-color: #fff;
	width: 100%;
	height: 100%;
	margin: 25px 0 15px 0;

	border-radius: 5px;
`;

const ItemsList = styled.ul`
	text-decoration-style: none;
	box-sizing: border-box;
	padding: 20px 15px 10px 15px;
`;

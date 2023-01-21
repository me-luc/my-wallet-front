import styled from "styled-components";
import EntryItem from "./EntryItem";

export default function Entry({ entries }) {
	return (
		<StyledSection>
			<ItemsList>
				{entries.map(
					(item) =>
						item && (
							<EntryItem
								date={item.date}
								description={item.description}
								price={item.price}
								type={item.type}
							/>
						)
				)}
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

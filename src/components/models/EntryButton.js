import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EntryButton({ Icon, title, link }) {
	const navigate = useNavigate();

	return (
		<StyledButton onClick={goToLinkPage}>
			<Icon className="icon" />
			<Title>{title}</Title>
		</StyledButton>
	);

	function goToLinkPage() {
		navigate(link);
	}
}

const StyledButton = styled.button`
	background-color: #a328d6;
	width: 48%;
	height: 115px;

	border: none;
	border-radius: 5px;

	box-sizing: border-box;
	padding: 10px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	cursor: pointer;

	.icon {
		font-size: 25px;
		color: #ffffff;
	}
`;

const Title = styled.h3`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;

	color: #ffffff;

	text-align: left;
	word-spacing: calc(100vw);
`;

import styled from "styled-components";

export default function ButtonModel({ text }) {
	return <StyledButton>{text}</StyledButton>;
}

const StyledButton = styled.button`
	width: 100%;
	height: 50px;

	background: #a328d6;
	border-radius: 5px;
	border: none;

	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;

	color: #ffffff;
	margin: 7px 0;
`;

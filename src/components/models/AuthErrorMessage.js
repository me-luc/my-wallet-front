import styled from "styled-components";

export default function AuthErrorMessage({ text }) {
	return <StyledP>{text}</StyledP>;
}

const StyledP = styled.p`
	width: 100%;
	display: flex;
	justify-content: right;

	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	color: #ff4545;
`;

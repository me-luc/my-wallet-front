import styled from "styled-components";

export default function InputModel({ placeholder }) {
	return <StyledInput placeholder={placeholder} />;
}

const StyledInput = styled.input`
	width: 100%;
	height: 60px;
	border: none;
	border-radius: 5px;
	margin: 7px 0;

	box-sizing: border-box;
	padding-left: 20px;

	font-family: "Raleway";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 23px;

	color: #000000;

	::placeholder {
		font-family: "Raleway";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;

		color: #000000;
	}
`;

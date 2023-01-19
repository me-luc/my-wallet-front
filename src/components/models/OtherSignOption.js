import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function OtherSignOption({ text, link }) {
	const navigate = useNavigate();
	return <StyledP onClick={goToLinkPage}>{text}</StyledP>;

	function goToLinkPage() {
		navigate(link);
	}
}

const StyledP = styled.p`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	color: #ffffff;
	cursor: pointer;
	margin-top: 35px;
`;

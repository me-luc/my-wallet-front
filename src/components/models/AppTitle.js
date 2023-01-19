import styled from "styled-components";

export default function AppTitle({ fontSize }) {
	return <StyledH1 fontSize={fontSize}>MyWallet</StyledH1>;
}

const StyledH1 = styled.h1`
	font-family: "Mulish";
	font-style: normal;
	font-weight: 1000;
	font-size: ${({ fontSize }) => fontSize || "40px"};
	line-height: 50px;
	color: #ffffff;
	margin-bottom: 35px;
`;

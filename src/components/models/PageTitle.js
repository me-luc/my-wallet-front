import styled from "styled-components";

export default function PageTitle({ text, style }) {
	return <Title style={style}>{text}</Title>;
}

const Title = styled.h2`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: #ffffff;
	${({ style }) => style}
`;

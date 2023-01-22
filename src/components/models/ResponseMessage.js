import styled from "styled-components";

export default function ResponseMessage({ type, message }) {
	return (
		<StyledDiv type={type}>
			<Icon />
			{message}
		</StyledDiv>
	);
}

function Icon() {}

const StyledDiv = styled.div`
	width: 250px;
	height: 80px;
	border-radius: 10px 0 0 10px;
	background-color: red;
	/* background: ${({ type }) =>
		(type === "sucess" && "green") ||
		(type === "failure" && "red") ||
		(type === "message" && "red") ||
		"white"}; */
	position: fixed;
	right: 0;
	top: 30px;
`;

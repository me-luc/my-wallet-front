import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../components";
import { PageModel } from "../styles/PageModel";

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<Page>
			<PageTitle text="Not found!" />
			<StyledP>
				This page seems to be not found <br />{" "}
				<span onClick={goToLink}>Click here to go to home page </span>
			</StyledP>
		</Page>
	);
	function goToLink() {
		navigate("/home");
	}
}

const Page = styled(PageModel)``;

const StyledP = styled.p`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	color: #ffffff;
	margin-top: 35px;

	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		font-family: "Raleway";
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 18px;
		color: #ffffff;
		cursor: pointer;
		margin-top: 20px;
	}
`;

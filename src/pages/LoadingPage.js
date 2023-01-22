import styled from "styled-components";
import { AppTitle } from "../components";
import { PageModel } from "../styles/PageModel";
import { MutatingDots } from "react-loader-spinner";
import Authenticate from "../auth/Authenticate";

export default function LoadingPage() {
	return (
		<Page>
			<Authenticate />
			<AppTitle />
			<MutatingDots
				height="100"
				width="100"
				color="#fff"
				secondaryColor="#fff"
				radius="12.5"
				ariaLabel="mutating-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</Page>
	);
}

const Page = styled(PageModel)``;

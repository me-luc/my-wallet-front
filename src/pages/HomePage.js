import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import { MdLogout as LogoutIcon } from "react-icons/md";
import {
	AiOutlinePlusCircle as PlusIcon,
	AiOutlineMinusCircle as MinusIcon,
} from "react-icons/ai";
import { EntryButton, History, PageTitle } from "../components/index";

export default function HomePage({ name }) {
	return (
		<Page>
			<TopSection>
				<PageTitle text={`Olá, ${name}`} />
				<LogoutIcon className="icon" />
			</TopSection>

			<History />

			<Options>
				<EntryButton title="Nova entrada" Icon={PlusIcon} />
				<EntryButton title="Nova saída" Icon={MinusIcon} />
			</Options>
		</Page>
	);
}

const Page = styled(PageModel)`
	.icon {
		font-size: 30px;
		color: #ffffff;
	}
`;

const TopSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

import styled from "styled-components";
import { PageModel } from "../styles/PageModel";
import { MdLogout as LogoutIcon } from "react-icons/md";
import {
	AiOutlinePlusCircle as PlusIcon,
	AiOutlineMinusCircle as MinusIcon,
} from "react-icons/ai";
import { EntryButton, Entry, PageTitle } from "../components/index";
import Authenticate from "../auth/Authenticate";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import getUserEntries from "../api/getUserEntries";

export default function HomePage({ name }) {
	const [entries, setEntries] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await getUserEntries();
			if (response.error) {
			} else {
				setEntries(response.data);
				console.log(entries);
			}
		}

		getData();
	}, []);

	if (!entries) {
		return <LoadingPage />;
	}
	return (
		<Page>
			<Authenticate />
			<TopSection>
				<PageTitle text={`Olá, ${name}`} />
				<LogoutIcon className="icon" />
			</TopSection>

			<Entry entries={entries} />

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

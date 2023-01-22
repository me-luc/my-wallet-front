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
import getUserData from "../api/getUserData";
import signOut from "../api/singOut";
import { useNavigate } from "react-router-dom";
import ResponseMessage from "../components/models/ResponseMessage";

export default function HomePage() {
	const [entries, setEntries] = useState(null);
	const [name, setName] = useState(localStorage.getItem("name"));
	const navigate = useNavigate();

	useEffect(() => {
		async function getUserName() {
			const response = await getUserData();
			if (!response.error) {
				setName(response.data.name);
				localStorage.setItem("name", response.data.name);
			}
		}
		async function getData() {
			const response = await getUserEntries();
			if (!response.error) {
				setEntries(response.data);
				console.log(entries);
			}
		}

		if (name === null || !name) getUserName();
		getData();
	}, []);

	if (!entries) {
		return <LoadingPage />;
	}
	return (
		<Page>
			<Authenticate />
			<ResponseMessage />
			<TopSection>
				<PageTitle text={`Olá, ${name}`} />
				<LogoutIcon onClick={handleSignOutClick} className="icon" />
			</TopSection>

			<Entry entries={entries} />

			<Options>
				<EntryButton
					title="Nova entrada"
					Icon={PlusIcon}
					link="/nova-entrada"
				/>
				<EntryButton
					title="Nova saída"
					Icon={MinusIcon}
					link="/nova-saida"
				/>
			</Options>
		</Page>
	);

	async function handleSignOutClick() {
		const response = await signOut();
		console.log(response);
		navigate("/");
	}
}

const Page = styled(PageModel)`
	.icon {
		font-size: 30px;
		color: #ffffff;
		cursor: pointer;
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

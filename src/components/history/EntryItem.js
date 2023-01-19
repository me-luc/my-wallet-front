import styled from "styled-components";

export default function EntryItem({ date, description: title, price, type }) {
	return (
		<Item>
			<LeftBox>
				<Date>{date}</Date>
				<Title>{title}</Title>
			</LeftBox>

			<Price type={type}>{price}</Price>
		</Item>
	);
}

const Item = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

const Date = styled.p`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #c6c6c6;
	margin-right: 8px;
`;

const Title = styled.h4`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #000000;
`;

const Price = styled.p`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: right;
	color: ${({ type }) =>
		(type === "income" && "#03ac00") || (type === "outcome" && "#c70000")};
`;

const LeftBox = styled.div`
	display: flex;
`;

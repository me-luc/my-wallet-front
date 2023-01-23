import styled from "styled-components";
import { getDateDdMm } from "../../utils/Date";
import EntryItem from "./EntryItem";

export default function Entry({ entries }) {
	return (
		<StyledSection>
			<div className="aux">
				<ItemsList>
					{entries.map(
						(item) =>
							item && (
								<EntryItem
									key={item._id}
									date={getDateDdMm(item.date)}
									description={item.description}
									price={item.price}
									type={item.type}
								/>
							)
					)}
				</ItemsList>

				<TotalSection>
					<Balance>SALDO</Balance>
					<Price data-test="total-amount">{getUserTotal()}</Price>
				</TotalSection>
			</div>
		</StyledSection>
	);

	function getUserTotal() {
		const pricesArr = entries.map((entry) => Number(entry.price));
		const sum = pricesArr.reduce((add, a) => add + a, 0);
		return sum || 0;
	}
}

const StyledSection = styled.section`
	background-color: #fff;
	width: 100%;
	height: 100%;
	margin: 25px 0 15px 0;

	border-radius: 5px;
	overflow-y: scroll;

	.aux {
		width: 100%;
		height: 100%;
		position: relative;
	}
`;

const ItemsList = styled.ul`
	text-decoration-style: none;
	box-sizing: border-box;
	padding: 20px 15px 10px 15px;

	height: calc(100% - 35px);
	overflow: hidden;
	overflow-y: scroll;
`;

const TotalSection = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	box-sizing: border-box;
	padding: 10px 15px 5px 15px;

	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 1;

	background: #fff;
`;

const Balance = styled.h4`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	color: #000000;
`;

const Price = styled.p`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	text-align: right;
	color: #03ac00;
`;

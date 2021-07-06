import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);
	return (
		<ul className="list">
			{transactions.map((transaction) => (
				<Transaction key={transaction.id} transaction={transaction} />
			))}
		</ul>
	);
};

export default TransactionList;

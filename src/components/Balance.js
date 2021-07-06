import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amount = transactions
		.reduce((sum, transaction) => (sum += transaction.amount), 0)
		.toFixed(2);
	return (
		<>
			<h4>Your Balance</h4>
			<h1>{amount} ₹</h1>
		</>
	);
};

export default Balance;

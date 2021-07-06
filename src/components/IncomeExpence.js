import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpence = () => {
	const { transactions } = useContext(GlobalContext);
	let income = 0,
		expence = 0;
	transactions.forEach((transaction) => {
		if (transaction.amount > 0) {
			income += transaction.amount;
		} else {
			expence += transaction.amount;
		}
	});
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">{income.toFixed(2)} ₹</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">{Math.abs(expence).toFixed(2)} ₹</p>
			</div>
		</div>
	);
};

export default IncomeExpence;

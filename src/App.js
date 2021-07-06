import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpence from "./components/IncomeExpence";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpence />
				<History />
				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;

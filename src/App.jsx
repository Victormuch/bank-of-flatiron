import { useState } from "react";
import "../src/App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import TransactionForm from "./Components/TransactionForm";
import TransactionTable from "./Components/TransactionTable";

function App() {
  const things = [
    {
      date: "2024-12-01",
      description: "Movie",
      category: "Entertainment",
      Amount: "$100",
    },
    {
      date: "2024-11-02",
      description: "game",
      category: "Gaming",
      Amount: "$110",
    },
    {
      date: "2024-10-03",
      description: "Hicking",
      category: "Entertainment",
      Amount: "$120",
    },
    {
      date: "2024-09-04",
      description: "Fries",
      category: "Food",
      Amount: "$130",
    },
    {
      date: "2024-08-05",
      description: "Swimming",
      category: "Entertainment",
      Amount: "$140",
    },
    {
      date: "2024-12-01",
      description: "Check-up",
      category: "Health",
      Amount: "$150",
    },
  ];
  const [transactions, setTransactions] = useState(things);
  return (
    <div className="">
      <Header />
      <SearchBar
        transactions={transactions}
        setTransactions={setTransactions}
        things={things}
      />
      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;

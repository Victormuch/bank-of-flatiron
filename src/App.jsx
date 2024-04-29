import { useState } from "react";
import "../src/App.css";
import Header from "./Components/Head";
import SearchBar from "./Components/SearchBa";
import TransactionForm from "./Components/TransactionF";
import TransactionTable from "./Components/TransactionT";

function App() {
  // Sample data for transactions
  const things = [
    {
      date: "2024-12-01",
      description: "Movie",
      category: "Entertainment",
      amount: "$100",
    },
    {
      date: "2024-11-02",
      description: "game",
      category: "Gaming",
      amount: "$110",
    },
    {
      date: "2024-10-03",
      description: "Hicking",
      category: "Entertainment",
      amount: "$120",
    },
    {
      date: "2024-09-04",
      description: "Fries",
      category: "Food",
      amount: "$130",
    },
    {
      date: "2024-08-05",
      description: "Swimming",
      category: "Entertainment",
      amount: "$140",
    },
    {
      date: "2024-12-01",
      description: "Check-up",
      category: "Health",
      amount: "$150",
    },
  ];

  // State for managing transactions
  const [transactions, setTransactions] = useState(things);

  // Return statement containing the JSX structure
  return (
    <div className="">
      {/* Header component */}
      <Header />

      {/* SearchBar component */}
      <SearchBar
        transactions={transactions}
        setTransactions={setTransactions}
        things={things}
      />

      {/* TransactionForm component */}
      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />

      {/* TransactionTable component */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}

// Exporting the App component
export default App;

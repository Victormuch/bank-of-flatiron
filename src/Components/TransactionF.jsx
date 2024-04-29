// Import the useState hook from React
import { useState } from "react";

// Define the TransactionForm component
function TransactionForm({ transactions, setTransactions }) {
  // Initialize state for description input fields
  const [description, setDescription] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Update transactions state with new transaction
    setTransactions([...transactions, description]);
  }

  // Handle input field changes
  function handleChange(e) {
    // Update description state with new input values
    setDescription({
      ...description,
      [e.target.name]: e.target.value,
    });
  }

  // Return JSX for the TransactionForm component
  return (
    <div className="row border">
      <div className="col-3">
        <input
          type="date"
          name="date"
          value={description.date}
          onChange={handleChange}
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          name="description"
          value={description.description}
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          name="category"
          value={description.category}
          placeholder="Category"
          onChange={handleChange}
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          name="amount"
          value={description.amount}
          placeholder="Amount"
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <button type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

// Export the TransactionForm component
export default TransactionForm;

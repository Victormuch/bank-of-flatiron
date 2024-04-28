import { useState } from "react";
function TransactionForm({ transactions, setTransactions }) {
  const [description, setDescription] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setTransactions([...transactions, description]);
  }
  function handleChange(e) {
    setDescription({
      ...description,
      [e.target.name]: e.target.value,
    });
  }

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
          type="text "
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
export default TransactionForm;

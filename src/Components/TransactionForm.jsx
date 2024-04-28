function TransactionForm() {
  return (
    <div className="row border">
      <div className="col-3">
        <input type="date" />
      </div>
      <div className="col-3">
        <input type="text" placeholder="Description" />
      </div>
      <div className="col-3">
        <input type="text" placeholder="Category" />
      </div>
      <div className="col-3">
        <input type="text" placeholder="Amount" />
      </div>
      <div className="col-12">
        <button>Add Transaction</button>
      </div>
    </div>
  );
}
export default TransactionForm;

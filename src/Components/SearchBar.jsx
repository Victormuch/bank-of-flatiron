function SearchBar({ transactions, setTransactions, things }) {
  function handleChange(e) {
    const info = e.target.value;
    if (info.length > 0) {
      const filtered = transactions.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(info.toLowerCase());
      });
      if (filtered.length > 0) {
        setTransactions([...filtered]);
      }
    } else {
      setTransactions([...things]);
    }
  }

  return (
    <div>
      <input
        onChange={handleChange}
        className="form-control"
        type="text"
        placeholder="Search your transactions"
      />
    </div>
  );
}

export default SearchBar;

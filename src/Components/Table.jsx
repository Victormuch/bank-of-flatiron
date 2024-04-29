function Table({ transactions }) {
  const data = transactions.map((transaction, index) => {
    return (
      <tr key={index + 1}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>

        <td>{transaction.category}</td>

        <td>{transaction.amount}</td>
      </tr>
    );
  });
  return <>{data}</>;
}
export default Table;

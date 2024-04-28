function Table({ transactions }) {
  const data = transactions.map((transaction, index) => {
    return (
      <tr key={index + 1}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>

        <td>{transaction.category}</td>

        <td>{transaction.Amount}</td>
      </tr>
    );
  });
  return <>{data}</>;
}
export default Table;

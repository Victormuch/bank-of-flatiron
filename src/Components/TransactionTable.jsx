import Table from "./Table";
function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <Table transactions={transactions} />
      </tbody>
    </table>
  );
}

export default TransactionTable;

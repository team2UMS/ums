const Table = (data)=>{
    console.log(data);
    return (<div className="container">
    <table className="main-edit-table" align="right">
    <div className='text-white'><thead>
            <tr>
                <th className="sticky-column">Transaction ID</th>
                <th className="sticky-column">Transaction Type</th>
                <th className="sticky-column">Transaction Amount</th>
                <th className="sticky-column">Transaction Date</th>
            </tr>
        </thead>
        <tbody>
                {data.transactions.data?.map((transaction) => (
                    <tr key={transaction.transactionId}>
                        <td>{transaction.transactionId}</td>
                         <td>{transaction.transactionType}</td>
                         <td>{transaction.amount}</td>
                         <td>{transaction.transactionDate}</td>
                    </tr>      
                                ))}
        </tbody>
    </div></table>
</div>);
};
export default Table;
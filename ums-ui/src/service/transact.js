const { REACT_APP_API_URL } = process.env;
export async function handleLoan(e,customerId){
    var a = await fetch(`${REACT_APP_API_URL}/api/applyloan`,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerId:customerId,
          branch:e.target.branch.value,
          loanamount:e.target.amount.value
        })
    });
    var resp= await a.json();
    if(resp.status===200)
    alert("Loan applied successfully");
    else if(resp.status===400)
    alert("Loan failure:Limit crossed");
    else
    alert("Internal Server Error");

}
export async function handleTransaction(e,customerId){
    var type=e.target.type.value;
    var a = await fetch(`${REACT_APP_API_URL}/api/`+type,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerId:customerId,
          type:type,
          amount:e.target.amount.value
        })
    });
    var resp= await a.json();
    if(resp.status===200)
    alert(type+" Successfull");
    else if(resp.status===400)
    alert(type+" failed");
    else alert("Internal Server Error");
}
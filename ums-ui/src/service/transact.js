const { REACT_APP_API_URL } = process.env;
export async function handleLoan(e,customerId){
  e.preventDefault();
    var a = await fetch(`${REACT_APP_API_URL}/api/applyloan`,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerId:customerId,
          branch:e.target.branch.value,
          loanAmount:e.target.amount.value
        })
    });
    var resp= await a.json();
    if(resp.status===200)
    alert(resp.message);
    else if(resp.status===400)
    alert(resp.message);
    else
    alert("Internal Server Error");

}
export async function handleTransaction(e,customerId){
  e.preventDefault();
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
    alert(resp.message);
    else if(resp.status===400)
    alert(resp.message);
    else alert("Internal Server Error");
}
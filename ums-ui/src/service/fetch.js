const { REACT_APP_API_URL } = process.env;
export async function fetchStatement(e,setTableData,setToggle){
    e.preventDefault();
    var a = await fetch(`${REACT_APP_API_URL}/api/statement`,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          c_id:e.target.cid.value,
          t_type:e.target.type.value,
          fDate:e.target.sdate.value,
          tDate:e.target.edate.value
        })
    });
    var resp= await a.json();
    setTableData(resp);
    setToggle(1);
}
export async function fetchBalance(customerId){
    var balanceResp = await fetch(`${REACT_APP_API_URL}/api/balance?c_id=`+customerId,{
        method:'GET',
        mode:'cors'
    });
    var loanResp = await fetch(`${REACT_APP_API_URL}/api/loanbalance?c_id=`+customerId,{
        method:'GET',
        mode:'cors'
    });
    var balance= await balanceResp.json();
    var loan= await loanResp.json();
    if(balance.status===200 && loan.status===200)
    return [balance.message,loan.message];
    else
    alert("Internal Server Error");

}
const { REACT_APP_API_URL } = process.env;
export  function fetchStatement(e,customerId){
    e.preventDefault();
    console.log(JSON.stringify({
        customerId:customerId,
        transactionType:e.target.type.value,
        fromDate:e.target.sdate.value,
        toDate:e.target.edate.value
      }))
    return fetch(`${REACT_APP_API_URL}/api/statement`,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerId:customerId,
          transactionType:e.target.type.value,
          fromDate:e.target.sdate.value,
          toDate:e.target.edate.value
        })
    })
    .then(function(response) {
        return response.json();
    });
}
export function fetchAccBalance(customerId){
    return fetch(`${REACT_APP_API_URL}/api/balance?c_id=`+customerId,{
        method:'GET',
        mode:'cors'
    }).then(res=>{
        return res.json();
    });

}
export function fetchLoanBalance(customerId){
    return fetch(`${REACT_APP_API_URL}/api/loanbalance?c_id=`+customerId,{
        method:'GET',
        mode:'cors'
    }).then(res=>{return res.json();
    });
    

}
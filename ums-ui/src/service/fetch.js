const { REACT_APP_API_URL } = process.env;
export async function fetchStatement(e,tableShow,setTableShow,data){
    e.preventDefault();
    // var a = await fetch(`${REACT_APP_API_URL}/api/statement`,{
    //     method:'POST',
    //     mode:'cors',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       c_id:e.target.cid.value,
    //       t_type:e.target.type.value,
    //       fDate:e.target.sdate.value,
    //       tDate:e.target.edate.value
    //     })
    // });
    ///var resp= await a.json();
    data=[{
        "transactionId":"1",
        "transactionType":"1",
        "amount":"1",
        "transactionDate":"1"
    }];
    
    
}

const { REACT_APP_API_URL } = process.env;
export async function handleLogin(e,navigate,updateState){
    e.preventDefault();
    var a = await fetch(`${REACT_APP_API_URL}/api/login`,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contactNumber:e.target.uno.value,
          password:e.target.pass.value
        })
    });
    var resp= await a.json();
    if(resp.status===401){
        alert(resp.message);
    }
    else if(resp.status===409){
        alert(resp.message);
        navigate("../register", { replace: true });
    }
    else if(resp.status===200){
        updateState("customerId",resp.data);
        navigate("../userMenu", { replace: true });
    }
    else{
        alert("Internal Server Error");
    }
}
export async function handleRegister(e,navigate){
    e.preventDefault();
    var a = await fetch(`${REACT_APP_API_URL}/api/register`,{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contactNumber:e.target.uno.value,
          firstName:e.target.fname.value,
          lastName:e.target.lname.value,
          city:e.target.city.value,
          occupation:e.target.occ.value,
          dob:e.target.dob.value,
          branch:e.target.branch.value,
          password:e.target.pass.value
        })
    });
    var resp= await a.json();
    if(resp.status===409){
        alert(resp.message);
        navigate("../", { replace: true });
    }
    else if(resp.status===200){
        navigate("../", { replace: true });
    }
    else{
        alert("Internal Server Error");
    }
}
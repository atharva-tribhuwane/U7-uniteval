import React from 'react'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
export const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    function handleLogin(){
        let payLoad = {
            email,
            password,
            ip_address:"dummy"
        }
        fetch(`http://localhost:3001/login`, {
            method: "POST",
            body: JSON.stringify(payLoad)
        })
        .then((res)=>res.json())
        .then((res)=>{
           console.log(res);
        })
    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Login</h1>
        <Card sx={{ maxWidth: 345 }} style={{padding:"3%"}}>
        Email:<TextField id="outlined-basic" label="Outlined" variant="outlined" style={{margin:"3%"}} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        Password:<TextField id="outlined-basic" label="Outlined" variant="outlined" type={'password'} value={password} style={{margin:"3%"}} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
        <div><Button variant="contained" onClick={()=>handleLogin()}>Submit</Button></div>
      </Card>
    </div>
  )
}



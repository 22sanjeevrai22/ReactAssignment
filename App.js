import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  return <LoginPage/>;

}

function LoginPage(){
  return (

    <div className='container'>

    <LoginTitle/>
    <AddUsernamePassword/>


    </div>

  )
}

function LoginTitle(){
  return(
    <h2>Login-Page</h2>
  )
  }



function AddUsernamePassword(){

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleUserChange = (event)=>{
    // console.log(event)
    const usernameValue = event.target.value
    setUsername((_) => usernameValue)
  }

  const handlePasswordChange = (event)=>{
    // console.log(event)
    const usernameValue = event.target.value
    setPassword((_) => usernameValue)
  }

  const handleSubmitButton = () => {
    if(username && password){
      if(username === 'admin' && password === 'admin'){
        alert('Successful Login')
      }
      else{
        alert('Failed Login')
      }
    }
    
  }


  useEffect(() => {
    alert('Please Login')
  }, [])
  

  return(
    <>
    <div className='user'>
      <input type='text' onChange={handleUserChange} placeholder='Username'></input>
    </div>
  
    <div className='password'>
      <input type='password' onChange={handlePasswordChange} placeholder='Password'></input>
    </div>
    
    <div>
      <button type='submit' onClick={handleSubmitButton}>Login</button>
    </div>

    </>

  )
}



export default App;

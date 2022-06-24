import React, { Component, useState } from 'react';
import axios from 'axios';
import formUrlEncoded from 'form-urlencoded'


const Loginform= () => {
   const[username,setUsername] = useState('');
   const[password, setPassword]= useState('');
    const handleUsernameChange=(event)=> {
        setUsername(event.target.value)
       
    }
       
   const  handlePasswordChange=(event)=>{
    setPassword(event.target.value)
       
    }

    
       const clickHandler=(event)=>{
            event.preventDefault()
            // var bodyFormData = new FormData();
            const data= {
                grant_type: 'password',
                client_id: 'web-dashboard',
                client_secret: 'SuperSecretPassword',
                scope: 'openid profile role email offline_access adminApi mobileApi',
                username: username,
                password: password

            }

 
            axios({
                method: "post",
                url: "https://edeaf-api-staging.azurewebsites.net/connect/token",
                data: formUrlEncoded(data)
              
              })
                .then(function (response) {
                  //handle success
                  console.log(response);
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });
           
        
        }
    

  

    return (
    <form>
     <div>
        <label>
        Username
            </label>
            
         

            <input type='text' value={username}onChange={handleUsernameChange}></input>
            
     <label>
        Password
             </label>
             
             <input type='text' value={password}onChange={handlePasswordChange}></input>
             </div>

             <div>
             <button  onClick={clickHandler}> Submit </button>
             </div>
             </form>


            
            
    )
  }



export default Loginform;
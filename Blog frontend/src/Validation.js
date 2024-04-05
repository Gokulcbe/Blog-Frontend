import React from 'react';
import { useState } from "react";
import styles from './validation.module.css';
import TextField from '@mui/joy/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
function Validation() {
    const [formInput, setFormInput] = useState({
      username: "",
      emailId: "",
      Password: "",
    });
  
    const [formError, setFormError] = useState({
      username: "",
      emailId: "",
      Password: "",
    });
  
    const handleUserInput = (name, value) => {
      setFormInput({
        ...formInput,
        [name]: value,
      });
    };
  
    const validateFormInput = (event) => {
      event.preventDefault();
      let inputError = {
        username: "",
        emailId: "",
        Password: "",
      };
      
    
      if (!formInput.username && !formInput.emailId && !formInput.Password) {
        setFormError({
          ...inputError,
          username: "Enter valid username",
          emailId:"Enter valid emailId",
          Password:"This coloumn should not be empty"
         
        });
        return
      }
        else if(formInput.username == ""){
        setFormError({
            ...inputError,
            username: "Please fill the Column",
        });
        return;
      }
      else if(formInput.emailId == ""){
        setFormError({
            ...inputError,
            emailId: "Invalid Email",
        });
        return;
      }
  
    //   if (formInput.Password !==('^(?=.?[A-Za-z])(?=.?[0-9]).{8,}$')) {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9@!#$%^&*]{8,}$/;

        if(!formInput.Password.match(pattern)){
            setFormError({
                ...inputError,
                Password: "Password should have minimum 6 characters that includes uppercase,lowercase and some special characters",
            });
            return;
        }
  

      setFormError(inputError);
    };

    return (
        <>
        <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper elevation={24} sx={{height: '500px', width: '400px', padding:'50px', backgroundColor: 'pink'}}>
            <Typography sx={{marginBottom: '10px', display: 'flex', textAlign: 'center', justifyContent: 'center'}}><b>LOGIN FORM</b></Typography>
            <Typography sx={{marginBottom: '20px', display: 'flex', textAlign: 'center', justifyContent: 'center'}}>Please fill the below details</Typography>
            <Typography sx={{marginBottom: '10px'}}>Enter your Username</Typography>
            <TextField
              value={formInput.username}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              variant="outlined"
              name="username"
              type="text"
              className="input"
              placeholder="Enter username"

            /><br></br>
            <p className={styles.errormessage}>{formError.username}</p>
            <Typography sx={{marginBottom: '10px'}}>Enter your Email</Typography>
            <TextField
              value={formInput.emailId}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              variant="outlined"
              name="emailId"
              type="email"
              className="input"
              placeholder="Enter your emailId"
                         /><br></br>
                         <p className={styles.errormessage}>{formError.emailId}</p>
                         <Typography sx={{marginBottom: '10px'}}>Enter your Password</Typography>
                         <TextField 
              value={formInput.Password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              variant="outlined"
              name="Password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className={styles.errormessage}>{formError.Password}</p>
            <Button onClick={validateFormInput} sx={{marginTop: '30px'}}variant="contained" fullWidth>Login</Button>
        </Paper>
        </div>
        </>
         );
        }
        
        export default Validation;
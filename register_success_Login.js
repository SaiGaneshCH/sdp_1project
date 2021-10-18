import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from '@mui/material/Button';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
export class Login extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values , handleChange } = this.props;
        return (

            <MuiThemeProvider>
            <React.Fragment>
                <AppBar  title="Login to your account" IconButton='HealthAndSafetyIcon'  />
            
                <TextField
                hintText = "Enter your User Name"
                floatingLabelText="User Name"
                onChange = { handleChange('userName') } 
                defaultValue = {values.userName}
                />
                    <br/>
            <TextField
                hintText = "Enter your Email"
                floatingLabelText="or Enter your email"
                onChange = { handleChange('email1') } 
                defaultValue = {values.email1}
                />
  
                <br/>
                <TextField
                hintText = "Enter your Password"
                floatingLabelText="Your password"
                onChange = { handleChange('password') } 
                defaultValue = {values.password}
                />
        <br/>
        <br/>
         <Button startIcon={<HealthAndSafetyIcon/>}
         color="primary"
              variant="contained"
              onClick={this.continue}>Login</Button>
      
              
            </React.Fragment>
            </MuiThemeProvider>
 
        )
    }
}



export default Login

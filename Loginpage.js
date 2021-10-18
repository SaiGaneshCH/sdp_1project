import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from '@mui/material/Button';
import Home from './Home';  
import Register from './Register';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
import { BrowserRouter as Router,Link,Route,Switch, render } from 'react-router-dom';
export class Loginpage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  to = e =>{
      e.preventDefault();
      this.props.keepStep();
  }
    
    render() {
        const { values , handleChange } = this.props;
        return (
<>
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
              onClick={this.to}>Login</Button>
        <br/>
        <br/>
        <p>Do not have an account!......Register here 👇👇</p>                          
        
        <Router>
<Switch>
<Route path="/Register" component={Register} />     
 <Link onClick={this.continue}>Register</Link>
</Switch>
</Router>  
              
            </React.Fragment>
            </MuiThemeProvider>
 </>
        )
    }
}



export default Loginpage

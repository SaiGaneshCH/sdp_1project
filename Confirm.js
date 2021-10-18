import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from '@mui/material/Button';
import Home from './Home';  
import {List,ListItem} from 'material-ui/List'
import Register from './Register';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { BrowserRouter as Router,Link,Route,Switch, render } from 'react-router-dom';
import { breakpoints } from '@mui/system';
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    
    render() {
        const { values , handleChange } = this.props;
        return (

            <MuiThemeProvider>
            <React.Fragment>
                <AppBar  title="Confirm" IconButton='HealthAndSafetyIcon'  />
            
                <TextField
                hintText = "Enter your First Name"
                floatingLabelText="First Name"
                onChange = { handleChange('firstName') } 
                defaultValue = {values.firstName}
                />
                <br/>
                <TextField
                hintText = "Enter your Last Name"
                floatingLabelText="Last Name"
                onChange = { handleChange('lastName') } 
                defaultValue = {values.lastName}
                />
            <br/>
            <TextField
                hintText = "Enter your Email"
                floatingLabelText="sample@gmail.com"
                onChange = { handleChange('email2') } 
                defaultValue = {values.email2}
                />
  <br/>
                <TextField
                hintText = "Enter your Mobile Number"
                floatingLabelText="Mobile Number"
                onChange = { handleChange('mobileNumber') } 
                defaultValue = {values.mobileNumber}
                />
                <br/>
                <TextField
                hintText = "Enter your Age"
                floatingLabelText="Age"
                onChange = { handleChange('age') } 
                defaultValue = {values.age}
                />
                <br/>
                <TextField
                hintText = "Enter your City"
                floatingLabelText="City"
                onChange = { handleChange('city') } 
                defaultValue = {values.city}
                />
                <br/>
                <TextField
                hintText = "Enter your Address"
                floatingLabelText="Address"
                onChange = { handleChange('address') } 
                defaultValue = {values.address}
                />
                <br/>
                <TextField
                hintText = "Enter your Password"
                floatingLabelText="Enter strong Password"
                onChange = { handleChange('password') } 
                defaultValue = {values.password}
                />
                <br/>
                <TextField
                hintText = "Enter your Password again"
                floatingLabelText="Confirm Password"
                onChange = { handleChange('confirmpassword') } 
                defaultValue = {values.confirmpassword}
                />
                <br/>
                <TextField
                hintText = "Enter your Occupation"
                floatingLabelText="Occupation"
                onChange = { handleChange('occupation') } 
                defaultValue = {values.occupation}
                />
                <br/>
                <TextField
                hintText = "Enter your bio"
                floatingLabelText="Your Bio"
                onChange = { handleChange('bio') } 
                defaultValue = {values.bio}
                />
        <br/>
        <br/>
         <Button startIcon={<CloudDoneIcon/>}
         color="primary"
              variant="contained"
              onClick={this.continue}>Confirm</Button>    <Button color="primary"
              variant="contained"
              onClick={this.back}>Back</Button>
       
              
            </React.Fragment>
            </MuiThemeProvider>
 
        )
    }
}



export default Confirm

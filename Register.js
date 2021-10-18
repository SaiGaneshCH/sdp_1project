import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';
import './Register.css'
import { ClassNames } from '@emotion/react';
export class Register extends Component {
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
           <div div className='Reg'>
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Your Details" />
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
                <Button color="primary"                                      
              variant="contained"
              onClick={this.continue}>Continue</Button>      <Button color="primary"
              variant="contained"
              onClick={this.back}>Back</Button>
                
            </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
    }
}


export default Register

import  React, { Component } from 'react'
import Register from './Register'
import Loginpage from './Loginpage'
import Confirm from './Confirm'
import Home from './Home'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
import { Button } from '@mui/material'
import Success from './Success'
import Login from './register_success_Login'
export class Userform extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email1: '',
        email2:'',
        occupation: '',
        city: '',
        mobileNumber: '',
        bio: '',
        userName: '',
        age: '',
        password1: '',
        password: '',
        confirmpassword: '',
        address: '',
    }
    // To register page
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1 
        });
    }
     // If unfortunately went to register page
     prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step-1
        });
    }
    //To set step
    keepStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 3
        });
    }
    goStep = () =>
    {
        const { step } = this.state;
        this.setState({
            step: step-2
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    };
  
    render() {
        const { step } = this.state;
        const { firstName,lastName, email1,email2,occupation,city,mobileNumber,bio,userName,age,password,password1, address,confirmpassword } = this.state;
    const values = { firstName,lastName, email1,email2,occupation,city,mobileNumber,bio,userName,age,password,password1, address,confirmpassword }
  

    switch(step){ 
        
        case 1:
        return(
            <Loginpage
            nextStep={this.nextStep}
            keepStep={this.keepStep}
            handleChange={this.handleChange}
            values={values}
            />
            )
         
        case 2:
            return(
                <Register
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
                )
               // case 3: 
               // return <Confirm
                //nextStep={this.nextStep}
                //prevStep={this.prevStep}
                //handleChange={this.handleChange}
                //values={values}
                ///>
                
            case 3: 
            return <Success
            nextStep={this.nextStep}
            goStep={this.goStep}
            values={values}/>
             case 4:
                return(
                    <Home/>
                         )
            
        }    
   
    }
}
export default Userform

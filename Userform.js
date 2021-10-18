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
            step: step + 5
        });
    }
    
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    };
  
    render() {
        const { step } = this.state;
        const { firstName,lastName, email1,email2,occupation,city,mobileNumber,bio,userName,age,password,address,confirmpassword } = this.state;
    const values = { firstName,lastName, email1,email2,occupation,city,mobileNumber,bio,userName,age,password,address,confirmpassword }
  

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
                case 3: 
                return <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
                
            case 4: 
            return <Success
            nextStep={this.nextStep}
            values={values}/>
            case 5:
                return(
                    <Login
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    )
             case 6:
                return(
                    <Home/>
                         )
            
        }    
   
    }
}
export default Userform

import  React, { Component } from 'react'
import Register from './Register'
import Loginpage from './Loginpage'
export class Userform extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        mobileNumber: '',
        bio: '',
        userName: '',
        age: '',
        password: '',
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
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    };
    render() {
        const { step } = this.state;
        const { firstName,lastName, email,occupation,city,mobileNumber,bio,userName,age,password,address } = this.state;
    const values = { firstName,lastName, email,occupation,city,mobileNumber,bio,userName,age,password,address }
  

    switch(step){ 
        case 1:
        return(
            <Loginpage
            nextStep={this.nextStep}
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
                case 2: 
                return <h1>PersonalDetails</h1>
            
                case 3: 
            return <h1>Confirm</h1>
            case 4: 
            return <h1>Success</h1>
        }    
   
    }
}
export default Userform

import React, { Component } from 'react'
import Button from '@mui/material/Button';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
import './success.css'
export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.goStep();
    }
    render() {
        return (
            <div className='success'>
            <h1>Success</h1>       <br/>    <Button startIcon={<HealthAndSafetyIcon />}
            color="primary"
            variant="contained"
            onClick={this.continue}>Continue</Button>
            </div>
        )
    }
}

export default Success

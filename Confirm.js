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
        const { values :{firstName,lastName,email2,mobileNumber,age,city,address,password1,occupation,bio} } = this.props;
        return (

            <MuiThemeProvider>
            <React.Fragment>
                <AppBar  title="Confirm" IconButton='HealthAndSafetyIcon'  />
            <List>
<ListItem
primaryText="First Name"
secondaryText={ firstName }
/>
<ListItem
primaryText="Last Name"
secondaryText={ lastName }
/>
<ListItem
primaryText="Email"
secondaryText={ email2 }
/>
<ListItem
primaryText="Mobile Number"
secondaryText={ mobileNumber }
/>
<ListItem
primaryText="Age"
secondaryText={ age }
/>
<ListItem
primaryText="Address"
secondaryText={ address }
/>
<ListItem
primaryText="City"
secondaryText={ city }
/>
<ListItem
primaryText="Password"
secondaryText={ password1 }
/>
<ListItem
primaryText="Occupation"
secondaryText={ occupation }
/>
<ListItem
primaryText="Your Bio"
secondaryText={ bio }
/>
            </List>
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

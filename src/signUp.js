import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {RaisedButton} from 'material-ui';
import firebase from './firebase';
import {browserHistory} from 'react-router';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName: "",
            email:"",
            password:""
        }
    }
    updateField = (stateName, ev) =>{
        let obj = {};
        obj[stateName] = ev.target.value;
        this.setState(obj);
        console.log(this.state.stateName);
    }
    submit = () =>{
        console.log(`UserName: ${this.state.userName}`);
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user)=>{
            console.log(user);
            this.props.history.replace("/home");
        })
        .catch(error=>console.log(error.message));
                
    }
    navigateLogin = () =>{
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div style={{width:'50%', margin:'0 auto'}}>
                        <h1>SignUp</h1>
                        <TextField
                            style={{paddingLeft:'70px'}}
                            onChange={(event)=>{this.updateField('userName', event)}}
                            value={this.state.userName}
                            hintText="User Name"
                            floatingLabelText="Username"
                        /><br />
                        <TextField
                            style={{paddingLeft:'70px'}}
                            onChange={(event)=>{this.updateField('email', event)}}
                            value={this.state.email}                        
                            hintText=""
                            floatingLabelText="Email"
                        /><br />
                        <TextField
                            style={{paddingLeft:'70px'}}
                            onChange={(event)=>{this.updateField('password', event)}}
                            value={this.state.password}                        
                            type="password"
                            hintText=""
                            floatingLabelText="Password"
                        /><br />
                        <div style={{width:'100%', textAlign:'center'}}>
                            <RaisedButton onClick={this.submit} label="Submit" primary={true} style={{margin: '12px'}} />
                            <RaisedButton onClick={this.navigateLogin} label="Login" primary={true} style={{margin: '12px'}} />
                        </div>
                    </div>
                    
                </MuiThemeProvider>
            </div>
        );
    }
}

export default SignUp;
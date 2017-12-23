import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {RaisedButton} from 'material-ui';
import firebase from './firebase';
import {browserHistory} from 'react-router';



class Login extends React.Component{
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
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user)=>{
            console.log(user);
            this.props.history.push("/home");
        })
        .catch(error=>console.log(error.message));
                
    }
    navigateSignup = () =>{
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div style={{width:'50%', margin:'0 auto'}}>

                        <h1>Login</h1>
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
                            <RaisedButton onClick={this.navigateSignup} label="SignUp" primary={true} style={{margin: '12px'}} />                    
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Login;
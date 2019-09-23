import React, {Component} from 'react';
import {FormControl, FormGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";



class Registration extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            user_fullname: '',
            user_email: '',
            company_name: '',
            position_name: '',
        };
    }
    handleChange = (event, title) => this.setState({[title]: event.target.value});

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({isloading: true});
        console.log(this.state);
        return fetch('http://localhost:9000/registration',
            { mode:"no-cors" , headers: {'Content-Type': 'application/json'}, method:"POST" ,body:this.state}
        ).then(response => {console.log(response);
        })
            .catch(error => {console.log(error)})
    };
    render() {
        return (
            <form method="POST" onSubmit={this.handleSubmit} >
                <FormGroup controlId="username" bssize="large">
                    <FormControl name="username" value={this.state.username} type="text" onChange = {(e) => this.handleChange(e, 'username')} />
                </FormGroup>

                <FormGroup controlId="password" bssize="large">
                    <FormControl name="password"  value={this.state.password} onChange = {(e) => this.handleChange(e, 'password')} type="text" />
                </FormGroup>

                <FormGroup controlId="confirmPassword" bssize="large">
                    <FormControl name="confirmPassword" value={this.state.confirmPassword} onChange = {(e) => this.handleChange(e, 'confirmPassword')} type="text"/>
                </FormGroup>

                <FormGroup controlId="user_fullname" bssize="large">
                    <FormControl name="user_fullname" value={this.state.user_fullname}  type="text" onChange = {(e) => this.handleChange(e, 'user_fullname')} />
                </FormGroup>

                <FormGroup controlId="user_email" bssize="large">
                    <FormControl name="user_email" value={this.state.user_email} type="text" onChange = {(e) => this.handleChange(e, 'user_email')} />
                </FormGroup>

                <FormGroup controlId="company_name" bssize="large">
                    <FormControl name="company_name"  value={this.state.company_name} type="text"  onChange = {(e) => this.handleChange(e, 'company_name')} />
                </FormGroup>

                <FormGroup controlId="position_name" bssize="large">
                    <FormControl name="position_name" value={this.state.position_name} type="text"  onChange = {(e) => this.handleChange(e, 'position_name')} />
                </FormGroup>

                <Button bssize="large" type="submit"> Registration </Button>
            </form>
        );
    }}export default  Registration;
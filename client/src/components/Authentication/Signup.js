import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {signupUser} from '../../actions/authAction.js';

const styles = {
    textField: {
        width: '100%',
        marginBottom: 10
    },
    button: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        this.props.signupUser(userData, this.props.history);
    }

    render() {
        const {classes} = this.props;
        const {errors} = this.state;
        return(
            <Paper style={{padding: 20}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        type='email'
                        label='Email' 
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email'
                        helperText = {errors.email ? errors.email : ''}
                        error = {errors.email ? true : false}
                    />
                    <TextField
                        type='text' 
                        label='Name' 
                        className={classes.textField}
                        value={this.state.userName}
                        onChange={this.handleChange}
                        name='userName'
                        helperText = {errors.userName ? errors.userName : ''}
                        error = {errors.userName ? true : false}
                    />
                    <TextField 
                        type='password'
                        label='Password'
                        className={classes.textField} 
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                        helperText = {errors.password ? errors.password : ''}
                        error = {errors.password ? true : false}
                    />
                    <TextField 
                        type='password'
                        label='Confirm password'
                        className={classes.textField} 
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        name='confirmPassword'
                        helperText = {errors.confirmPassword ? errors.confirmPassword : ''}
                        error = {errors.confirmPassword ? true : false}
                    />
                    <div className={classes.button}>
                        <Button variant='outlined' type='submit'>
                            Submit
                        </Button>
                    </div>
                    
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, {signupUser}) (withRouter(withStyles(styles)(Signup)));
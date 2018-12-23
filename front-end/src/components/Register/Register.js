import React, { Component } from 'react';
import axios from 'axios';
import CardDesign from '../common/CardDesign';
import FieldSet from '../common/FieldSet';
import SubmitBtn from '../common/SubmitBtn';
import { apiUrl } from '../../config';

class Register extends Component {

    fieldArray = [{
        name : 'name',
        labelName : 'Name',
        inputType : 'text',
        inputClass : 'name-input'
    } , {
        name : 'email',
        labelName : 'Email',
        inputType : 'email',
        inputClass : 'email-address'
    } , {
        name : 'mobile',
        labelName : 'Mobile',
        inputType : 'tel',
        inputClass : 'mobile-input'
    }, {
        name : 'password',
        labelName : 'Password',
        inputType : 'password',
        inputClass : 'password-input'
    }]

    onSubmitSignUp = () => {
        if(!this.fieldSetRef){
            return;
        }
        const postData = this.fieldSetRef.getFieldValues();
        axios.post(`${apiUrl}signup`,postData).then(data => {
            data = data.data;
            if(data.isSuccess) {
                this.props.loadUser(data.data)
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        return (
            <article className="center">
                <main className="">
                    <CardDesign className="sign-up" >
                        <FieldSet
                            ref = {inst=>this.fieldSetRef=inst}
                            fieldSetName="Register"
                            fieldArray={this.fieldArray}
                        />
                        <SubmitBtn
                            onSubmit={this.onSubmitSignUp}
                            text="Register"
                        />
                    </CardDesign>
                </main>
            </article>
        );
    }
}

export default Register;
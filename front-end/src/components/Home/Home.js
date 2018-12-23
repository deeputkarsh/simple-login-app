import React, { Component } from 'react';
import axios from 'axios';
import CardDesign from '../common/CardDesign';
import FieldSet from '../common/FieldSet';
import SubmitBtn from '../common/SubmitBtn';
import { apiUrl } from '../../config';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user : state.user
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.fieldArray = [{
            name : 'name',
            labelName : 'Name',
            inputType : 'text',
            initialValue : props.user.name,
            inputClass : 'name-input'
        } , {
            name : 'email',
            labelName : 'Email',
            inputType : 'email',
            initialValue : props.user.email,
            inputClass : 'email-address'
        } , {
            name : 'mobile',
            labelName : 'Mobile',
            inputType : 'tel',
            initialValue : props.user.mobile,
            inputClass : 'mobile-input'
        }];
    }

    onSubmitSignUp = () => {
        if(!this.fieldSetRef){
            return;
        }
        const postData = this.fieldSetRef.getFieldValues();
        axios.post(`${apiUrl}updateProfile`,postData).then(data => {
            const user = data.data;
            if (user.id) {
                this.props.loadUser(user)
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
                            fieldSetName="Profile"
                            fieldArray={this.fieldArray}
                        />
                        <SubmitBtn
                            onSubmit={this.onSubmitSignUp}
                            text="Update"
                        />
                    </CardDesign>
                </main>
            </article>
        );
    }
}

export default connect(mapStateToProps)(Home);
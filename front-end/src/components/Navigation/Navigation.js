import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut, onRouteChange } from '../../reduxHelpers/actions';

const mapStateToProps = state => {
    return {
        isSignedIn : state.isSignedIn
    };
};
const mapDispatchToProps = dispatch => ({
    onRouteChange: (data) =>dispatch(onRouteChange(data)),
    logOut: (data) => dispatch(logOut(data))
});

class Navigation extends Component {
    
    render () {
        const {
            logOut,
            isSignedIn,
            onRouteChange
        } = this.props;
        if (isSignedIn) {
            return (
                <nav className="nav-bar" >
                    <p className='cursor-pointer nav-item' onClick={() => logOut()}>Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav className="nav-bar" >
                    <p className='cursor-pointer nav-item' onClick={() => onRouteChange('signin')} >Sign In</p>
                    <p className='cursor-pointer nav-item' onClick={() => onRouteChange('register')} >Register</p>
                </nav>
            );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
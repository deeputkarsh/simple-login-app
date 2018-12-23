import React, {PureComponent} from 'react';
export default class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value : props.initialValue || ''
        }
    }
    getValue = ()=>{
        return this.state.value;
    }
    setValue = (value)=>{
        this.setState({value});
    }
    onChange = (event)=>{
        this.setValue(event.target.value);
        if(typeof this.props.onChange === 'function') {
            this.props.onChange(event);
        }
    }
    filterProps (props){
        let inputProps = {...props};
        delete inputProps.initialValue;
        return inputProps;
    }
    render (){
        const inputProps = this.filterProps(this.props);
        return (
            <input
                {...inputProps}
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }
}
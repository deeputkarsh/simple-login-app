import React, { Component } from 'react';
import Input from './Input';

export default class FieldSet extends Component {

    getFieldValues = ()=>{
        let returnObj = {};
        const {
            fieldArray = []
        } = this.props;
        fieldArray.forEach(element => {
            const inputRef = this[element.name] || {};
            if(inputRef.getValue) {
                returnObj[element.name] = inputRef.getValue();
            }
        });
        return returnObj;
    }

    renderInputFields (){
        const {
            fieldArray = []
        } = this.props;
        return fieldArray.map((value,index)=>{
            return (
                <div className="field-container" key={`${value.labelName}-${index}`}>
                    <label className="field-label" htmlFor={value.name}>{value.labelName}</label>
                    <Input
                        ref = {inst=>this[value.name]=inst}
                        className = {`input-reset ${value.inputClass}`}
                        type = {value.inputType || "text"}
                        name = {value.name}
                        initialValue = {value.initialValue}
                    />
                </div>
            );
        })
    }
    render(){
        return (
            <fieldset className="field-wrapper">
                <legend className="wrapper-name">{this.props.fieldSetName}</legend>
                {this.renderInputFields()}
            </fieldset>
        );
    }
}
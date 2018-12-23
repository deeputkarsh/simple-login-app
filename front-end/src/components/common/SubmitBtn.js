import React from 'react';
import Input from './Input';

export default function SubmitBtn ({onSubmit,text}) {
    return (
        <div className="submit-btn-wrapper">
            <Input
                onClick={onSubmit}
                className="submit-btn"
                type="submit"
                initialValue={text}
            />
        </div>
    );
}
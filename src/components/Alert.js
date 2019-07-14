import React from 'react';

export const Alert = ({text, type}) => (type && text
    ? <div className={`alert alert-${type}`}>
        <i className='fa fa-info-circle' aria-hidden='true'/> {text}
    </div>
    : null);
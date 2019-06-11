import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = (props) => {
    const {
        value,
    } = props;
    return (
        <button type="button" className="btn btn-outline-success" onClick={props.submitData} >{value}</button>
    );
};


SubmitBtn.propTypes = {
    tag: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string
};

export default SubmitBtn;
import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = (props) => {
    const {
        value,
    } = props;
    return (
        <input type="submit" className="btn btn-outline-success" value={value}></input>
    );
};


SubmitBtn.propTypes = {
    tag: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string
};

export default SubmitBtn;
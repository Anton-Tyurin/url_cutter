import React from 'react';
import PropTypes from 'prop-types';


const Result = (props) => {
    const {
        label,
        shortUrl
    } = props;
    return (
        <div className="row result_block">
            <div className='col'>
                <div className="form-group">
                    <span htmlFor="urlResult" className={"result-header"}>{label}</span>
                    <br/>
                    <span>{shortUrl}</span>
                </div>
            </div>
        </div>
    )
};


Result.propTypes = {
    placeHolder: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.string,
    shortUrl: PropTypes.string,
};

export default Result;
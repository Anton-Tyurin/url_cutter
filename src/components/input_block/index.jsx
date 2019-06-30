import React from 'react';
import SubmitBtn from "../submit_btn";
import PropTypes from 'prop-types';


class Input extends React.Component {
    onInputChange(e){
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.props.updateState(inputName,inputValue);
    }
    render() {
        return (
            <div className="row input_block">
                <form className='col' onSubmit={this.props.submitData.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="urlInput" className={"input-header"} >{this.props.label}</label>
                        <input type="text" className="form-control"
                               name="inputUrl"
                               placeholder={this.props.placeHolder}
                               onChange={this.onInputChange.bind(this)}/>
                        <small className="form-text text-muted">{this.props.helperText}</small>
                    </div>
                    <SubmitBtn
                        value={"Make short!"}
                    />
                </form>
            </div>
        )
    }
};


Input.propTypes = {
    placeHolder: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.string,
};

export default Input;
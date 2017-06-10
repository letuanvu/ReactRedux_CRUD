import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

 class InputText extends Component {

  render() {
    return (
      <div className="form-group">
          <label className="col-md-3 control-label" >{this.props.label}</label>
          <div className="col-md-9">
              <input type="text" id={this.props.inputId} className="form-control" placeholder={this.props.placeHolder} />
              <span className="help-block">{this.props.help}</span>
          </div>
      </div>
    )
  }
}

export default InputText

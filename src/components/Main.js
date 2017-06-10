import React, { Component } from 'react'
import TitlePage from './TitlePage'
export default class Main extends Component {


  render() {
    return (
      <div>
        <TitlePage title="Danh sách công ty" />
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

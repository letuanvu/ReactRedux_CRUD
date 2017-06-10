import React, { Component } from 'react'

 class TitlePage extends Component {

  render() {
    return (
      <div className="content-header">
          <div className="header-section">
              <h1>
                  {this.props.title}
              </h1>
          </div>
      </div>
    )
  }
}

export default TitlePage

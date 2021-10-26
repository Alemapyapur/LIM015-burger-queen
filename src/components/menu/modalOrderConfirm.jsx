import React, { Component } from 'react'
import Portal from './portal'
import "../../styles/menu/modalOrderConfirm.css"

export default class Modal extends Component {
  render() {

    const { children, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div className="wrapper">
            <div className="window">
              <button className="close-btn" onClick={toggle}>X</button>
              <div className="children-div"> {children} </div>
            </div>
          </div>
        )}
      </Portal>
    )
  }
}

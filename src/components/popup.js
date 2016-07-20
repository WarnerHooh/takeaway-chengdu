import React, { Component, PropTypes } from 'react'

class Popup extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="popup">
        {(() => {
          if (this.props.open !== false) {
            return (
              <div className="historyFormBox">
                {this.props.component}
                <div className="blackLayer" onClick={this.props.changeShow}></div>
              </div>
              )
          }
        })()}
      </div>
    )
  }
}

Popup.propTypes = {
  open: PropTypes.Boolean,
  component: PropTypes.Object,
  changeShow: PropTypes.func
}

export default Popup

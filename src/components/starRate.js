/**
 * Created by yinzhaoshu on 7/10/16.
 */
import React, { Component, PropTypes } from 'react'

class StarRate extends Component {
  render() {
    return (
      <div>
        {(() => {
          if (this.props.rate === '1') {
            return (
              <span className="star-cb-group first">
                <input type="radio" id="rating-5" name="rating" value="5" /><label >5</label>
                <input type="radio" id="rating-4" name="rating" value="4" /><label>4</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label >3</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label >2</label>
                <input type="radio" id="rating-1" name="rating" value="1" checked="checked" /><label >1</label>
                <input type="radio" id="rating-0" name="rating" value="0" className="star-cb-clear" /><label>0</label>
              </span>
            )
          } else if (this.props.rate === '2') {
            return (
              <span className="star-cb-group second">
                <input type="radio" id="rating-5" name="rating" value="5" /><label >5</label>
                <input type="radio" id="rating-4" name="rating" value="4" /><label>4</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label >3</label>
                <input type="radio" id="rating-2" name="rating" value="2" checked="checked"/><label >2</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label >1</label>
                <input type="radio" id="rating-0" name="rating" value="0" className="star-cb-clear" /><label>0</label>
              </span>
            )
          } else if (this.props.rate === '3') {
            return (
              <span className="star-cb-group fourth">
                <input type="radio" id="rating-5" name="rating" value="5" /><label >5</label>
                <input type="radio" id="rating-4" name="rating" value="4" /><label>4</label>
                <input type="radio" id="rating-3" name="rating" value="3" checked="checked"/><label >3</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label >2</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label >1</label>
                <input type="radio" id="rating-0" name="rating" value="0" className="star-cb-clear" /><label>0</label>
              </span>
            )
          } else if (this.props.rate === '4') {
            return (
              <span className="star-cb-group fifth">
                <input type="radio" id="rating-5" name="rating" value="5" /><label >5</label>
                <input type="radio" id="rating-4" name="rating" value="4" checked="checked"/><label>4</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label >3</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label >2</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label >1</label>
                <input type="radio" id="rating-0" name="rating" value="0" className="star-cb-clear" /><label>0</label>
              </span>
            )
          }
        })()}
      </div>
    )
  }
}

StarRate.propTypes = {
  rate: PropTypes.array.isRequired
}
export default StarRate

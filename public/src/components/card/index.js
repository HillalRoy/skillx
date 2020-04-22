import './card.scss';
import React from 'react';
/**
 * Card layot
 */
export default class Card extends React.Component {
  /**
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="card">
        <div className="avter"></div>
        <div className="name">{this.props.name}</div>
        <div className="details">
          <div className="grid">
            <div className="filds">Stream</div>
            <div className="value">B.Tech (CSE) 1st year</div>
            <div className="filds">Roll no.</div>
            <div className="value">{this.props.roll}</div>
            <div className="filds">Contact No.</div>
            <div className="value">{this.props.number}</div>
          </div>
        </div>
      </div>
    );
  }
}
